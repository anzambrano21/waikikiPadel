import { createUsuario, findByEmail, getUsuarios, deleteUsuario, toggleBlockUsuario } from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const crearUsuario = async (req, res) => {
  const { nombre, email, telefono, contraseña, codigoPais, role = 'usuario' } = req.body;

  console.log(req.body); // Verifica que los datos lleguen correctamente

  if (!contraseña) {
    return res.status(400).json({ error: "La contraseña es obligatoria" });
  }

  try {
    // Encriptar la contraseña antes de guardar el usuario
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear el nuevo usuario en la base de datos
    const result = await createUsuario({ nombre, email, telefono, contraseña: hashedPassword, codigoPais, role });

    // Generar el token JWT
    const token = jwt.sign(
      { userId: result.id, role: result.role }, // Payload del token (incluye role)
      'secreto', // Clave secreta (debería estar en una variable de entorno)
      { expiresIn: '1h' } // Expiración del token
    );

    // Establecer la cookie 'token' con el token JWT
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true en producción
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      maxAge: 3600000,  // 1 hora
      path: '/'
    });

    // Respuesta exitosa con el token
    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: {
        id: result.id,
        nombre: result.nombre,
        email: result.email,
        role: result.role, // Incluye el role en la respuesta
      }
    });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(400).json({ error: error.message });
  }
};


export const login = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Buscar el usuario por email
    const user = await findByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    // Verificar si el usuario está bloqueado
    if (user.isBlocked) {
      return res.status(400).json({ error: 'Usuario bloqueado' });
    }

    // Comparar contraseñas usando bcryptjs
    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role }, // Payload del token (incluye role)
      'secreto', // Clave secreta (debería estar en una variable de entorno)
      { expiresIn: '1h' } // Expiración del token
    );

    // Establecer la cookie 'token' con el token JWT
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true en producción
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      maxAge: 3600000,
      path: '/'
  });

    // Respuesta exitosa con el token
    res.json({
      message: 'Login exitoso',
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        role: user.role, // Incluye el role en la respuesta
      },
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await getUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un usuario
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteUsuario(id);
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Bloquear/Desbloquear un usuario
export const bloquearUsuario = async (req, res) => {
  const { id } = req.params;
  const { isBlocked } = req.body;

  try {
    await toggleBlockUsuario(id, isBlocked);
    res.json({ message: `Usuario ${isBlocked ? 'bloqueado' : 'desbloqueado'} exitosamente` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Importación de funciones necesarias

export const logout = (req, res) => {
  try {
    // Eliminar la cookie con el nombre 'token'
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      path: '/'
  });

    // Responder indicando que la sesión fue cerrada exitosamente
    res.json({ message: 'Sesión cerrada correctamente' });
  } catch (error) {
    console.error('Error en el logout:', error);
    res.status(500).json({ error: 'Error al cerrar sesión' });
  }
};


export const verifyToken = (req, res) => {
  const token = req.cookies.token;
  console.log("TOKEN " + token)
  
  if (!token) {
      return res.status(401).json({ error: 'No hay token. Inicia sesión' });
  }

  jwt.verify(token, 'secreto', (err, decoded) => {
      if (err) {
          res.clearCookie('token', { // Limpia la cookie inválida
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production',
              sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
              path: '/'
          });
          return res.status(401).json({ error: 'Token inválido' });
      }

      res.json({ message: 'Token válido', user: decoded });
  });
};

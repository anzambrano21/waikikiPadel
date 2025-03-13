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
    const result = await createUsuario({ nombre, email, telefono, contraseña, codigoPais, role });
    res.status(201).json({ message: 'Usuario registrado exitosamente', result });
  } catch (error) {
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

    // Respuesta exitosa
    res.json({
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        role: user.role, // Incluye el role en la respuesta
      },
    });
  } catch (error) {
    // Manejo de errores
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
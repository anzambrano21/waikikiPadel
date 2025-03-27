import {
  createUsuario,
  findByEmail,
  getUsuarios,
  deleteUsuario,
  toggleBlockUsuario,
  findById
} from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import multer from 'multer';
import path from 'path';

// Configuración de multer para almacenar las imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // La ruta donde se guardarán las imágenes
    cb(null, 'uploads/usuarios/');
  },
  filename: (req, file, cb) => {
    // El nombre del archivo será el email del usuario más un timestamp
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Aceptar solo imágenes
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return cb(new Error('Solo se permiten imágenes JPG, JPEG y PNG.'));
    }
    cb(null, true);
  }
}).single('profileImage'); // 'profileImage' es el nombre del campo en el formulario

// Crear usuario con imagen
export const crearUsuario = async (req, res) => {
  const { nombre, email, telefono, contraseña, codigoPais, role = 'usuario' } = req.body;
  
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const imageUrl = req.file ? `/uploads/usuarios/${req.file.filename}` : null; // Guardar ruta de la imagen
      const hashedPassword = await bcrypt.hash(contraseña, 10);

      const result = await createUsuario({
        nombre,
        email,
        telefono,
        contraseña: hashedPassword,
        codigoPais,
        role,
        profileImage: imageUrl, // Guardamos la ruta de la imagen
      });

      res.status(201).json({
        message: 'Usuario registrado exitosamente',
        id: result.insertId,
        profileImage: imageUrl, // Enviamos la ruta de la imagen en la respuesta
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
};


// Login
export const login = async (req, res) => {
  const { email, contraseña } = req.body;
  const user = await findByEmail(email);
  if (!user || !(await bcrypt.compare(contraseña, user.password))) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
  if (user.isBlocked) return res.status(403).json({ error: 'Usuario bloqueado' });

  const token = jwt.sign({ userId: user.id, role: user.role }, 'secreto', { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'Lax' });
  res.json({ message: 'Login exitoso', user: { id: user.id, nombre: user.nombre, role: user.role } });
};

// Logout
export const logout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Sesión cerrada correctamente' });
};

// Verificar token
export const verificaToken = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'No hay token. Inicia sesión' });

  jwt.verify(token, 'secreto', (err, decoded) => {
    if (err) {
      res.clearCookie('token');
      return res.status(401).json({ error: 'Token inválido' });
    }
    res.json({ message: 'Token válido', user: decoded });
  });
};

// Obtener usuarios
export const obtenerUsuarios = async (req, res) => {
  const usuarios = await getUsuarios();
  res.json(usuarios);
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  await deleteUsuario(id);
  res.json({ message: 'Usuario eliminado exitosamente' });
};

// Bloquear/Desbloquear usuario
export const bloquearUsuario = async (req, res) => {
  const { id } = req.params;
  const { isBlocked } = req.body;
  await toggleBlockUsuario(id, isBlocked);
  res.json({ message: `Usuario ${isBlocked ? 'bloqueado' : 'desbloqueado'} exitosamente` });
};


export const obtenerPerfil = async (req, res) => {
  
  const userIdFromToken = req.user.userId; // ID del usuario en el token
  

  try {
    // Buscar el usuario en la base de datos
    const usuario = await findById(userIdFromToken);

    // Si el usuario no existe, retornar error 404
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Excluir la contraseña antes de enviar la respuesta
    const { password, ...perfil } = usuario;

    // Enviar la información del perfil (sin la contraseña)
    res.json(perfil);

  } catch (error) {
    // En caso de error en la consulta a la base de datos, retornar error 500
    res.status(500).json({ error: 'Hubo un error al obtener el perfil del usuario' });
  }
};
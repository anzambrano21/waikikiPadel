// backend/controllers/usuarioController.js
import { createUsuario, findByEmail, getUsuarios, deleteUsuario, toggleBlockUsuario } from '../models/Usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Registrar un nuevo usuario
export const crearUsuario = async (req, res) => {
    const { name, email, phone, password } = req.body;
  
    try {
      const result = await createUsuario({ name, email, phone, password });
      res.status(201).json({ message: 'Usuario registrado exitosamente', result });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Devuelve un error en formato JSON
    }
  };

// Login de usuario
export const login = async (req, res) => {
    const { email, password } = req.body;
  
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
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Contraseña incorrecta' });
      }
  
      // Generar token JWT
      const token = jwt.sign(
        { userId: user.id, role: user.role }, // Payload del token
        'secreto', // Clave secreta (debería estar en una variable de entorno)
        { expiresIn: '1h' } // Expiración del token
      );
  
      // Respuesta exitosa
      res.json({
        message: 'Login exitoso',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
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
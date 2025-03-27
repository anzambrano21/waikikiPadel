import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

// Crear usuario con imagen
export const createUsuario = async (user) => {
  const { nombre, email, telefono, contraseña, codigoPais, role = 'usuario', profileImage } = user;
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  const query = `
    INSERT INTO usuarios (nombre, email, telefono, password, codigoPais, role, isBlocked, profileImage)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [result] = await pool.query(query, [
    nombre,
    email,
    telefono,
    hashedPassword,
    codigoPais,
    role,
    false,
    profileImage // Guardamos la ruta de la imagen
  ]);

  return result;
};

// Buscar usuario por email
export const findByEmail = async (email) => {
  const query = 'SELECT * FROM usuarios WHERE email = ?';
  const [rows] = await pool.query(query, [email]);
  return rows[0];
};

// Obtener todos los usuarios
export const getUsuarios = async () => {
  const [rows] = await pool.query('SELECT * FROM usuarios');
  return rows;
};

// Eliminar usuario
export const deleteUsuario = async (id) => {
  await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
};

// Bloquear/desbloquear usuario
export const toggleBlockUsuario = async (id, isBlocked) => {
  const query = 'UPDATE usuarios SET isBlocked = ? WHERE id = ?';
  await pool.query(query, [isBlocked, id]);
};

// Buscar usuario por id
export const findById = async (id) => {
  const query = 'SELECT * FROM usuarios WHERE id = ?';
  const [rows] = await pool.query(query, [id]);
  return rows[0];
};

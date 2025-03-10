// backend/models/usuarioModel.js
import pool from '../config/db.js';
import bcrypt from 'bcrypt';

// Crear un nuevo usuario
export const createUsuario = async (user) => {
  const { name, email, phone, password, profileImage, role = 'usuario' } = user;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO usuarios (name, email, phone, password, profileImage, role)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await pool.query(query, [name, email, phone, hashedPassword, profileImage, role]);
  return result;
};

// Buscar un usuario por email
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

// Eliminar un usuario
export const deleteUsuario = async (id) => {
  await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
};

// Bloquear/Desbloquear un usuario
export const toggleBlockUsuario = async (id, isBlocked) => {
  const query = 'UPDATE usuarios SET isBlocked = ? WHERE id = ?';
  await pool.query(query, [isBlocked, id]);
};
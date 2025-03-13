import pool from '../config/db.js';
import bcrypt from 'bcryptjs';

export const createUsuario = async (user) => {
  const { nombre, email, telefono, contraseña, codigoPais, role = 'usuario' } = user;

  if (!contraseña) {
    throw new Error("La contraseña es obligatoria");
  }

  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Query para insertar el usuario en la base de datos
    const query = `
      INSERT INTO usuarios (nombre, email, telefono, contraseña, codigoPais, role, isBlocked)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    // Ejecutar la consulta
    const [result] = await pool.query(query, [
      nombre,
      email,
      telefono,
      hashedPassword,
      codigoPais,
      role,
      false, // isBlocked por defecto es false
    ]);

    // Retornar el resultado
    return result;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw new Error('No se pudo crear el usuario');
  }
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
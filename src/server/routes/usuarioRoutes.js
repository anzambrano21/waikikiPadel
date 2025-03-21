import express from 'express';
import {
  crearUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  login,
  bloquearUsuario,
  verifyToken,
  logout,  // Importar la nueva función logout
} from '../controllers/usuarioController.js';

const router = express.Router();

// Rutas para los usuarios
router.post('/', crearUsuario); // Registrar usuario
router.post('/login', login); // Login de usuario
router.post('/logout', logout); // Nueva ruta para cerrar sesión
router.get('/', obtenerUsuarios); // Obtener todos los usuarios
router.delete('/:id', eliminarUsuario); // Eliminar un usuario
router.put('/:id/bloquear', bloquearUsuario); // Bloquear/Desbloquear un usuario
router.get('/verificarToken', verifyToken);  // Verificar si el token es válido

export default router;

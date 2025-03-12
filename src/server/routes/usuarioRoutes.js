import express from 'express';
import {
  crearUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  login,
  bloquearUsuario,
} from '../controllers/usuarioController.js';


const router = express.Router();

// Rutas para los usuarios
router.post('/', crearUsuario); // Registrar usuario
router.post('/login', login); // Login de usuario
router.get('/', obtenerUsuarios); // Obtener todos los usuarios
router.delete('/:id', eliminarUsuario); // Eliminar un usuario
router.put('/:id/bloquear', bloquearUsuario); // Bloquear/Desbloquear un usuario

export default router;
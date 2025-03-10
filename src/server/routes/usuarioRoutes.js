import express from 'express';
import multer from 'multer';
import {
  crearUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  login,
  bloquearUsuario,
} from '../controllers/usuarioController.js';
import path from 'path';

const router = express.Router();

// Configuración de Multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Ruta correcta
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
  },
});
const upload = multer({ storage });

// Rutas para los usuarios
router.post('/', upload.single('profileImage'), crearUsuario); // Registrar usuario
router.post('/login', login); // Login de usuario
router.get('/', obtenerUsuarios); // Obtener todos los usuarios
router.delete('/:id', eliminarUsuario); // Eliminar un usuario
router.put('/:id/bloquear', bloquearUsuario); // Bloquear/Desbloquear un usuario

export default router;
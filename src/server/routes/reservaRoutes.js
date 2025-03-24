import express from "express";
import {
    crearReserva, // Nueva función
    obtenerReservas,
    obtenerReservaPorId,
    actualizarEstadoReserva,
    obtenerReservasUsuario,
    eliminarReserva,
} from "../controllers/reservaController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Rutas para las reservas
router.post("/", verifyToken, crearReserva); 
router.get("/", obtenerReservas);
router.get("/:id", obtenerReservaPorId);
router.put("/:id", actualizarEstadoReserva);
router.delete("/:id", eliminarReserva);
// Agrega esta ruta en el archivo de rutas de reservas (reservaRoutes.js)
router.get("/usuario/:id", obtenerReservasUsuario)


export default router;
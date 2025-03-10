import express from "express";
import {
    crearReserva, // Nueva función
    obtenerReservas,
    obtenerReservaPorId,
    actualizarEstadoReserva,
    eliminarReserva,
} from "../controllers/reservaController.js";

const router = express.Router();

// Rutas para las reservas
router.post("/", crearReserva); // Nueva ruta
router.get("/", obtenerReservas);
router.get("/:id", obtenerReservaPorId);
router.put("/:id", actualizarEstadoReserva);
router.delete("/:id", eliminarReserva);

export default router;
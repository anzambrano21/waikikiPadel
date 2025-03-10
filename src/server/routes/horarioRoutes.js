import express from "express";
import {
    obtenerHorariosDisponibles, // Nueva función
    crearHorario,
    obtenerHorarioPorId,
    actualizarEstadoHorario,
    eliminarHorario,
} from "../controllers/horarioController.js";

const router = express.Router();

// Rutas para los horarios
router.get("/disponibles", obtenerHorariosDisponibles); // Nueva ruta
router.post("/", crearHorario);
router.get("/:id", obtenerHorarioPorId);
router.put("/:id/estado", actualizarEstadoHorario);
router.delete("/:id", eliminarHorario);

export default router;
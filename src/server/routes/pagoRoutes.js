import express from "express";
import {
    crearPago,
    obtenerPagos,
    obtenerPagoPorId,
    actualizarEstadoPago,
    eliminarPago,
} from "../controllers/pagoController.js";

const router = express.Router();

// Rutas para los pagos
router.post("/", crearPago);
router.get("/", obtenerPagos);
router.get("/:id", obtenerPagoPorId);
router.put("/:id/estado", actualizarEstadoPago);
router.delete("/:id", eliminarPago);

export default router;
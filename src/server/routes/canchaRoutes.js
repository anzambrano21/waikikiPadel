import express from "express";
import {
    obtenerCanchas,
    crearCancha,
    obtenerCanchaPorId,
    actualizarCancha,
    eliminarCancha,
} from "../controllers/canchaController.js";

const router = express.Router();

// Rutas para las canchas
router.get("/", obtenerCanchas);
router.post("/", crearCancha);
router.get("/:id", obtenerCanchaPorId);
router.put("/:id", actualizarCancha);
router.delete("/:id", eliminarCancha);

export default router;
import express from "express";
import {
    crearReserva, // Nueva función
    obtenerReservas,
    obtenerReservaPorId,
    actualizarEstadoReserva,
    obtenerReservasPorUsuario,
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
router.get("/usuario", verifyToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const reservas = await obtenerReservasPorUsuario(userId); // Obtener reservas por userId
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las reservas del usuario", error });
    }
});


export default router;
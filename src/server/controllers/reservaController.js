import {
    getReservas,
    getReservaById,
    updateReservaStatus,
    deleteReserva,
} from "../models/Reserva.js";
import pool from "../config/db.js";

// Crear una reserva
export const crearReserva = async (req, res) => {
    const { user_id, cancha_id, fecha, hora_inicio, hora_fin } = req.body;

    try {
        // Verificar si el horario ya está ocupado
        const [horarioExistente] = await pool.query(
            `SELECT id FROM horarios 
             WHERE cancha_id = ? AND fecha = ? AND hora_inicio = ? AND hora_fin = ?`,
            [cancha_id, fecha, hora_inicio, hora_fin]
        );

        if (horarioExistente.length > 0) {
            return res.status(400).json({ message: "El horario ya está ocupado" });
        }

        // Crear el horario con estado 'ocupado'
        const [result] = await pool.query(
            `INSERT INTO horarios (cancha_id, fecha, hora_inicio, hora_fin, estado) 
             VALUES (?, ?, ?, ?, 'ocupado')`,
            [cancha_id, fecha, hora_inicio, hora_fin]
        );

        // Crear la reserva
        const [reserva] = await pool.query(
            `INSERT INTO reservaciones (user_id, horario_id, status) 
             VALUES (?, ?, 'pendiente')`,
            [user_id, result.insertId]
        );

        res.status(201).json({ id: reserva.insertId });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la reserva", error });
    }
};

// Obtener todas las reservas
export const obtenerReservas = async (req, res) => {
    try {
        const reservas = await getReservas();
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las reservas", error });
    }
};

// Obtener una reserva por ID
export const obtenerReservaPorId = async (req, res) => {
    try {
        const reserva = await getReservaById(req.params.id);
        if (!reserva) {
            return res.status(404).json({ message: "Reserva no encontrada" });
        }
        res.status(200).json(reserva);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la reserva", error });
    }
};

// Actualizar el estado de una reserva
export const actualizarEstadoReserva = async (req, res) => {
    try {
        const { status } = req.body;
        await updateReservaStatus(req.params.id, status);
        res.status(200).json({ message: "Estado de la reserva actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el estado de la reserva", error });
    }
};

// Eliminar una reserva
export const eliminarReserva = async (req, res) => {
    try {
        await deleteReserva(req.params.id);
        res.status(200).json({ message: "Reserva eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la reserva", error });
    }
};
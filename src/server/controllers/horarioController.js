import {
    getHorarios,
    createHorario,
    getHorarioById,
    updateHorarioEstado,
    deleteHorario,
} from "../models/Horario.js";
import pool from '../config/db.js';

// Obtener horarios disponibles para una cancha en una fecha específica
export const obtenerHorariosDisponibles = async (req, res) => {
    const { cancha_id, fecha } = req.query; // Parámetros de la solicitud

    try {
        // Obtener los horarios ocupados para la cancha y fecha específicas
        const [horariosOcupados] = await pool.query(
            `SELECT hora_inicio, hora_fin FROM horarios 
             WHERE cancha_id = ? AND fecha = ? AND estado = 'ocupado'`,
            [cancha_id, fecha]
        );

        // Generar horarios disponibles (de 8:00 AM a 10:00 PM, bloques de 1 hora)
        const horariosDisponibles = [];
        const horaInicio = 8; // 8:00 AM
        const horaFin = 22; // 10:00 PM (último bloque: 10:00 PM - 11:00 PM)

        for (let hora = horaInicio; hora <= horaFin; hora++) {
            const horaInicioHorario = `${hora.toString().padStart(2, '0')}:00:00`; // Formato HH:MM:SS
            const horaFinHorario = `${(hora + 1).toString().padStart(2, '0')}:00:00`; // Formato HH:MM:SS

            // Verificar si el horario está ocupado
            const estaOcupado = horariosOcupados.some(
                (horarioOcupado) =>
                    horarioOcupado.hora_inicio === horaInicioHorario &&
                    horarioOcupado.hora_fin === horaFinHorario
            );

            if (!estaOcupado) {
                horariosDisponibles.push({
                    hora_inicio: horaInicioHorario,
                    hora_fin: horaFinHorario,
                });
            }
        }

        res.json(horariosDisponibles);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los horarios", error });
    }
};


// Obtener todos los horarios
export const obtenerHorarios = async (req, res) => {
    try {
        const horarios = await getHorarios();
        res.status(200).json(horarios);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los horarios", error });
    }
};

// Crear un nuevo horario
export const crearHorario = async (req, res) => {
    try {
        const { canchaId, dayWeek, startTime, endTime, estado } = req.body;
        const id = await createHorario(canchaId, dayWeek, startTime, endTime, estado);
        res.status(201).json({ id, canchaId, dayWeek, startTime, endTime, estado });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el horario", error });
    }
};

// Obtener un horario por ID
export const obtenerHorarioPorId = async (req, res) => {
    try {
        const horario = await getHorarioById(req.params.id);
        if (!horario) {
            return res.status(404).json({ message: "Horario no encontrado" });
        }
        res.status(200).json(horario);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el horario", error });
    }
};

// Actualizar el estado de un horario
export const actualizarEstadoHorario = async (req, res) => {
    try {
        const { estado } = req.body;
        await updateHorarioEstado(req.params.id, estado);
        res.status(200).json({ message: "Estado del horario actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el estado del horario", error });
    }
};

// Eliminar un horario
export const eliminarHorario = async (req, res) => {
    try {
        await deleteHorario(req.params.id);
        res.status(200).json({ message: "Horario eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el horario", error });
    }
};
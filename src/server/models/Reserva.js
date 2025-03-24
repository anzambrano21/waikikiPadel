import pool from "../config/db.js";

// Obtener todas las reservas
export const getReservas = async () => {
    const [rows] = await pool.query("SELECT * FROM reservaciones");
    return rows;
};

// Obtener una reserva por ID
export const getReservaById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM reservaciones WHERE id = ?", [id]);
    return rows[0];
};

// Actualizar el estado de una reserva
export const updateReservaStatus = async (id, status) => {
    await pool.query("UPDATE reservaciones SET status = ? WHERE id = ?", [status, id]);
};

// Eliminar una reserva
export const deleteReserva = async (id) => {
    await pool.query("DELETE FROM reservaciones WHERE id = ?", [id]);
};

// Función para obtener las reservas de un usuario con todas las reservas (sin filtrar las canceladas)
export const getReservasPorUsuario = async (user_id) => {
    const [reservas] = await pool.query(
        `SELECT r.id, h.date, h.start_time, h.end_time, c.name AS cancha_name, r.status
         FROM reservaciones r
         JOIN horarios h ON r.horario_id = h.id
         JOIN canchas c ON h.cancha_id = c.id
         WHERE r.user_id = ?`,  // Hemos quitado el filtro de 'cancelada'
        [user_id]
    );
    return reservas;
};

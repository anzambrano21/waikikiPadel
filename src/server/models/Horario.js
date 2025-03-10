import pool from "../config/db.js";

// Obtener todos los horarios
export const getHorarios = async () => {
    const [rows] = await pool.query("SELECT * FROM horarios");
    return rows;
};

// Crear un nuevo horario
export const createHorario = async (canchaId, fecha, startTime, endTime, estado = "disponible") => {
    const [result] = await pool.query(
        "INSERT INTO horarios (cancha_id, fecha, hora_inicio, hora_fin, estado) VALUES (?, ?, ?, ?, ?)",
        [canchaId, fecha, startTime, endTime, estado]
    );
    return result.insertId;
};

// Obtener un horario por ID
export const getHorarioById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM horarios WHERE id = ?", [id]);
    return rows[0];
};

// Actualizar el estado de un horario
export const updateHorarioEstado = async (id, estado) => {
    await pool.query("UPDATE horarios SET estado = ? WHERE id = ?", [estado, id]);
};

// Eliminar un horario
export const deleteHorario = async (id) => {
    await pool.query("DELETE FROM horarios WHERE id = ?", [id]);
};
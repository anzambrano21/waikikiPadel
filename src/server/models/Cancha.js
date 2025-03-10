import pool from "../config/db.js";

// Obtener todas las canchas
export const getCanchas = async () => {
    const [rows] = await pool.query("SELECT * FROM canchas");
    return rows;
};

// Crear una nueva cancha
export const createCancha = async (name, image, pricePerHour) => {
    const [result] = await pool.query(
        "INSERT INTO canchas (name, image, price_per_hour) VALUES (?, ?, ?)",
        [name, image, pricePerHour]
    );
    return result.insertId;
};

// Obtener una cancha por ID
export const getCanchaById = async (id) => {
    const [rows] = await pool.query("SELECT * FROM canchas WHERE id = ?", [id]);
    return rows[0];
};

// Actualizar una cancha
export const updateCancha = async (id, name, image, pricePerHour) => {
    await pool.query(
        "UPDATE canchas SET name = ?, image = ?, price_per_hour = ? WHERE id = ?",
        [name, image, pricePerHour, id]
    );
};

// Eliminar una cancha
export const deleteCancha = async (id) => {
    await pool.query("DELETE FROM canchas WHERE id = ?", [id]);
};
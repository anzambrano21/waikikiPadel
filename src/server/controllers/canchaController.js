import {
    getCanchas,
    createCancha,
    getCanchaById,
    updateCancha,
    deleteCancha,
} from "../models/Cancha.js";

// Obtener todas las canchas
export const obtenerCanchas = async (req, res) => {
    try {
        const canchas = await getCanchas();
        res.status(200).json(canchas);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las canchas", error });
    }
};

// Crear una nueva cancha
export const crearCancha = async (req, res) => {
    try {
        const { name, image, pricePerHour } = req.body;
        const id = await createCancha(name, image, pricePerHour);
        res.status(201).json({ id, name, image, pricePerHour });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la cancha", error });
    }
};

// Obtener una cancha por ID
export const obtenerCanchaPorId = async (req, res) => {
    try {
        const cancha = await getCanchaById(req.params.id);
        if (!cancha) {
            return res.status(404).json({ message: "Cancha no encontrada" });
        }
        res.status(200).json(cancha);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la cancha", error });
    }
};

// Actualizar una cancha
export const actualizarCancha = async (req, res) => {
    try {
        const { name, image, pricePerHour } = req.body;
        await updateCancha(req.params.id, name, image, pricePerHour);
        res.status(200).json({ message: "Cancha actualizada" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la cancha", error });
    }
};

// Eliminar una cancha
export const eliminarCancha = async (req, res) => {
    try {
        await deleteCancha(req.params.id);
        res.status(200).json({ message: "Cancha eliminada" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la cancha", error });
    }
};
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function CardCancha({ id, name, image, price_per_hour }) {
    const [horarios, setHorarios] = useState([]); // Estado para los horarios
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        // Función para obtener los horarios disponibles del día actual
        const fetchHorarios = async () => {
            try {
                const fechaActual = new Date().toISOString().split("T")[0]; // Fecha actual en formato YYYY-MM-DD
                const response = await fetch(
                    `http://localhost:3000/api/horarios/disponibles?cancha_id=${id}&fecha=${fechaActual}`
                );
                if (!response.ok) {
                    throw new Error("Error al obtener los horarios");
                }
                const data = await response.json();
                setHorarios(data); // Actualiza el estado con los horarios obtenidos
            } catch (error) {
                setError(error.message); // Maneja el error
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        fetchHorarios(); // Llama a la función para obtener los horarios
    }, [id]); // Dependencia: ID de la cancha

    return (
        <div
            id="cardCancha"
            className="my-2 shadow-xl w-full md:w-sm md:mx-4 md:mr-4 rounded-md cursor-pointer transform transition-transform duration-300 md:hover:scale-105"
        >
            <Link to={`/reservar?cancha=${id}&fecha=${new Date().toISOString().split("T")[0]}`}>
                <img src={image} alt={name} className="w-full h-30 object-cover rounded-t-md" />
                <div className="p-4">
                    <div className="flex align-items-center text-center justify-between">
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <div>
                            <p className="text-sm">1 h desde</p>
                            <p className="text-lg font-bold">US ${price_per_hour}</p>
                        </div>
                    </div>

                    {/* Mostrar horarios disponibles */}
                    {loading ? (
                        <p className="text-center">Cargando horarios...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : (
                        <div className="mt-2">
                            <h4 className="text-lg font-bold">Horarios disponibles:</h4>
                            <ul>
                                {horarios.map((horario) => (
                                    <li key={horario.id} className="text-sm">
                                        {horario.horaInicio} - {horario.horaFin}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default CardCancha;
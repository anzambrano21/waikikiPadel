import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Cambia a 'react-router-dom'
import LayoutClient from "../../layout/LayoutClient.jsx";
import CardCancha from "../../components/CardCancha.jsx";
import CardCanchaReservada from "../../components/CardCanchaReservada.jsx";

function Principal() {

    const [canchas, setCanchas] = useState([]); // Estado para las canchas
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        // Función para obtener las canchas desde la API
        const fetchCanchas = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/canchas");
                if (!response.ok) {
                    throw new Error("Error al obtener las canchas");
                }
                const data = await response.json();
                console.log("Datos de la API:", data);
                setCanchas(data); // Actualiza el estado con los datos obtenidos
            } catch (error) {
                setError(error.message); // Maneja el error
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };

        fetchCanchas(); // Llama a la función para obtener las canchas
    }, []); // El array vacío asegura que esto solo se ejecute una vez



    // Estado de ejemplo para las reservas
    //const reservas = []; // Si no hay reservas, el array está vacío
    const reservas = [{ id: 1 }, { id: 2 }]; // Si hay reservas, descomenta esta línea

    return (
        <LayoutClient>
            <div className="overflow-x-hidden">
                <div className="mx-4 my-2 flex justify-between items-center py-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Mis Reservaciones</h1>
                </div>

                {/* Contenedor para reservas o botón */}
                <div className="flex">
                    {reservas.length === 0 ? (
                        // Si no hay reservas, muestra el botón
                        <Link to="/canchasdispo">
                            <button
                                type="button"
                                id="CardCrearReservacion"
                                className="mx-4 py-6 md:py-8 p-4 md:p-6 border-2 border-blue-950 transform transition-transform duration-300 md:hover:scale-105 rounded-lg cursor-pointer"
                            >
                                <p className="text-3xl text-blue-950">+</p>
                                <p className="text-lg md:text-xl text-blue-950 font-bold">Reserva tu cancha</p>
                            </button>
                        </Link>
                    ) : (
                        // Si hay reservas, muestra las tarjetas con scroll horizontal
                        <div className="flex overflow-x-auto horarios-container mx-4 ">
                            {reservas.map((reserva) => (
                                <CardCanchaReservada key={reserva.id} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Canchas disponibles */}
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl my-4 mx-4 font-bold text-blue-950">Canchas Disponibles</h1>

                    {/* Mostrar mensaje de carga o error */}
                    {loading ? (
                        <p className="text-center">Cargando canchas...</p>
                    ) : error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : (
                        <div id="canchasCont" className="flex flex-wrap">
                            {canchas.map((cancha) => (
                                <CardCancha
                                    key={cancha.id}
                                    id={cancha.id}
                                    name={cancha.name}
                                    image={cancha.image}
                                    price_per_hour={cancha.price_per_hour}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </LayoutClient>
    );
}

export default Principal;
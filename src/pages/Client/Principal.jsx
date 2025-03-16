import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Cambia a 'react-router-dom'
import LayoutClient from "../../layout/LayoutClient.jsx";
import CardCancha from "../../components/CardCancha.jsx";
import CardCanchaReservada from "../../components/CardCanchaReservada.jsx";
import { ClipLoader } from "react-spinners"; // Importar el spinner

function Principal() {
    const [canchas, setCanchas] = useState([]); // Estado para las canchas
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    useEffect(() => {
        const fetchCanchasYHorarios = async () => {
            try {
                // Obtener las canchas
                const responseCanchas = await fetch("http://localhost:3000/api/canchas");
                if (!responseCanchas.ok) {
                    throw new Error("Error al obtener las canchas");
                }
                const dataCanchas = await responseCanchas.json();
    
                // Obtener los horarios disponibles para cada cancha
                const canchasConHorarios = await Promise.all(
                    dataCanchas.map(async (cancha) => {
                        const fechaActual = new Date().toISOString().split("T")[0]; // Fecha actual
                        const responseHorarios = await fetch(
                            `http://localhost:3000/api/horarios/disponibles?cancha_id=${cancha.id}&fecha=${fechaActual}`
                        );
                        if (!responseHorarios.ok) {
                            throw new Error("Error al obtener los horarios");
                        }
                        const dataHorarios = await responseHorarios.json();
                        console.log("dataHorarios:", dataHorarios); // Depuración
                        return { ...cancha, horarios: dataHorarios }; // Agregar horarios a la cancha
                    })
                );
    
                setCanchas(canchasConHorarios); // Actualiza el estado con las canchas y sus horarios
            } catch (error) {
                setError(error.message); // Maneja el error
            } finally {
                setLoading(false); // Finaliza la carga
            }
        };
    
        fetchCanchasYHorarios(); // Llama a la función para obtener los datos
    }, []);

    // Estado de ejemplo para las reservas
    const reservas = [{ id: 1 }, { id: 2 }]; // Si no hay reservas, deja el array vacío

    return (
        <LayoutClient>
            <div className="overflow-x-hidden"> {/* Evita el desbordamiento en el eje x */}
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
                        <div className="flex overflow-x-auto horarios-container mx-4 max-w-full"> {/* Añade max-w-full */}
                            {reservas.map((reserva) => (
                                <CardCanchaReservada key={reserva.id} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Canchas disponibles */}
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl my-4 mx-4 font-bold text-blue-950">Canchas Disponibles</h1>

                    {/* Mostrar spinner o error */}
                    {loading ? (
                        <div className="flex justify-center items-center h-64"> {/* Contenedor para el spinner */}
                            <ClipLoader color="#1E3A8A" size={50} /> {/* Spinner */}
                        </div>
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
                                    horarios={cancha.horarios} // Pasar los horarios como prop
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
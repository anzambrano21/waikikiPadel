import React, { useState, useEffect } from "react";
import LayoutClient from "../../layout/LayoutClient.jsx";
import CardCancha from "../../components/CardCancha.jsx"; // Asegúrate de que el componente CardCancha esté correctamente configurado
import { ClipLoader } from "react-spinners"; // Importar el spinner

function Canchas() {
    const [canchas, setCanchas] = useState([]); // Estado para las canchas
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    // Obtener canchas y horarios
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

    // Si está cargando o hay un error, muestra el Spinner o el error
    if (loading) {
        return (
            <LayoutClient>
                <div className="flex h-screen items-center justify-center">
                    <ClipLoader color="#1E3A8A" size={50} />
                </div>
            </LayoutClient>
        );
    }

    if (error) {
        return (
            <LayoutClient>
                <div className="flex h-screen items-center justify-center">
                    <p className="text-red-500">Error: {error}</p>
                </div>
            </LayoutClient>
        );
    }

    return (
        <LayoutClient>
            <div className="px-0 md-mx-4 py-8">
                <h1 className="text-3xl font-bold text-blue-950 px-2 mb-4">Canchas Disponibles</h1>

                                {/* Canchas disponibles */}
                                <div className="flex flex-col w-full ">

                                    {/* Mostrar spinner o error */}
                                    {loading ? (
                                        <div className="flex justify-center items-center h-64">
                                            <ClipLoader color="#1E3A8A" size={50} />
                                        </div>
                                    ) : error ? (
                                        <p className="text-center text-red-500">Error: {error}</p>
                                    ) : (
                                        <div id="canchasCont" className="flex flex-wrap w-full">
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

export default Canchas;

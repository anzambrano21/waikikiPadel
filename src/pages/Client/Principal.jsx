import { Link } from "react-router"; // Cambia a 'react-router-dom'
import LayoutClient from "../../layout/LayoutClient.jsx";
import CardCancha from "../../components/CardCancha.jsx";
import CardCanchaReservada from "../../components/CardCanchaReservada.jsx";

function Principal() {
    // Datos de ejemplo para las canchas
    const canchas = [
        {
            id: 1,
            nombre: "Cancha 1",
            precio: 10,
            horarios: ["10:00am", "11:00am", "12:00pm", "1:00pm", "1:00pm"],
        },
        {
            id: 2,
            nombre: "Cancha 2",
            precio: 12,
            horarios: ["10:00am", "11:00am", "12:00pm", "1:00pm"],
        },
        {
            id: 3,
            nombre: "Cancha 3",
            precio: 12,
            horarios: ["10:00am", "11:00am", "12:00pm", "1:00pm"],
        },
    ];

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

                    <div id="canchasCont" className="flex flex-wrap">
                        {canchas.map((cancha) => {
                            const fechaActual = new Date().toLocaleDateString('en-CA'); // Fecha actual en YYYY-MM-DD
                            return (
                                <CardCancha
                                    key={cancha.id}
                                    id={cancha.id}
                                    nombre={cancha.nombre}
                                    precio={cancha.precio}
                                    horarios={cancha.horarios}
                                    fecha={fechaActual} // Pasar la fecha en formato YYYY-MM-DD
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </LayoutClient>
    );
}

export default Principal;
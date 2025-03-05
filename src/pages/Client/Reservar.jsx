import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import LayoutClient from "../../layout/LayoutClient";
import CanchaImg from "../../assets/canchaPadel.jpg";

function Reservar() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const canchaId = searchParams.get("cancha");
    const fechaInicial = searchParams.get("fecha");

    // Formatear la fecha inicial a yyyy-mm-dd
    const formatDate = (dateString) => {
        if (!dateString) return new Date().toISOString().split("T")[0]; // Fecha actual en yyyy-mm-dd
        const [day, month, year] = dateString.split("/");
        return `${year}-${month}-${day}`; // Convertir dd/mm/yyyy a yyyy-mm-dd
    };

    const [fechaSeleccionada, setFechaSeleccionada] = useState(formatDate(fechaInicial));
    const [horasSeleccionadas, setHorasSeleccionadas] = useState([]);

    const handleHoraClick = (hora) => {
        if (horasSeleccionadas.includes(hora)) {
            setHorasSeleccionadas(horasSeleccionadas.filter(h => h !== hora));
        } else {
            setHorasSeleccionadas([...horasSeleccionadas, hora]);
        }
    };

    const handleFechaChange = (e) => {
        setFechaSeleccionada(e.target.value); // Actualizar la fecha seleccionada
    };

    const montoTotal = horasSeleccionadas.length * 10; // Precio por hora

    return (
        <LayoutClient>
            <div className="flex flex-col min-h-screen">
                <img
                    src={CanchaImg}
                    alt="Cancha de pádel"
                    className="w-full h-40 object-cover"
                />

                <div id="infoCont" className="p-4 flex-grow overflow-y-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl md:text-4xl font-bold text-blue-950">Reservar:</h1>
                        <h2 className="text-2xl md:text-3xl font-bold mr-4 text-green-600">
                            Cancha {canchaId}
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between my-4">
                        <h1 className="text-2xl font-bold my-2 text-blue-950">Elige cuando deseas jugar:</h1>
                        <div className="flex justify-center">
                            <input
                                type="date"
                                value={fechaSeleccionada}
                                onChange={handleFechaChange}
                                className="shadow w-xs p-4"
                            />
                        </div>
                    </div>

                    <div id="contHoras" className="flex flex-col my-1">
                        <h2 className="text-xl font-bold my-2 text-blue-950">Horas disponibles</h2>

                        <ul className="flex justify-center flex-wrap">
                            {["10:00am", "11:00am", "12:00pm", "1:00pm"].map((hora) => (
                                <li key={hora}>
                                    <div
                                        id="horario"
                                        className={`flex justify-center items-center border w-25 mr-2 mb-2 p-2 shadow-2xl rounded ${
                                            horasSeleccionadas.includes(hora)
                                                ? "bg-[#113872] text-white"
                                                : "hover:bg-[#113872] hover:text-white"
                                        } duration-300 ease-in`}
                                        onClick={() => handleHoraClick(hora)}
                                    >
                                        <p>{hora}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {horasSeleccionadas.length > 0 && (
                        <>
                            <div id="precioCont" className="flex flex-col">
                                <h3 className="text-xl font-bold text-blue-950">Monto a pagar</h3>
                                <div className="bg-[#113872] text-white text-center rounded p-4 my-4">
                                    <p className="text-2xl font-bold">{montoTotal}$</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {horasSeleccionadas.length > 0 && (
                    <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 bg-white shadow-lg">
                        <Link to={`/metodospago?cancha=${canchaId}&fecha=${fechaSeleccionada}&horas=${horasSeleccionadas.join(',')}`}>
                            <button className="bg-blue-700 text-white rounded-full w-md p-3">
                                Métodos de Pago
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </LayoutClient>
    );
}

export default Reservar;
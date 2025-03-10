import LayoutAdmin from "../../layout/LayoutAdmin.jsx";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router"; // Cambia a 'react-router-dom'

function ReservarAdmin() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const canchaId = searchParams.get("cancha");
    const fechaInicial = searchParams.get("fecha");
    const horaInicial = searchParams.get("hora"); // Obtener la hora seleccionada desde la URL

    const [fechaSeleccionada, setFechaSeleccionada] = useState(fechaInicial || new Date().toISOString().split("T")[0]);
    const [horasSeleccionadas, setHorasSeleccionadas] = useState([]);
    const [errorFecha, setErrorFecha] = useState("");

    const fechaActual = new Date().toISOString().split("T")[0];

    // Validar la fecha seleccionada
    const validarFecha = (fecha) => {
        if (fecha < fechaActual) {
            setErrorFecha("No se pueden seleccionar fechas anteriores al día actual.");
            return false;
        } else {
            setErrorFecha("");
            return true;
        }
    };

    // Actualiza el estado cuando cambia la fecha o la hora de la URL
    useEffect(() => {
        if (fechaInicial) {
            setFechaSeleccionada(fechaInicial);
            validarFecha(fechaInicial);
        }
        if (horaInicial) {
            setHorasSeleccionadas([horaInicial]); // Marcar la hora seleccionada
        }
    }, [fechaInicial, horaInicial]);

    // Manejar el cambio de fecha
    const handleFechaChange = (e) => {
        const nuevaFecha = e.target.value;
        setFechaSeleccionada(nuevaFecha);
        validarFecha(nuevaFecha);
    };

    // Manejar el clic en una hora
    const handleHoraClick = (hora) => {
        if (fechaSeleccionada < fechaActual) {
            setErrorFecha("No se pueden seleccionar horas para fechas pasadas.");
            return;
        }

        if (horasSeleccionadas.includes(hora)) {
            setHorasSeleccionadas(horasSeleccionadas.filter(h => h !== hora));
        } else {
            setHorasSeleccionadas([...horasSeleccionadas, hora]);
        }
    };

    const montoTotal = horasSeleccionadas.length * 10;

    return (
        <LayoutAdmin>
            <div className="flex flex-col min-h-screen">
                <img
                    src='public/canchaPadel.jpg'
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
                                min={fechaActual}
                                className="shadow w-xs p-4"
                            />
                        </div>
                    </div>

                    {errorFecha && (
                        <div className="text-red-500 text-center my-2">
                            {errorFecha}
                        </div>
                    )}

                    <div id="contHoras" className="flex flex-col my-1">
                        <h2 className="text-xl font-bold my-2 text-blue-950">Horas disponibles</h2>

                        <ul className="flex justify-center flex-wrap">
                            {["10:00am", "11:00am", "12:00pm", "1:00pm"].map((hora) => (
                                <li key={hora}>
                                    <div
                                        id="horario"
                                        className={`flex justify-center items-center border w-25 mr-2 mb-2 p-2 shadow-2xl rounded cursor-pointer ${
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
                    <div className="sticky bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex justify-center">
                        <Link to={`/metodospagoadmin?cancha=${canchaId}&fecha=${fechaSeleccionada}&horas=${horasSeleccionadas.join(',')}`}>
                            <button className="bg-blue-700 text-white rounded-full w-md p-3">
                                Métodos de Pago
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </LayoutAdmin>
    );
}

export default ReservarAdmin;
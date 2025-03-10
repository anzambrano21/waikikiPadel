import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import LayoutClient from "../../layout/LayoutClient.jsx";
import CanchaImg from "../../../public/canchaPadel.jpg";

function Reservar() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const canchaId = searchParams.get("cancha");
    const fechaInicial = searchParams.get("fecha");

    const [fechaSeleccionada, setFechaSeleccionada] = useState(fechaInicial || new Date().toISOString().split("T")[0]);
    const [horasSeleccionadas, setHorasSeleccionadas] = useState([]);
    const [errorFecha, setErrorFecha] = useState("");

    const fechaActual = new Date().toISOString().split("T")[0];

    // Datos de ejemplo (reemplaza esto con una llamada a tu API)
    const horariosDisponibles = [
        { id: 1, cancha_id: 1, dia: "2023-10-01", horaInicio: "10:00 AM", horaFin: "11:00 AM", estado: "disponible" },
        { id: 2, cancha_id: 1, dia: "2023-10-01", horaInicio: "11:00 AM", horaFin: "12:00 PM", estado: "disponible" },
        { id: 3, cancha_id: 1, dia: "2023-10-01", horaInicio: "12:00 PM", horaFin: "1:00 PM", estado: "disponible" },
        { id: 4, cancha_id: 1, dia: "2023-10-01", horaInicio: "1:00 PM", horaFin: "2:00 PM", estado: "disponible" },
    ];

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

    // Actualiza el estado cuando cambia la fecha de la URL
    useEffect(() => {
        if (fechaInicial) {
            setFechaSeleccionada(fechaInicial);
            validarFecha(fechaInicial);
        }
    }, [fechaInicial]);

    // Manejar el cambio de fecha
    const handleFechaChange = (e) => {
        const nuevaFecha = e.target.value;
        setFechaSeleccionada(nuevaFecha);
        validarFecha(nuevaFecha);
    };

    // Manejar el clic en una hora
    const handleHoraClick = (horario) => {
        if (fechaSeleccionada < fechaActual) {
            setErrorFecha("No se pueden seleccionar horas para fechas pasadas.");
            return;
        }

        if (horasSeleccionadas.includes(horario.id)) {
            setHorasSeleccionadas(horasSeleccionadas.filter(id => id !== horario.id));
        } else {
            setHorasSeleccionadas([...horasSeleccionadas, horario.id]);
        }
    };

    // Calcular el monto total
    const precioPorHora = 10; // Precio por hora (puedes cambiarlo según tus necesidades)
    const montoTotal = horasSeleccionadas.length * precioPorHora;

    // Navegar a MetodosPago con los IDs de los horarios seleccionados y el monto total
    const navigate = useNavigate();
    const handleReservarClick = () => {
        if (horasSeleccionadas.length === 0) {
            setErrorFecha("Debes seleccionar al menos una hora.");
            return;
        }

        // Navegar a MetodosPago con los IDs de los horarios seleccionados y el monto total
        navigate(`/metodospago?cancha=${canchaId}&fecha=${fechaSeleccionada}&horarios=${horasSeleccionadas.join(",")}&montoTotal=${montoTotal}`);
    };

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
                            {horariosDisponibles.map((horario) => (
                                <li key={horario.id}>
                                    <div
                                        id="horario"
                                        className={`flex justify-center items-center border w-25 mr-2 mb-2 p-2 shadow-2xl rounded cursor-pointer ${
                                            horasSeleccionadas.includes(horario.id)
                                                ? "bg-[#113872] text-white"
                                                : "hover:bg-[#113872] hover:text-white"
                                        } duration-300 ease-in`}
                                        onClick={() => handleHoraClick(horario)}
                                    >
                                        <p>{horario.horaInicio}</p>
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
                        <button
                            onClick={handleReservarClick}
                            className="bg-blue-700 text-white rounded-full w-md p-3"
                        >
                            Métodos de Pago
                        </button>
                    </div>
                )}
            </div>
        </LayoutClient>
    );
}

export default Reservar;
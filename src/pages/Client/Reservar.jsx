import React from "react";
import { Link, useLocation } from "react-router";
import LayoutClient from "../../layout/LayoutClient";
import CanchaImg from "../../assets/canchaPadel.jpg";

function Reservar() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const canchaId = searchParams.get("cancha");
    const horaSeleccionada = searchParams.get("hora");

    return (
        <LayoutClient>
            <div>
                <img src={CanchaImg} alt="" className="w-screen h-40 object-cover" />

                <div id="infoCont" className="p-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl">Reservar:</h1>
                        <h2 className="text-3xl">Cancha {canchaId}</h2>
                    </div>

                    <div className="flex justify-between items-center my-4">
                        <h1 className="text-2xl">Elige cuando deseas jugar:</h1>
                        <input type="date" name="" id="" />
                    </div>

                    <div id="contHoras" className="flex flex-col my-1">
                        <h2 className="text-xl">Horas disponibles</h2>

                        <ul className="flex justify-center">
                            <li>
                                <Link to={`/reservar?cancha=${canchaId}&hora=10:00am`}>
                                    <div
                                        id="horario"
                                        className={`flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded ${
                                            horaSeleccionada === "10:00am"
                                                ? "bg-[#113872] text-white"
                                                : "hover:bg-[#113872] hover:text-white"
                                        } duration-300 ease-in`}
                                    >
                                        <p>10:00am</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to={`/reservar?cancha=${canchaId}&hora=11:00am`}>
                                    <div
                                        id="horario"
                                        className={`flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded ${
                                            horaSeleccionada === "11:00am"
                                                ? "bg-[#113872] text-white"
                                                : "hover:bg-[#113872] hover:text-white"
                                        } duration-300 ease-in`}
                                    >
                                        <p>11:00am</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div id="precioCont" className="flex flex-col">
                        <h3 className="text-xl">Monto a pagar</h3>
                        <div className="bg-[#113872] text-white text-center rounded p-4 my-4">
                            <p className="text-2xl font-bold">10$</p>
                        </div>
                    </div>

                                        {/* Botón fijo en la parte inferior */}
                    <div className="flex justify-center p-4 bg-white ">
                        <Link to="/metodospago">
                            <button className="bg-blue-700 text-white rounded-full w-sm p-3">
                                Reservar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutClient>
    );
}

export default Reservar;
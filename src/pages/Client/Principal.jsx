import React, { useState } from "react";
import { Link } from "react-router";
import LayoutClient from "../../layout/LayoutClient";
import CanchaImg from "../../assets/canchaPadel.jpg"

function Principal() {
    // Definimos el estado cont usando useState
    const [cont, setCont] = useState(0);

    // Función para incrementar el contador
    const handleReservacion = () => {
        setCont(cont + 1);
    };

    return (
        <LayoutClient>
            <div className="p-4">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-3xl">Mis Reservaciones</h1>
                </div>

                <Link to="/canchasdispo">
                    <button 
                        type="button" 
                        id="CardCrearReservacion" 
                        className="py-6 p-4 border border-black rounded-lg cursor-pointer"
                        onClick={handleReservacion} 
                    >
                        <p className="text-3xl">+</p>
                        <p className="text-xl">Reserva tu cancha</p>
                    </button>                
                </Link>

                <div className="flex flex-col">
                    <h1 className="text-3xl my-4">Canchas Disponibles</h1>

                    <div id="canchasCont" className="flex flex-wrap">

                        <Link to="/reservar">
                            <div id="cardCancha" className="my-2 shadow-2xl w-sm rounded-md mr-4">
                                <img src={CanchaImg} alt="canchaPadel" className="w-full h-30 object-cover"/>

                                <div className="p-4">
                                    <div className="flex align-items-center text-center justify-between">
                                        <h3 className="text-2xl font-bold">Cancha 1</h3>
                                        <div>
                                            <p className="text-sm">1 h desde</p>
                                            <p className="text-lg font-bold">US 10$</p>
                                        </div>
                                    </div>

                                    <div className="flex my-1">
                                        <Link to="/reservar">
                                            <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded hover:bg-[#113872] hover:text-white duration-300 ease-in" >
                                                <p>10:00am</p>
                                            </div>
                                        </Link>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                    </div>
                                </div>
                            </div>                        
                        </Link>

                        <Link to="/">
                            <div id="cardCancha" className="my-2 shadow-2xl w-sm rounded-md mr-4">
                                <img src={CanchaImg} alt="canchaPadel" className="w-full h-30 object-cover"/>

                                <div className="p-4">
                                    <div className="flex align-items-center text-center justify-between">
                                        <h3 className="text-2xl font-bold">Cancha 1</h3>
                                        <div>
                                            <p className="text-sm">1 h desde</p>
                                            <p className="text-lg font-bold">US 10$</p>
                                        </div>
                                    </div>

                                    <div className="flex my-1">
                                        <Link to="/canchas">
                                            <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded" >
                                                <p>10:00am</p>
                                            </div>
                                        </Link>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                    </div>
                                </div>
                            </div>                        
                        </Link>

                        <Link to="/">
                            <div id="cardCancha" className="my-2 shadow-2xl w-sm rounded-md mr-4">
                                <img src={CanchaImg} alt="canchaPadel" className="w-full h-30 object-cover"/>

                                <div className="p-4">
                                    <div className="flex align-items-center text-center justify-between">
                                        <h3 className="text-2xl font-bold">Cancha 1</h3>
                                        <div>
                                            <p className="text-sm">1 h desde</p>
                                            <p className="text-lg font-bold">US 10$</p>
                                        </div>
                                    </div>

                                    <div className="flex my-1">
                                        <Link to="/canchas">
                                            <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded" >
                                                <p>10:00am</p>
                                            </div>
                                        </Link>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                    </div>
                                </div>
                            </div>                        
                        </Link>

                        <Link to="/">
                            <div id="cardCancha" className="my-2 shadow-2xl w-sm rounded-md mr-4">
                                <img src={CanchaImg} alt="canchaPadel" className="w-full h-30 object-cover"/>

                                <div className="p-4">
                                    <div className="flex align-items-center text-center justify-between">
                                        <h3 className="text-2xl font-bold">Cancha 1</h3>
                                        <div>
                                            <p className="text-sm">1 h desde</p>
                                            <p className="text-lg font-bold">US 10$</p>
                                        </div>
                                    </div>

                                    <div className="flex my-1">
                                        <Link to="/canchas">
                                            <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded" >
                                                <p>10:00am</p>
                                            </div>
                                        </Link>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                        <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                            <p>10:00am</p>
                                        </div>

                                    </div>
                                </div>
                            </div>                        
                        </Link>


                    </div>
                </div>
            </div>
        </LayoutClient>
    );
}

export default Principal;
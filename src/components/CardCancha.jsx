import React from "react";
import { useNavigate } from "react-router"; 
import CanchaImg from "../assets/canchaPadel.jpg";
import Horario from "./Horario.jsx";

function CardCancha({ id, nombre, precio, horarios, fecha }) {
    const navigate = useNavigate(); // Inicializa useNavigate

    // Función para manejar el clic en la tarjeta
    const handleCardClick = () => {
        navigate(`/reservar?cancha=${id}&fecha=${fecha}`); // Navega a la URL deseada
    };

    return (
        <div
            id="cardCancha"
            className="my-2 shadow-xl w-full md:w-sm md:mx-4 md:mr-4 rounded-md cursor-pointer transform transition-transform duration-300 md:hover:scale-105" // Efecto de hover solo en md
            onClick={handleCardClick} // Asigna la función al evento onClick
        >
            <img src={CanchaImg} alt="canchaPadel" className="w-full h-30 object-cover rounded-t-md" />
            <div className="p-4">
                <div className="flex align-items-center text-center justify-between">
                    <h3 className="text-2xl font-bold">{nombre}</h3>
                    <div>
                        <p className="text-sm">1 h desde</p>
                        <p className="text-lg font-bold">US {precio}$</p>
                    </div>
                </div>

                <div className="flex my-1 overflow-x-auto scroll-m-0 horarios-container h-15">
                    {horarios.map((horario, index) => (
                        <Horario
                            key={index}
                            canchaId={id}
                            horario={horario}
                            fecha={fecha}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardCancha;
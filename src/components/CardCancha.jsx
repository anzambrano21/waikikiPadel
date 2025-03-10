import React from "react";
import { Link } from "react-router"; // Cambia a 'react-router-dom'
import Horario from "./Horario.jsx"; // Si ya no usas horarios, puedes eliminar este import

function CardCancha({ id, name, image, price_per_hour }) {
    console.log("Props en CardCancha:", { id, name, image, price_per_hour }); // Verifica las props
    return (
        <div
            id="cardCancha"
            className="my-2 shadow-xl w-full md:w-sm md:mx-4 md:mr-4 rounded-md cursor-pointer transform transition-transform duration-300 md:hover:scale-105"
        >
            <Link to={`/reservar?cancha=${id}`}>
                <img src={image} alt={name} className="w-full h-30 object-cover rounded-t-md" />
                <div className="p-4">
                    <div className="flex align-items-center text-center justify-between">
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <div>
                            <p className="text-sm">1 h desde</p>
                            <p className="text-lg font-bold">US ${price_per_hour}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardCancha;
import React from "react";
import { Link } from "react-router";
import CanchaImg from "../assets/canchaPadel.jpg";
import Horario from "./Horario"; // Importar el componente Horario

function CardCancha({ id, nombre, precio, horarios }) {
    return (
        <Link to={`/reservar?cancha=${id}`}>
            <div id="cardCancha" className="my-2 shadow w-md rounded-md mr-10">
                <img src={CanchaImg} alt="canchaPadel" className="w-full h-30 object-cover" />
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
                            <Horario key={index} canchaId={id} horario={horario} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardCancha;
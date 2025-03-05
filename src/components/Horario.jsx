import React from "react";
import { Link } from "react-router";

function Horario({ canchaId, horario, fecha }) {
    return (
        <Link to={`/reservar?cancha=${canchaId}&hora=${horario}&fecha=${fecha}`}>
            <div
                id="horario"
                className="flex justify-center items-center border w-20 mr-2 p-2 shadow rounded hover:bg-[#113872] hover:text-white duration-300 ease-in"
            >
                <p>{horario}</p>
            </div>
        </Link>
    );
}

export default Horario;
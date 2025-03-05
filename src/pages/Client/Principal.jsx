import React, { useState } from "react";
import { Link } from "react-router";
import LayoutClient from "../../layout/LayoutClient";
import CardCancha from "../../components/CardCancha"; // Importar el componente CardCancha

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
            id: 2,
            nombre: "Cancha 2",
            precio: 12,
            horarios: ["10:00am", "11:00am", "12:00pm", "1:00pm"],
        },
    ];

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
                        className=" py-6 p-4 border border-black rounded-lg cursor-pointer"
                    >
                        <p className="text-3xl">+</p>
                        <p className="text-xl">Reserva tu cancha</p>
                    </button>
                </Link>

                <div className="flex flex-col">
                    <h1 className="text-3xl my-4">Canchas Disponibles</h1>

                    <div id="canchasCont" className="flex flex-wrap">
                        {canchas.map((cancha) => (
                            <CardCancha
                                key={cancha.id}
                                id={cancha.id}
                                nombre={cancha.nombre}
                                precio={cancha.precio}
                                horarios={cancha.horarios}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </LayoutClient>
    );
}

export default Principal;
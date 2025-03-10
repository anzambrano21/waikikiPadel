import React from "react";

function CardCanchaReservada() {
    return (
        <div id="cardCancha" className="p-4 mr-2 w-70 md:w-90 border border-gray-500 shadow rounded-md cursor-pointer mb-4"> {/* Agregamos mb-4 */}
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Cancha 1</h3>
                <p className="text-sm bg-green-800 text-white rounded p-2">Jugando</p>
            </div>
            <div className="flex justify-center items-center my-4 font-bold">
                <p className="mr-1">Desde:</p>
                <p className="mr-1 font-semibold text-white p-1 rounded-xl text-center w-25 bg-blue-950">10:00am</p>
                <p className="mr-1">Hasta:</p>
                <p className="m-1 font-semibold text-white p-1 rounded-xl text-center w-25 bg-blue-950">11:00am</p>
            </div>
        </div>
    );
}

export default CardCanchaReservada;
import { Link } from "react-router";
import LayoutClient from "../../layout/LayoutClient";
import CanchaImg from "../../assets/canchaPadel.jpg";

function MetodosPago() {

    return (
        <LayoutClient>
            <div className="flex justify-center min-h-screen p-2"> {/* Centrado horizontal y vertical */}
                <div className="flex flex-col items-center w-full max-w-md"> {/* Contenedor principal centrado */}
                    {/* Contenedor de la reserva */}
                    <div className="border rounded-xl w-full  shadow-lg">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Reservar</h1>
                        </div>

                        <div className="flex justify-between items-center my-4">
                            <h2 className="text-xl font-semibold">Cancha 1</h2>
                            <p className="text-gray-600">08/17/2025</p>
                        </div>

                        <div className="flex justify-center items-center my-4">
                            <p className="m-2">Desde:</p>
                            <p className="m-2 font-semibold">10:00am</p>
                            <p className="m-2">Hasta:</p>
                            <p className="m-2 font-semibold">11:00am</p>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold mb-2">Métodos de Pago</h3>
                            <ul>
                                <li className="flex justify-between w-full items-center p-2 border hover:bg-gray-100">
                                    <div>
                                        <h4 className="text-lg">Pago Móvil</h4>
                                    </div>
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                </li>
                                <li className="flex justify-between w-full items-center p-2 border hover:bg-gray-100">
                                    <div>
                                        <h4 className="text-lg">Zelle</h4>
                                    </div>
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                </li>
                                <li className="flex justify-between w-full items-center p-2 border hover:bg-gray-100">
                                    <div>
                                        <h4 className="text-lg">Efectivo</h4>
                                    </div>
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contenedor del precio */}
                    <div id="precioCont" className="w-full max-w-md mt-6">
                        <h3 className="text-xl font-bold">Monto a pagar</h3>
                        <div className="bg-[#113872] text-white text-center rounded p-2 my-2 shadow-md">
                            <p className="text-2xl font-bold">10$</p>
                        </div>
                    </div>
                </div>
            </div>

        </LayoutClient>
    );
}

export default MetodosPago;
import { Link } from "react-router";
import { useState } from "react";
import LayoutClient from "../../layout/LayoutClient";

function MetodoPago({ nombre, seleccionado, onChange, informacion }) {
    return (
        <li className="flex flex-col w-full p-2 border-t hover:bg-gray-100">
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-lg">{nombre}</h4>
                </div>
                <button
                    onClick={onChange}
                    className={`h-6 w-6 rounded-full border-2 border-gray-400 flex items-center justify-center transition-colors duration-200 ${
                        seleccionado ? 'bg-white' : 'bg-white'
                    }`}
                >
                    {seleccionado && (
                        <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    )}
                </button>
            </div>

            {/* Cuadro de información (solo visible si está seleccionado) */}
            {seleccionado && (
                <div className="border border-gray-300 rounded-lg mt-2 p-4 bg-gray-50 shadow-sm">
                    <h4 className="text-lg font-semibold mb-2">Instrucciones para {nombre}</h4>
                    <p className="text-gray-700">{informacion.instrucciones}</p>
                    <p className="text-gray-700 mt-2">{informacion.contacto}</p>
                </div>
            )}
        </li>
    );
}

function MetodosPago() {
    const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);

    // Información específica para cada método de pago
    const informacionMetodos = {
        "Pago Móvil": {
            instrucciones: "Realiza el pago a través de Pago Móvil usando el siguiente número: 0412-1234567.",
            contacto: "Banco: Banco de Venezuela",
        },
        "Zelle": {
            instrucciones: "Envía el pago a través de Zelle al correo: pagos@canchas.com.",
            contacto: "Correo: pagos@canchas.com",
        },
        "Efectivo": {
            instrucciones: "Paga en efectivo al llegar a la cancha.",
            contacto: "Contacto: 0412-7654321",
        },
    };

    const handleSeleccion = (metodo) => {
        if (metodoSeleccionado === metodo) {
            setMetodoSeleccionado(null);
        } else {
            setMetodoSeleccionado(metodo);
        }
    };

    return (
        <LayoutClient>
            <div className="flex justify-center min-h-screen p-2">
                <div className="flex flex-col items-center w-full max-w-md">
                    <div className="border rounded-xl w-full shadow-lg">
                        <div className="p-2">
                            <h1 className="text-2xl font-bold">Reservar</h1>
                        </div>

                        <div className="flex justify-between items-center my-4 p-2">
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
                            <h3 className="text-xl font-bold mb-2 p-2">Métodos de Pago</h3>
                            {/* Contenedor con scroll */}
                            <ul className="overflow-y-auto max-h-96">
                                <MetodoPago
                                    nombre="Pago Móvil"
                                    seleccionado={metodoSeleccionado === "Pago Móvil"}
                                    onChange={() => handleSeleccion("Pago Móvil")}
                                    informacion={informacionMetodos["Pago Móvil"]}
                                />
                                <MetodoPago
                                    nombre="Zelle"
                                    seleccionado={metodoSeleccionado === "Zelle"}
                                    onChange={() => handleSeleccion("Zelle")}
                                    informacion={informacionMetodos["Zelle"]}
                                />
                                <MetodoPago
                                    nombre="Efectivo"
                                    seleccionado={metodoSeleccionado === "Efectivo"}
                                    onChange={() => handleSeleccion("Efectivo")}
                                    informacion={informacionMetodos["Efectivo"]}
                                />
                            </ul>
                        </div>
                    </div>

                    <div id="precioCont" className="w-full max-w-md mt-6">
                        <h3 className="text-xl font-bold">Monto a pagar</h3>
                        <div className="bg-[#113872] text-white text-center rounded p-2 my-2 shadow-md">
                            <p className="text-2xl font-bold">10$</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón fijo en la parte inferior */}
            <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 bg-white shadow-lg">
                <Link to="/">
                    <button className="bg-blue-700 text-white rounded-full w-48 p-3">
                        Reservar
                    </button>
                </Link>
            </div>
        </LayoutClient>
    );
}

export default MetodosPago;
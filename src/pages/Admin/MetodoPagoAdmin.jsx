import { useNavigate } from "react-router"; // Asegúrate de importar desde 'react-router-dom'
import { useState } from "react";
import LayoutAdmin from "../../layout/LayoutAdmin.jsx";
import { MetodoPago } from "../../components/MetodoPago.jsx";

function MetodoPagoAdmin() {
    const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
    const [imagenPagoMovil, setImagenPagoMovil] = useState(null);
    const [imagenZelle, setImagenZelle] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

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
            if (metodo === "Pago Móvil") setImagenPagoMovil(null);
            if (metodo === "Zelle") setImagenZelle(null);
        } else {
            setMetodoSeleccionado(metodo);
        }
    };

    const handleFileChange = (event, setImagen, otroSetImagen) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagen(reader.result);
                otroSetImagen(null);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReservar = () => {
        if (!metodoSeleccionado) {
            setError("Debes seleccionar un método de pago para reservar.");
            return;
        }

        if (
            (metodoSeleccionado === "Pago Móvil" && !imagenPagoMovil) ||
            (metodoSeleccionado === "Zelle" && !imagenZelle)
        ) {
            setError("Debes subir un comprobante de pago para reservar.");
            return;
        }

        setError("");
        console.log("Reserva exitosa");
        navigate("/pagos");
    };


    return (
        <LayoutAdmin>
<div className="flex justify-center min-h-screen p-2">
                <div className="flex flex-col items-center w-full max-w-md">
                    <div className="border border-gray-500 rounded-xl w-full shadow-lg">
                        <div className="p-2">
                            <h1 className="text-2xl font-bold text-blue-950">Reservar</h1>
                        </div>

                        <div className="flex justify-between items-center my-4 p-2">
                            <h2 className="text-xl font-bold text-green-600">Cancha 1</h2>
                            <p className="text-blue-950 font-bold">08/17/2025</p>
                        </div>

                        <div className="flex justify-center items-center my-4 font-bold">
                            <p className="m-2">Desde:</p>
                            <p className="m-2 font-semibold text-white p-2 rounded-xl text-center w-25 bg-blue-950">10:00am</p>
                            <p className="m-2">Hasta:</p>
                            <p className="m-2 font-semibold text-white p-2 rounded-xl text-center w-25 bg-blue-950">11:00am</p>
                        </div>

                        <div className="flex flex-col font-bold text-blue-950">
                            <h3 className="text-xl font-bold mb-2 p-2">Métodos de Pago</h3>
                            <ul className="overflow-y-auto max-h-96">
                                <MetodoPago
                                    nombre="Pago Móvil"
                                    seleccionado={metodoSeleccionado === "Pago Móvil"}
                                    onChange={() => handleSeleccion("Pago Móvil")}
                                    informacion={informacionMetodos["Pago Móvil"]}
                                    onFileChange={(e) => handleFileChange(e, setImagenPagoMovil, setImagenZelle)}
                                    imagen={imagenPagoMovil}
                                    setImagen={setImagenPagoMovil}
                                    deshabilitado={!!imagenZelle}
                                />
                                <MetodoPago
                                    nombre="Zelle"
                                    seleccionado={metodoSeleccionado === "Zelle"}
                                    onChange={() => handleSeleccion("Zelle")}
                                    informacion={informacionMetodos["Zelle"]}
                                    onFileChange={(e) => handleFileChange(e, setImagenZelle, setImagenPagoMovil)}
                                    imagen={imagenZelle}
                                    setImagen={setImagenZelle}
                                    deshabilitado={!!imagenPagoMovil}
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

                    {error && (
                        <div className="text-red-500 text-center my-2">
                            {error}
                        </div>
                    )}
                </div>
            </div>

            {/* Botón de Reservar */}
            <div className="sticky bottom-0 left-0  bg-white p-4 shadow-lg  flex justify-center">
                <button
                    onClick={handleReservar}
                    className="bg-blue-700 text-white rounded-full w-md p-3"
                >
                    Reservar
                </button>
            </div>
        </LayoutAdmin>
    );
}

export default MetodoPagoAdmin;
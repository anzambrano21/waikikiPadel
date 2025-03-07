import { useRef } from "react";

export function MetodoPago({ nombre, seleccionado, onChange, informacion, onFileChange, imagen, setImagen, deshabilitado }) {
    const fileInputRef = useRef(null);

    const handleFileInputClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <li className="flex flex-col w-full p-2 border-t border-gray-500">
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

            {seleccionado && (
                <div className="border border-gray-300 rounded-lg mt-2 p-4 bg-gray-50 shadow-sm">
                    <h4 className="text-lg font-semibold mb-2">Instrucciones para {nombre}</h4>
                    <p className="text-gray-700">{informacion.instrucciones}</p>
                    <p className="text-gray-700 mt-2">{informacion.contacto}</p>

                    {(nombre === "Pago Móvil" || nombre === "Zelle") && (
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Subir comprobante de pago (imagen)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onFileChange}
                                disabled={deshabilitado}
                                ref={fileInputRef}
                                className="hidden"
                            />
                            {!imagen && (
                                <button
                                    onClick={handleFileInputClick}
                                    className="mt-1 block w-full text-sm text-gray-700 bg-blue-50 hover:bg-blue-100 rounded-full py-2"
                                >
                                    Seleccionar archivo
                                </button>
                            )}
                            <p className="text-sm text-gray-500 mt-1">Por favor, selecciona una imagen de tu comprobante de pago.</p>

                            {imagen && (
                                <div className="relative mt-4">
                                    <p className="text-sm text-gray-700">Comprobante subido:</p>
                                    <div className="relative">
                                        <img
                                            src={imagen}
                                            alt="Comprobante de pago"
                                            className="mt-2 w-full h-32 object-cover rounded-lg cursor-pointer"
                                            onClick={handleFileInputClick}
                                        />
                                        <div
                                            className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity rounded-lg cursor-pointer"
                                            onClick={handleFileInputClick}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setImagen(null)}
                                        className="mt-2 text-red-500 underline"
                                    >
                                        Quitar imagen
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </li>
    );
}
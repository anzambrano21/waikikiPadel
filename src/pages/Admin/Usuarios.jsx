import LayoutAdmin from "../../layout/LayoutAdmin";
import { LockClosedIcon, TrashIcon } from "@heroicons/react/24/solid"; // Importar íconos de Heroicons

function Usuarios() {
    return (
        <LayoutAdmin>
            <div className="p-4">
                <div>
                    <h1 className="text-5xl">Usuarios</h1>
                </div>

                <div className="my-4">
                    <input
                        className="border border-gray-400 shadow-xl rounded-full p-2 px-3 focus:border-blue-900/75 focus:ring-1 focus:ring-blue-900/75 focus:outline-none"
                        type="text"
                        placeholder="Juan Perez"
                    />
                </div>

                <div>
                    <table className="w-full max-w-6xl text-left">
                        <thead>
                            <tr>
                                <th className="pr-5 py-2">Nombre</th>
                                <th className="pr-5 py-2">Email</th>
                                <th className="pr-5 py-2">Teléfono</th>
                                <th className="pr-5 py-2">Acciones</th> {/* Cambiar "Botones" por "Acciones" */}
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="bg-gray-100">
                                <td className="pl-1 pr-5 py-2">Alfreds Futterkiste</td>
                                <td className="pr-5 py-2">alfredsfutterkiste@gmail.com</td>
                                <td className="pr-5 py-2">04124834894</td>
                                <td className="pr-5 py-2">
                                    <div className="flex space-x-2">
                                        {/* Botón de Bloquear */}
                                        <button
                                            className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                                            title="Bloquear usuario"
                                        >
                                            <LockClosedIcon className="h-5 w-5" />
                                        </button>

                                        {/* Botón de Eliminar */}
                                        <button
                                            className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200"
                                            title="Eliminar usuario"
                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="pl-1 pr-5 py-2">Alfreds Futterkiste</td>
                                <td className="pr-5 py-2">alfredsfutterkiste@gmail.com</td>
                                <td className="pr-5 py-2">04124834894</td>
                                <td className="pr-5 py-2">
                                    <div className="flex space-x-2">
                                        {/* Botón de Bloquear */}
                                        <button
                                            className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 cursor-pointer"
                                            title="Bloquear usuario"
                                        >
                                            <LockClosedIcon className="h-5 w-5" />
                                        </button>

                                        {/* Botón de Eliminar */}
                                        <button
                                            className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200 cursor-pointer"
                                            title="Eliminar usuario"
                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default Usuarios;
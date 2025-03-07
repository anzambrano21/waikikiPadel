import LayoutAdmin from "../../layout/LayoutAdmin";

function Pagos() {
    return (
        <LayoutAdmin>
            <div className="p-4">
                <div>
                    <h1 className="text-5xl">Pagos</h1>
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
                            <th className="pr-5 py-2">Cancha</th>
                            <th className="pr-5 py-2">Hora Inicio</th>
                            <th className="pr-5 py-2">Hora Salida</th>
                            <th className="pr-5 py-2">Día</th>
                            <th className="pr-5 py-2">Monto</th>
                            <th className="pr-5 py-2">Método de Pago</th>
                            <th className="pr-5 py-2">Comprobante</th>
                            <th className="pr-5 py-2">Estado del Pago</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td className="pr-5 py-2">Alfreds Futterkiste</td>
                            <td className="pr-5 py-2">Cancha 1</td>
                            <td className="pr-5 py-2">10:00am</td>
                            <td className="pr-5 py-2">11:00am</td>
                            <td className="pr-5 py-2">03/07/2025</td>
                            <td className="pr-5 py-2">10$</td>
                            <td className="pr-5 py-2">Efectivo</td>
                            <td className="pr-5 py-2">Archivo</td>
                            <td className="pr-5 py-2">Pendiente</td>
                        </tr>
                        <tr>
                            <td className="pr-5 py-2">Alfreds Futterkiste</td>
                            <td className="pr-5 py-2">Cancha 1</td>
                            <td className="pr-5 py-2">10:00am</td>
                            <td className="pr-5 py-2">11:00am</td>
                            <td className="pr-5 py-2">03/07/2025</td>
                            <td className="pr-5 py-2">10$</td>
                            <td className="pr-5 py-2">Efectivo</td>
                            <td className="pr-5 py-2">Archivo</td>
                            <td className="pr-5 py-2">Pendiente</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default Pagos;
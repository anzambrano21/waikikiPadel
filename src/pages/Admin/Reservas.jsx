import Layout from "../../layout/LayoutAdmin";

function Reservas() {
    return (
        <Layout>
            <div className="p-4">
                <div>
                    <h1 className="text-5xl">Reservas</h1>
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
                                <th className="pr-5 py-2">Estado</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr className="bg-gray-100">
                                <td className="pl-1 pr-5 py-2">Alfreds Futterkiste</td>
                                <td className="pr-5 py-2">Cancha 1</td>
                                <td className="pr-5 py-2">10:00am</td>
                                <td className="pr-5 py-2">11:00am</td>
                                <td className="pr-5 py-2">03/07/2025</td>
                                <td className="pr-5 py-2">Jugando</td>
                            </tr>
                            <tr>
                                <td className="pr-5 py-2">Alfreds Futterkiste</td>
                                <td className="pr-5 py-2">Cancha 1</td>
                                <td className="pr-5 py-2">10:00am</td>
                                <td className="pr-5 py-2">11:00am</td>
                                <td className="pr-5 py-2">03/07/2025</td>
                                <td className="pr-5 py-2">Reservada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default Reservas;
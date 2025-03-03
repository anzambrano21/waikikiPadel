import LayoutAdmin from "../../layout/LayoutAdmin";

function Usuarios() {
    return (
        <LayoutAdmin>
            <div className="p-2">
                <div>
                    <h1 className="text-5xl">Usuarios</h1>
                </div>

                <div className="my-4">
                    <input
                        className="border rounded-full p-2 px-3"
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
                                <th className="pr-5 py-2">Telefono</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr className="bg-gray-100">
                                <td className="pl-1 pr-5 py-2">Alfreds Futterkiste</td>
                                <td className="pr-5 py-2">alfredsfutterkiste@gmail.com</td>
                                <td className="pr-5 py-2">04124834894</td>
                                <td className="pr-5 py-2">Botonoes</td>
                            </tr>
                            <tr>
                                <td className="pl-1 pr-5 py-2">Alfreds Futterkiste</td>
                                <td className="pr-5 py-2">alfredsfutterkiste@gmail.com</td>
                                <td className="pr-5 py-2">04124834894</td>
                                <td className="pr-5 py-2">Botonoes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default Usuarios;
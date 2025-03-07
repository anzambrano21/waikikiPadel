import LayoutAdmin from "../../layout/LayoutAdmin";
import { Link } from "react-router"; // Cambia a 'react-router-dom'

function Canchas() {
    const fechaActual = new Date().toISOString().split("T")[0]; // Fecha actual en YYYY-MM-DD

    return (
        <LayoutAdmin>
            <div className="p-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-5xl">Canchas</h1>
                    <Link to={`/reservarAdmin?cancha=1&fecha=${fechaActual}`}>
                        <button className="bg-[#113872] text-white px-4 py-2 rounded hover:bg-blue-900 cursor-pointer">
                            Crear Reservación
                        </button>
                    </Link>
                </div>

                <div id="canchasCont">
                    <div className="border border-gray-400 shadow-2xl rounded-lg p-4 my-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-4xl">Cancha 1</h2>

                            <div className="flex items-center">
                                <p>Dia:</p>
                                <input
                                    type="date"
                                    value={fechaActual} // Establece la fecha actual como valor predeterminado
                                    className="ml-2 p-1 border rounded"
                                />
                            </div>
                        </div>

                        <div id="horariosCont">
                            <h3 className="py-4 text-2xl">Horas:</h3>

                            <div id="horasCont" className="flex flex-wrap">
                                {["10:00am", "11:00am", "12:00pm", "1:00pm"].map((hora, index) => (
                                    <Link
                                        key={index}
                                        to={`/reservarAdmin?cancha=1&fecha=${fechaActual}&hora=${hora}`}
                                    >
                                        <div
                                            id="horario"
                                            className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded cursor-pointer hover:bg-blue-900 hover:text-white duration-300 ease-in"
                                        >
                                            <p>{hora}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default Canchas;
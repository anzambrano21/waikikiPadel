import { Link } from "react-router";
import LayoutClient from "../../layout/LayoutClient";
import CanchaImg from "../../assets/canchaPadel.jpg";

function Reservar() {

    return (
        <LayoutClient>
            <div>
                <img src={CanchaImg} alt="" className="w-screen h-40 object-cover" />

                <div id="infoCont" className="p-4">

                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl">Reservar:</h1>
                        <h2 className="text-3xl">Cancha 1</h2> {/* Aquí debe ir la variable cancha que se escogió */}
                    </div>

                    <div className="flex justify-between items-center my-4">
                        <h1 className="text-2xl">Elige cuando deseas jugar:</h1>
                        <input type="date" name="" id="" />
                    </div>

                    <div id="contHoras" className="flex flex-col my-1">
                        <h2 className="text-xl">Horas disponibles</h2>

                        <ul className="flex justify-center">
                            <li>
                                <Link to="/canchas">
                                    <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded hover:bg-[#113872] hover:text-white duration-300 ease-in">
                                        <p>10:00am</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link to="/canchas">
                                    <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 shadow-2xl rounded hover:bg-[#113872] hover:text-white duration-300 ease-in">
                                        <p>10:00am</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>

                    </div>

                    <div id="precioCont" className="flex flex-col">
                        <h3 className="text-xl">Monto a pagar</h3>

                        <div className="bg-[#113872] text-white b text-center rounded p-2 my-4">
                            <p>10$</p>
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <Link>
                            <button className="bg-blue-700 text-white rounded-full w-md p-4">
                                Metodos de Pago
                            </button>
                        </Link>
                    </div>

                </div>

            </div> 
        </LayoutClient>
    );
}

export default Reservar;
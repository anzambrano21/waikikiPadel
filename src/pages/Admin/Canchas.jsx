import LayoutAdmin from "../../layout/LayoutAdmin";



function Canchas() {

    return (
        <LayoutAdmin>
            <div className="p-2">
            <div className="flex justify-between items-center">
                <h1 className="text-5xl">Canchas</h1>
                <button className="bg-[#113872] text-white px-4 py-2 rounded hover:bg-blue-600">
                    Crear Reservación
                </button>
            </div>

                <div id="canchasCont">

                    <div className="border rounded-lg p-4 my-5">
                        <div className="flex justify-between items-center">
                            <h2 className="text-4xl">Cancha 1</h2>

                            <div className="flex items-center">
                                <p>Dia:</p>
                                <input type="date" className="ml-2" />
                            </div>
                        </div>

                        <div id="horariosCont">

                            <h3 className="py-4 text-2xl">Horas:</h3>

                            <div id="horasCont" className="flex flex-wrap">

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded text-white bg-[#113872]" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2  rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>

                                <div id="horario" className="flex justify-center items-center border w-20 mr-2 mb-2 p-2 rounded" >
                                    <p>10:00am</p>
                                </div>




                            </div>

                        </div>
                    </div>

                


                </div>



            </div>
        </LayoutAdmin>
    );
}

export default Canchas;
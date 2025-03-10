
import LayoutClient from "../../layout/LayoutClient.jsx";
import CardCancha from "../../components/CardCancha.jsx";

function Canchas() {

    

    const canchas = [
        {
            id: 1,
            nombre: "Cancha 1",
            precio: 10,
            horarios: ["10:00am", "11:00am", "12:00pm", "1:00pm", "1:00pm"],
        },
        {
            id: 2,
            nombre: "Cancha 2",
            precio: 12,
            horarios: ["10:00am", "11:00am", "12:00pm", "1:00pm"],
        },
        {
            id: 3,
            nombre: "Cancha 3",
            precio: 12,
            horarios: ["10:00am", "11:00am", "12:00pm", "1:00pm"],
        },
    ];

    return (
        <LayoutClient>
            <div className="px-2">

                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-blue-950 my-4">Canchas Disponibles</h1>

                    <div id="canchasCont" className="flex flex-wrap">

                        {canchas.map((cancha) => {
                                const fechaActual = new Date().toLocaleDateString('en-CA'); // Fecha actual en YYYY-MM-DD
                                return (
                                    <CardCancha
                                        key={cancha.id}
                                        id={cancha.id}
                                        nombre={cancha.nombre}
                                        precio={cancha.precio}
                                        horarios={cancha.horarios}
                                        fecha={fechaActual} // Pasar la fecha en formato YYYY-MM-DD
                                    />
                                );
                            })}


                    </div>
                </div>
            </div>
        </LayoutClient>
    );
}

export default Canchas;
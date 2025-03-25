import React, { useEffect } from 'react';
import canchaPadel from "../assets/imagenPrincipal.webp";

function LayoutConFormulario({ children }) {
    // Efecto para deshabilitar el scroll al montar el componente
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Deshabilitar scroll
        return () => {
            document.body.style.overflow = 'auto'; // Restaurar scroll al desmontar
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Columna izquierda: Imagen (oculta en móviles, visible en pantallas md y superiores) */}
            <div className="hidden md:block md:w-1/2 bg-gray-200">
                <img
                    src={canchaPadel}
                    alt="Imagen de fondo"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Columna derecha: Formulario (ocupa toda la pantalla en móviles, mitad en pantallas md y superiores) */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white overflow-y-auto p-4">
                {children}
            </div>
        </div>
    );
}

export default LayoutConFormulario;
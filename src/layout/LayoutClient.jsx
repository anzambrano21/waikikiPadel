import React from 'react';
import HeaderClient from '../components/ui/HeaderClient.jsx';

export default function LayoutClient({ children }) {
    return (
        <div className="flex flex-col w-screen overflow-x-hidden"> {/* Evita el desbordamiento en el eje x */}
            {/* Header (solo visible en móvil) */}
            <div className="block">
                <HeaderClient />
            </div>

            <div className="flex flex-row h-full">
                {/* Contenido principal */}
                <main className="w-full max-w-full overflow-y-auto overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
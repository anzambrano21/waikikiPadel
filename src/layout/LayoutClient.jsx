import React from 'react';
import HeaderClient from '../components/ui/HeaderClient';

export default function LayoutClient({ children }) {
    return (
        <div className="flex flex-col w-screen overflow-x-hidden">
            {/* Header (solo visible en móvil) */}
            <div className="block">
                <HeaderClient />
            </div>

            <div className="flex flex-row h-full">
                {/* Contenido principal */}
                <main className="w-screen overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
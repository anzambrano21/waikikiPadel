import React from 'react';
import Sidebar from '../components/ui/Sidebar.jsx';
import Header from '../components/ui/Header.jsx';

export default function LayoutAdmin({ children }) {
    return (
        <div className="flex flex-col h-screen w-screen">
            {/* Header (solo visible en móvil) */}
            <div className="block md:hidden">
                <Header />
            </div>

            <div className="flex flex-row h-full">
                {/* Sidebar (oculto en móvil, visible en desktop) */}
                <aside className="hidden md:block w-full md:w-2/12 bg-gray-100 p-0">
                    <Sidebar />
                </aside>

                {/* Contenido principal */}
                <main className="w-full md:w-10/12 overflow-y-auto h-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
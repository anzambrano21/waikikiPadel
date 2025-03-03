import { useState } from 'react';
import { Link } from 'react-router'; 
import logo from '../../assets/logo1.png';
import Sidebar from './Sidebar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

    // Función para alternar el Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="bg-white flex justify-between items-center shadow-lg z-50">

                <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className="h-30" />
                </Link>


                <button
                    onClick={toggleSidebar}
                    className="px-4 text-black focus:outline-none"
                    aria-label="Abrir menú"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </header>

            <div
                className={`fixed inset-y-0 right-0 w-64 bg-[#113872] transform ${
                    isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <Sidebar />
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default Header;
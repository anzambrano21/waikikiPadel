import { Link, useLocation } from 'react-router';
import logo from '../../assets/logo.png';

const SidebarClient = () => {
    const location = useLocation(); // Obtiene la ruta actual

    // Función para verificar si la ruta está activa
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Logo */}
            <Link to="/">
                <img className="w-full" src={logo} alt="logo" />
            </Link>

            {/* Navegación */}
            <nav className="flex flex-col flex-grow">
                <ul className="flex flex-col items-center list-none text-gray flex-grow">
                    <li className="w-full">
                        <Link
                            to="/canchas"
                            className={`block w-full py-2 text-center hover:bg-[#1a4a8a] rounded transition-colors ${
                                isActive('/canchas') ? 'bg-gray-500' : ''
                            }`}
                        >
                            Perfil
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            to="/reservas"
                            className={`block w-full py-2 text-center hover:bg-[#1a4a8a] rounded transition-colors ${
                                isActive('/reservas') ? 'bg-gray-500' : ''
                            }`}
                        >
                            Reservas
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            to="/usuarios"
                            className={`block w-full py-2 text-center hover:bg-[#1a4a8a] rounded transition-colors ${
                                isActive('/usuarios') ? 'bg-gray-500' : ''
                            }`}
                        >
                            Usuarios
                        </Link>
                    </li>
                    {/* Elemento "Salir" en la parte inferior */}
                    <li className="mt-auto w-full">
                        <button
                            onClick={() => alert('Cerrando sesión...')}
                            className="block w-full py-2 text-center hover:bg-[#1a4a8a] rounded transition-colors"
                        >
                            Salir
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidebarClient;
import { Link, useLocation } from 'react-router'; // Importa useLocation
import logo from '../../assets/logo2.png';

const Sidebar = () => {
    const location = useLocation(); // Obtiene la ruta actual

    // Función para verificar si la ruta está activa
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="h-full flex flex-col bg-[#113872]">
            {/* Logo */}
            <div className='flex justify-center'>
                <Link to="/">
                    <img className="w-30" src={logo} alt="logo" />
                </Link>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col flex-grow">
                <ul className="flex flex-col items-center list-none text-white flex-grow">
                    <li className="w-full">
                        <Link
                            to="/"
                            className={`block w-full py-2 text-center hover:bg-[#1a4a8a] rounded transition-colors ${
                                isActive('/') ? 'bg-gray-500' : ''
                            }`}
                        >
                            Pagos
                        </Link>
                    </li>
                    <li className="w-full">
                        <Link
                            to="/canchas"
                            className={`block w-full py-2 text-center hover:bg-[#1a4a8a] rounded transition-colors ${
                                isActive('/canchas') ? 'bg-gray-500' : ''
                            }`}
                        >
                            Canchas
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

export default Sidebar;
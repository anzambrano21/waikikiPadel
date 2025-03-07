import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import MenuItemClient from '../MenuItemClient.jsx'; 
import { UserIcon } from '@heroicons/react/24/outline'; 


const SidebarClient = () => {

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Logo */}
            <Link to="/">
                <img className="w-full" src={logo} alt="logo" />
            </Link>

            {/* Navegación */}
            <nav className="flex flex-col flex-grow">
                <ul className="flex flex-col items-center list-none text-gray flex-grow">
                    <MenuItemClient
                        to="/pagos"
                        text="Perfil"
                        currentPath={location.pathname}
                        icon={<UserIcon className="w-5 h-5" />} // Ícono de Pagos
                    />

                    {/* Elemento "Salir" en la parte inferior */}
                    <li className="mt-auto w-full">
                        <button
                            onClick={() => alert('Cerrando sesión...')}
                            className="block w-full py-2 text-center hover:bg-gray-600/50 hover:text-white rounded transition-colors"
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
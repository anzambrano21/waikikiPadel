import {Link, useLocation } from 'react-router';
import logo from '../../assets/logo2.png';
import MenuItem from '../MenuItem.jsx'; // Importar el componente MenuItem
import { BanknotesIcon, CalendarIcon, UsersIcon, UserIcon } from '@heroicons/react/24/outline'; // Íconos de tipo Outline

const Sidebar = () => {
    const location = useLocation(); // Obtiene la ruta actual

    return (
        <div className="h-full flex flex-col bg-[#113872]">
            {/* Logo */}
            <div className='flex justify-center'>
                <Link to="/pagos">
                    <img className="w-30" src={logo} alt="logo" />
                </Link>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col flex-grow">
                <ul className="flex flex-col items-center list-none text-white flex-grow w-full py-7">
                    {/* Opciones del menú con íconos */}
                    <MenuItem
                        to="/pagos"
                        text="Pagos"
                        currentPath={location.pathname}
                        icon={<BanknotesIcon className="w-5 h-5" />} // Ícono de Pagos
                    />
                    <MenuItem
                        to="/canchas"
                        text="Canchas"
                        currentPath={location.pathname}
                        icon={<CalendarIcon className="w-5 h-5" />} // Ícono de Canchas
                    />
                    <MenuItem
                        to="/reservas"
                        text="Reservas"
                        currentPath={location.pathname}
                        icon={<UsersIcon className="w-5 h-5" />} // Ícono de Reservas
                    />
                    <MenuItem
                        to="/usuarios"
                        text="Usuarios"
                        currentPath={location.pathname}
                        icon={<UserIcon className="w-5 h-5" />} // Ícono de Usuarios
                    />

                    {/* Elemento "Salir" en la parte inferior */}
                    <li className="mt-auto w-full">
                        <button
                            onClick={() => alert('Cerrando sesión...')}
                            className="flex items-center justify-center w-full py-2 px-4 text-center hover:bg-[#1a4a8a] rounded transition-colors"
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

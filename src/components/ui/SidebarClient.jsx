import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import MenuItemClient from '../MenuItemClient.jsx'; 
import { UserIcon } from '@heroicons/react/24/outline'; 
import { useNavigate } from 'react-router';

const SidebarClient = () => {
    const navigate = useNavigate(); // Hook para redirigir

    const handleLogout = async () => {
        try {
            // Llamar al backend para cerrar sesión y eliminar la cookie
            const response = await fetch('http://localhost:3000/api/usuarios/logout', {
                method: 'POST',
                credentials: 'include', // Enviar las cookies en la solicitud
            });

            if (response.ok) {
                // Redirigir al usuario a la página de inicio de sesión
                navigate('/iniciarsesion');
            } else {
                throw new Error('Error al cerrar sesión');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                    <MenuItemClient
                        to="/pagos"
                        text="Perfil"
                        currentPath={location.pathname}
                        icon={<UserIcon className="w-5 h-5" />} // Ícono de Pagos
                    />

                    {/* Elemento "Salir" en la parte inferior */}
                    <li className="mt-auto w-full">
                        <button
                            onClick={handleLogout} // Llamada a la función de cierre de sesión
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

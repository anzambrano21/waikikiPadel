import { Link } from 'react-router'; // O desde 'react-router-dom'

function MenuItem({ to, text, currentPath, icon }) {
    // Verifica si la ruta está activa
    const isActive = currentPath === to;

    return (
        <li className="w-full ">
            <Link
                to={to}
                className={`flex items-center justify-center w-full py-4 px-4 text-center hover:bg-[#1a4a8a] rounded transition-colors ${
                    isActive ? 'bg-[#1a4a8a]' : ''
                }`}
            >
                {icon && <span className="mr-2">{icon}</span>} {/* Muestra el ícono si está presente */}
                {text}
            </Link>
        </li>
    );
}

export default MenuItem;
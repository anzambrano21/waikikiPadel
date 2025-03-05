import { Link } from "react-router";
import LayoutRegistrarse from "../../layout/LayoutRegistrarse";
import logo from '../../assets/logo1.png';

function IniciarSesion() {
    return (
        <LayoutRegistrarse>
            {/* Contenedor principal para centrar el contenido */}
            <div className="min-h-screen flex flex-col justify-center items-center p-4">
                {/* Logo */}
                <img className="w-3xs mb-20" src={logo} alt="logo" />

                {/* Contenedor del formulario */}
                <div className="flex w-80 flex-col">
                    {/* Campo de Email */}
                    <div>
                        <div className="relative mt-1 w-full">
                            <input
                                type="text"
                                id="email"
                                defaultValue="email@gmail.com"
                                className="mb-4 border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2 pt-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                            />
                            <label
                                htmlFor="email"
                                className="absolute top-1.5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                            >
                                Ingresa tu correo
                            </label>
                        </div>
                    </div>

                    {/* Campo de Contraseña */}
                    <div>
                        <div className="mb-4 relative mt-1 w-full">
                            <input
                                type="password"
                                id="password"
                                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2 pt-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                placeholder=" "
                            />
                            <label
                                htmlFor="password"
                                className="absolute top-1.5 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1.5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
                            >
                                Ingresa tu contraseña
                            </label>
                        </div>
                    </div>

                    {/* Enlace para registrarse */}
                    <Link to="/">
                        <p className="text-blue-600 underline mb-4">No tienes una cuenta todavía?</p>
                    </Link>

                    {/* Botón de Iniciar Sesión */}
                    <button className="rounded-lg bg-blue-600 py-2 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </LayoutRegistrarse>
    );
}

export default IniciarSesion;
import { Link } from "react-router";
import LayoutRegistrarse from "../../layout/LayoutRegistrarse";
import logo from '../../assets/logo1.png';
import defaultUser from '../../assets/defaultUser.jpg';
import { useState, useEffect } from "react";

function Registrarse() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    // Función para manejar la selección de la imagen
    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Obtener el archivo seleccionado
        if (file) {
            const reader = new FileReader(); // Crear un FileReader para leer el archivo
            reader.onloadend = () => {
                setProfileImage(reader.result); // Guardar la imagen en el estado
            };
            reader.readAsDataURL(file); // Leer el archivo como una URL
        }
    };

    // Llamada a la API para obtener los códigos de país y banderas
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => {
                const countryList = data.map(country => ({
                    code: country.cca2,
                    name: country.name.common,
                    flag: country.flags.png
                }));
                setCountries(countryList);
            })
            .catch(error => console.error("Error fetching countries:", error));
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <LayoutRegistrarse>
            {/* Contenedor principal para centrar el contenido */}
            <div className="min-h-screen flex flex-col justify-center items-center p-2">
                {/* Contenedor para el logo y la imagen de perfil */}
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <img className="w-30 mb-4" src={logo} alt="logo" />

                    {/* Contenedor de la imagen de perfil */}
                    <div className="mb-4 rounded-full w-24 h-24 flex justify-center items-center overflow-hidden relative group">
                        {/* Input de archivo oculto */}
                        <input
                            type="file"
                            id="profileImageInput"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {/* Imagen predeterminada o seleccionada */}
                        <label htmlFor="profileImageInput" className="cursor-pointer w-full h-full">
                            {profileImage ? (
                                // Mostrar la imagen seleccionada
                                <img
                                    src={profileImage}
                                    alt="Foto de perfil"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                // Mostrar la imagen predeterminada
                                <img
                                    src={defaultUser} // Ruta de la imagen predeterminada
                                    alt="Foto de perfil predeterminada"
                                    className="w-full h-full object-cover"
                                />
                            )}
                            {/* Efecto hover con fondo oscuro y ícono de editar */}
                            <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Contenedor del formulario */}
                <div className="flex w-80 flex-col">
                    {/* Campo para el nombre */}
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    {/* Campo para el apellido */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    {/* Campo para el número de teléfono con selector de país */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                        <div className="flex">
                            <select
                                className="mt-1 block w-1/4 p-2 border border-gray-300 rounded-md mr-2"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                            >
                                <option value="">Selecciona un país</option>
                                {countries.map(country => (
                                    <option key={country.code} value={country.code}>
                                        <img className="w-5" src={country.flag} alt="" />
                                        {country.name} (+{country.code})
                                    </option>
                                ))}
                            </select>
                            <input type="text" className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md" />
                        </div>
                    </div>

                    {/* Campo para el correo electrónico */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    {/* Campo para la contraseña */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>

                    {/* Enlace para registrarse */}
                    <Link to="/">
                        <p className="text-blue-600 underline mb-4">¿Tienes una cuenta?</p>
                    </Link>

                    {/* Botón de Registrarse */}
                    <button className="rounded-lg bg-blue-600 py-2 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer">
                        Registrarse
                    </button>
                </div>
            </div>
        </LayoutRegistrarse>
    );
}

export default Registrarse;
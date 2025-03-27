import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners"; // Importar el spinner
import LayoutClient from "../../layout/LayoutClient";


function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const id = 12;
        const response = await fetch(`http://localhost:3000/api/usuarios/perfil/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });


        if (!response.ok) {
          throw new Error("No se pudo obtener la información del usuario");
        }

        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, []);

  if (loading) {
    return (
      <LayoutClient>
        <div className="flex h-screen items-center justify-center">
          <ClipLoader color="#1E3A8A" size={50} />
        </div>
      </LayoutClient>
    );
  }

  if (error) {
    return <LayoutClient>
      <div>Error: {error}</div>
      </LayoutClient>;
  }

  return (
    <LayoutClient>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="w-36 h-36 mb-4 rounded-full overflow-hidden shadow-lg">

        </div>

        <h2 className="text-2xl font-bold text-blue-950 mb-2">{usuario.nombre || "Cargando..."}</h2>

        {/* Código de país y número */}
        <div className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">{usuario.codigoPais || "+XX"}</span>
          {` ${usuario.telefono || "000-000-0000"}`}
        </div>

        {/* Correo electrónico */}
        <div className="text-lg text-gray-700">
          <span className="font-semibold">Correo: </span>
          {usuario.email || "Cargando..."}
        </div>
      </div>
    </LayoutClient>

  );
}

export default Perfil;
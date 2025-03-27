import { Route, Routes, BrowserRouter } from 'react-router';  // Asegúrate de importar desde 'react-router-dom'
import Pagos from './pages/Admin/Pagos.jsx';
import Canchas from './pages/Admin/Canchas.jsx';
import Reservas from './pages/Admin/Reservas.jsx';
import Usuarios from './pages/Admin/Usuarios.jsx';
import ReservarAdmin from './pages/Admin/ReservarAdmin.jsx';
import Principal from './pages/Client/Principal.jsx';
import CanchasC from './pages/Client/Canchas.jsx';
import Reservar from './pages/Client/Reservar.jsx';
import MetodosPago from './pages/Client/MetodosPago.jsx';
import IniciarSesion from './pages/Client/IniciarSesion.jsx';
import Regitrarse from './pages/Client/Registrarse.jsx';
import MetodoPagoAdmin from './pages/Admin/MetodoPagoAdmin.jsx';
import Perfil from './pages/Client/Perfil.jsx';
import ProtectedRoute from './utils/ProtectedRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pagos' element={<Pagos />} />
        <Route path='/canchas' element={<Canchas />} />
        <Route path='/reservas' element={<Reservas />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/reservaradmin' element={<ReservarAdmin />} />
        <Route path='/metodospagoadmin' element={<MetodoPagoAdmin />} />
        <Route path='/principal' element={<Principal />} />
        <Route path='/canchasdispo' element={<CanchasC />} />
        <Route path='/perfil' element={<ProtectedRoute><Perfil /></ProtectedRoute>} />

        <Route path='/reservar' element={<ProtectedRoute><Reservar /></ProtectedRoute>} />

        <Route path='/metodospago' element={<MetodosPago />} />
        <Route path='/iniciarsesion' element={<IniciarSesion />} />
        <Route path='/' element={<Regitrarse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

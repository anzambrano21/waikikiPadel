import { Route, Routes, BrowserRouter } from 'react-router'
import Pagos from './pages/Admin/Pagos.jsx'
import Canchas from './pages/Admin/Canchas.jsx'; 
import Reservas from './pages/Admin/Reservas.jsx';
import Usuarios from './pages/Admin/Usuarios.jsx';
import Principal from './pages/Client/Principal.jsx';
import CanchasC from './pages/Client/Canchas.jsx';
import Reservar from './pages/Client/Reservar.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pagos/>}/>
        <Route path='/canchas' element={<Canchas/>}/>
        <Route path='/reservas' element={<Reservas/>}/>
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path='/principal' element={<Principal/>}/>
        <Route path='/canchasdispo' element={<CanchasC/>}/>
        <Route path='/reservar' element={<Reservar/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

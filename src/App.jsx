import './App.css';
import PaginaCadastro from './components/cadastro/PaginaCadastro';
import PaginaLogin from './pages/login/PaginaLogin';

import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  

  return (
    <div className='App'>
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default App;

import ServiceForm from "./components/ServiceForm"
import Service from "./components/Service"
import Start from "./components/Start"
import StartBuscar from "./components/Start-Buscar"
import StartOfrecer from "./components/Start-Ofrecer"
import Mapa from './components/mapa'
import Perfil from './components/perfil'
import Checking from './components/check'
import Options from './components/Options'
import Publicado from './components/publicado'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav_bar';

function App() {
  return (
    <>
      <div className="container-fluid">
        <Router>
        <NavBar />
              <Routes>
                  <Route path="/" element={<Start />} />
                  <Route path="/buscar" element={<StartBuscar />} />
                  <Route path="/ofrecer" element={<StartOfrecer />} />
                  <Route path="/ServiceForm" element={<ServiceForm />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/options" element={<Options />} />
                  <Route path='/mapa' element= {<Mapa/>}/>
                  <Route path='/perfil' element= {<Perfil/>}/>
                  <Route path='/check' element= {<Checking/>}/>
                  <Route path='/publicado' element= {<Publicado/>}/>
              </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

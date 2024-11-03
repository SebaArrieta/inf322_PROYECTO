import ServiceForm from "./components/ServiceForm"
import Service from "./components/Service"
import Start from "./components/Start"
import StartBuscar from "./components/Start-Buscar"
import StartOfrecer from "./components/Start-Ofrecer"
import Mapa from './components/mapa'
import Perfil from './components/perfil'
import Checking from './components/check'
import Options from './components/Options'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container-fluid">
        <Router>
              <Routes>
                  <Route path="/" element={<Start />} />
                  <Route path="/buscar" element={<StartBuscar />} />
                  <Route path="/ofrecer" element={<StartOfrecer />} />
                  <Route path="/ServiceForm" element={<ServiceForm />} />
                  <Route path="/service" element={<Service />} />
                  <Route path='/mapa' element= {<Mapa/>}/>
                  <Route path='/perfil' element= {<Perfil/>}/>
                  <Route path='/check' element= {<Checking/>}/>
                  <Route path='/options' element={<Options/>}/>
              </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

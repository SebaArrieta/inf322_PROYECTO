import ServiceForm from "./components/ServiceForm"
import Service from "./components/Service"
import Start from "./components/Start"
import StartBuscar from "./components/Start-Buscar"
import StartOfrecer from "./components/Start-Ofrecer"
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
              </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
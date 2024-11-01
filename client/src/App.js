import ServiceForm from "./components/ServiceForm"
import Service from "./components/Service"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container-fluid">
        <Router>
              <Routes>
                  <Route path="/ServiceForm" element={<ServiceForm />} />
                  <Route path="/service" element={<Service />} />
              </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Imprint from "./pages/Imprint/Imprint";

function App() {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;

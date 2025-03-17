import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Imprint from "./pages/Imprint/Imprint";
import Products from "./pages/Products/Products";
import Prayers from "./pages/Prayers/Prayers";

function App() {
  return (
    <Router>
      <div>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/prayers" element={<Prayers />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;

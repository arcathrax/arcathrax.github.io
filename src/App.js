import './App.css';
import Index from "./pages/index";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Downloads from "./pages/downloads/Downloads";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/downloads" element={<Downloads />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

import './App.css';
import Index from "./pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutme/AboutMe";
import Downloads from "./pages/downloads/Downloads";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/downloads" element={<Downloads />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

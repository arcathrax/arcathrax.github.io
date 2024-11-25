import './App.css';
import MainLayout from "./layouts/MainLayout";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Services from "./pages/Services/Services";
import Home from "./pages/Home/Home";
import Imprint from "./pages/Imprint/Imprint";
import Linktree from "./pages/Linktree/Linktree";

function App() {
    return (
        <Router>
            <div>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about-me" element={<AboutMe/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/imprint" element={<Imprint/>}/>
                        <Route path="/linktree" element={<Linktree/>}/>
                    </Routes>
                </MainLayout>
            </div>
        </Router>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainLayout from "./layouts/MainLayout";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Router>
            <div>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about-me" element={<AboutMe/>}/>
                        <Route path="/blog-posts" element={<Blogs/>}/>
                    </Routes>
                </MainLayout>
            </div>
        </Router>
    );
}

export default App;

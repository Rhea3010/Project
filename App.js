import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Canvas from "./components/Canvas";
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <div className="app flex flex-col min-h-screen">
                <NavBar />                 
                <main className="flex-grow">
                    <Routes>
                        <Route path="/Dashboard" element={<Canvas />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

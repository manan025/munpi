import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from "./pages/About";
import Experiments from "./pages/experiments";
import Munpi from "./pages/munpi";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/munpi" element={<Munpi/>} />
                    <Route exact path="/experiments" element={<Experiments/>} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
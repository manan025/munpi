import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import './Home.css';

const Home = () => {
    const style = {
        margin: "0 auto"
    }
    return (
        <>
            <Navbar home={true}/>
            <div className="main">
                <div className="heroflex">
                    <div className="textflex">
                        <img src={"/logo.png"} alt="" className="hlo"/>
                        <p>STEM is now STEAM</p>
                        <div className="buttons">
                            <a href="/download"><button className="btn-download">DOWNLOAD</button></a>
                            <Link to="/about">Learn More <span><i class="fas fa-arrow-right"></i></span></Link>
                        </div>
                    </div>
                    <div className="image">
                        <img src={"/home.png"} alt="mockup" style={style}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
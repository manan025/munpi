import React from "react";
import AboutMockup2 from '../logo.png'
import AboutMockup3 from '../logo.png'
import AboutMockup4 from '../logo.png'
import AboutMockup5 from '../logo.png'
import AboutMockup6 from '../logo.png'
import Footer from '../components/Footer'
import './About.css'
import Navbar from "../components/Navbar";


const About = () => {
    const style = {
        img: {
            height: "200px",
            width: "200px",
        }
    }
    return (
        <>
            <Navbar about={true}/>
            <div className="about">
                <div className="aboutflex">
                    <div className="aboutext">
                        <h1>What is Mu and Pi</h1>
                        <p>Mu and Pi are two space cows that help us in our project to provide versatile space education and to increase children's interest in science with mini-comics and experiments. They will help kids from 6 to 14 years old learn about the consequences of space missions and experiments with the technology used for these aims.</p>
                        {/*<p>Hlo+ or HyperLocalization Plus is a system which uses hyperlocalization, IoT and smart HVAC/Access control to allow users in public areas the ability to navigate their way to and through crowded areas, find friends and overview crowdedness/vacancy.</p>*/}
                        </div>
                    <div className="aboutimage">
                        <img src={AboutMockup6} alt="" className="width"/>
                    </div>
                </div>
                <div className="aboutflex reverse">
                    <div className="aboutext">
                        <h1>For Children</h1>
                        <p>Children, who get information about the work of NASA and partner space agencies through mini-stories with audio animations, will be able to reinforce what they have learned with instructive experiments that can quickly be done at home with just a few materials. This educational media is unique with its diverse elements and the perspective that targets children's creativity.</p>
                        {/*<p>For example, if you’re in a stadium, you’ll automatically see a curated page with Toilets, Food Courts, ATMs, Clinics, Lounges, Gates, etc. near you.</p>*/}
                    </div>
                    <div className="aboutimage">
                        <img src={AboutMockup2} alt="" />
                    </div>
                </div>
                {/*<div className="aboutflex" style={{marginTop: "20px"}}>
                    <div className="aboutext exc2" style={{marginTop: "25px"}}>
                        <h1>Alerts</h1>
                        <p>The Hlo+ app is enabled with crowdsourced reporting, thus providing you with alerts for any nearby roadblocks, overcrowdedness, COVID containment zones, etc. near the place you're travelling to, hence ensuring a safe and seamless experience for you</p>
                    </div>
                    <div className="aboutimage">
                        <img src={AboutMockup5} alt="" className="main"/>
                    </div>
                </div>
                <div className="aboutflex reverse" style={{marginTop: "0"}}>
                    <div className="aboutext exc2">
                        <h1>Hyperlocal Navigation</h1>
                        <p>With our app, you can navigate within stadiums, shopping complexes and other kinds of large campuses. All this, without the hassle of finding the fastest way to the best available spot for your requirements.</p>
                        <a href="https://hlo-map.herokuapp.com/"  rel="noreferrer" target="_blank"><button className="btn-download" style={{marginTop: "15px"}}>Try it out</button></a>
                    </div>
                    <div className="aboutimage">
                        <img src={AboutMockup4} alt="" />
                    </div>
                </div>
                <div className="aboutflex" style={{marginTop: "0"}}>
                    <div className="aboutext exc2">
                        <h1>Find your friends</h1>
                        <p>Have you ever found yourself in a position where you lose your friends or loved ones in a large stadium? Using hyperlocalisation, the Hlo+ mobile app allows you to find your friends if they’re nearby (of course, only if they’ve allowed it).</p>
                    </div>
                    <div className="aboutimage">
                        <img src={AboutMockup3} alt="" />
                    </div>
                </div>*/}
            </div>
            {/* <Team /> */}
            <Footer/>
        </>
    )
}

export default About

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
                        </div>
                    <div className="aboutimage">
                        <img src={AboutMockup6} alt="" className="width"/>
                    </div>
                </div>
                <div className="aboutflex reverse">
                    <div className="aboutext">
                        <h1>For Children</h1>
                        <p>Children, who get information about the work of NASA and partner space agencies through mini-stories with audio animations, will be able to reinforce what they have learned with instructive experiments that can quickly be done at home with just a few materials. This educational media is unique with its diverse elements and the perspective that targets children's creativity.</p>
                        </div>
                    <div className="aboutimage">
                        <img src={AboutMockup2} alt="" />
                    </div>
                </div>
            </div>
            {/* <Team /> */}
            <Footer/>
        </>
    )
}

export default About

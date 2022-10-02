import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Experiments = () => {

    const margin = {
        margin: "10% 0"
    }

    return (
        <>
            <Navbar exp={true}/>

            <div className="about">
                <div className="aboutflex">
                    <div className="aboutext">
                        <h1>Check out Centrifuge</h1>
                        <div style={margin}>
                            <a href="/Centrifuge.pdf"><button className="btn-download">Try</button></a>
                        </div>
                    </div>
                    <div className="aboutimage">
                        <img src={"/muandpi1.png"} alt="" className="width"/>
                    </div>
                </div>
                <div className="aboutflex">
                    <div className="aboutimage">
                        <img src={"/muandpi2.png"} alt="" className="width"/>
                    </div>
                    <div className="aboutext">
                        <h1>Let's make Lenses</h1>
                        <div style={margin}>
                            <a href="/Creating_Lenses.pdf"><button className="btn-download">Let's Go!</button></a>
                        </div>
                    </div>
                </div>
                <div className="aboutflex">
                    <div className="aboutext">
                        <h1>Learn about Rotation and Forces</h1>
                        <div style={margin}>
                            <a href="/Rotation_and_Forces.pdf"><button className="btn-download">Lesson Time</button></a>
                        </div>
                    </div>
                    <div className="aboutimage">
                        <img src={"/muandpi1.png"} alt="" className="width"/>
                    </div>
                </div>
                <div className="aboutflex">
                    <div className="aboutimage">
                        <img src={"/muandpi2.png"} alt="" className="width"/>
                    </div>
                    <div className="aboutext">
                        <h1>Clouds? A Cycle of Water?</h1>
                        <div style={margin}>
                            <a href="/Water_Cycle.pdf"><button className="btn-download">What's that?</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Experiments;
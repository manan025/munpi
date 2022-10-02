import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Munpi = () => {
    const margin = {
        margin: "10% 0"
    }
    return (
        <>
            <Navbar munpi={true}/>
            <div className="about">
                <div className="aboutflex">
                    <div className="aboutext">
                        <h1>Download English Version</h1>
                        <div>
                        <a href="/English.zip"><button className="btn-download">Download</button></a>
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
                        <h1>Download Spanish Version</h1>
                        <div style={margin}>
                        <a href="/Spanish.zip"><button className="btn-download">Download</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Munpi;
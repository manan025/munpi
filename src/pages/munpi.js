import React from 'react';
import Navbar from "../components/Navbar";
import AboutMockup6 from "../logo.png";

const Munpi = () => {
    return (
        <>
            <Navbar munpi={true}/>
            <div className="about">
                <div className="aboutflex">
                    <div className="aboutext">
                        <h1>Download Now</h1>
                        <h2>English Version</h2>
                        <div>
                        <a href="/English.zip"><button className="btn-download">Download</button></a>
                        </div>
                        <h2>Spanish Version</h2>
                        <a href="/Spanish.zip"><button className="btn-download">Download</button></a>
                    </div>
                    <div className="aboutimage">
                        <img src={AboutMockup6} alt="" className="width"/>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Munpi;
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
    return (
        <>
            <nav>
                <div className="head"><Link to="/"><img src={"/logo.png"} alt="logo" className="logo"/></Link></div>
                <ul className="nav-links">
                    <li className="active"><Link to="/" className={props.home === true ? "active" : "non-active"}>Home</Link></li>
                    <li><Link to="/about" className={props.about === true ? "active" : "non-active"}>About</Link></li>
                    <li><Link to={"/munpi"} className={props.munpi === true ? "active" : "non-active"}>Mu and Pi</Link></li>
                    <li><Link to={"/experiments"} className={props.exp === true ? "active" : "non-active"}>Experiments</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
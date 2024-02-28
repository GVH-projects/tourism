import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {Button} from "react-bootstrap";

const NavigationBar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }
    return (
        <nav className="navbar navbar-expand-lg myNavbar">
            <div className="container-fluid">
                <Link to="/"><img src="/assets/GVH-removebg-preview.png" alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-white " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Tourism
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-black" href="Santai.html">Relaxing Tourism</a></li>
                                <li><a className="dropdown-item text-black" href="Petualangan.html">Advanture Tourism</a>
                                </li>
                                <li><a className="dropdown-item text-black" href="Bisnis.html">Bussiness Tourism</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-disabled="page" to="/about">About Us</Link>
                        </li>
                    </ul>
                    <Button onClick={handleLogin}>Login</Button>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar;
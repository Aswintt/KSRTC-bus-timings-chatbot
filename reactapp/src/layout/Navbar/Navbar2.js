import React from "react";
import image from 'assets/img/unnamed.png';
const Navbar2 = () => {
    return (
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <a href="/" className="logo"><img src={image} alt="Image" /></a>
                <h1 className="logo"><a href="/">KERALA STATE ROAD TRANSPORT CORPORATION<span>.</span><p>Ponnani</p></a></h1>


                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li className="dropdown"><a href="#"><span>More</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Network</a></li>
                                <li className="dropdown"><a href="#"><span>Financials</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>

                                        <li><a href="#">Tenders</a></li>
                                        <li><a href="#">Tender evaluation Results</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Directory</a></li>
                                <li><a href="#">Depots</a></li>
                                <li><a href="#">Citizen Charter</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>

        </header>
    )
};

export default Navbar2
import React from "react"
// import axios from "axios";
import './App.css';
import img1 from "./image2.jpg";
import img2 from "./image1.jpg";
import { Link } from "@reach/router";

function HomePage() {
    return (
        <div className="home-container">
            <div className="cont">
                <nav className="cont-title">
                    <div className="dp">
                        <h1><Link to="/docter">Docter Page</Link></h1>
                        <img src={img1} />
                    </div>
                    <div className="pp">
                        <h2><Link to="/patient">Patient Page</Link></h2>
                        <img src={img2} />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default HomePage;
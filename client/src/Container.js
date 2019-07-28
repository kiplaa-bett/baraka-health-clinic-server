import React from "react"
import './App.css';

function Container() {
    return (
        <div className="home-container">
            <div className="cont">
                <nav className="cont-title">
                    <div className="dp">
                        <h1>Docter Page</h1>
                        <img src="images/slide2.jpg" />
                    </div>
                    <div className="pp">
                        <h2>Patient Page</h2>
                        <img src="images/slide3.jpg" />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Container;
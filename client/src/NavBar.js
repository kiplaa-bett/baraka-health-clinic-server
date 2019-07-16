import React from "react"
import './App.css';

function NavBar() {
    return (
        <div className="hlthclnc-container">
            <div className="navbar">
                <nav className="hlthclnc-title">
                    <h1><span>B</span>araka <span>H</span>ealth <span>C</span>linic</h1>
                    <h2><span>W</span>e Treat <span>J</span>esus Heals</h2>
                </nav>
                <nav className="hlthclnc-nav">
                    <ul>
                        <li>
                            <a href="/Home">Home</a>
                            <a href="/Docter">Docter</a>
                            <a href="/Patient">Patient</a>
                            <a href="/Admin">Admin</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
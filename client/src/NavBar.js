import React from "react"
import { Link } from "@reach/router";
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
                            <Link to="/">Home</Link>
                            <Link to="/docter">Docter</Link>
                            <Link to="/patient">Patient</Link>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
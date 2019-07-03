import React from "react"

function NavBar() {
    return (
        <div className="hlthclnc-container">
            <div className="navbar">
                <nav className="hlthclnc-title">
                    <h1>Baraka Health Clinic</h1>
                    <h2>"We Treat Jesus Heals"</h2>
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
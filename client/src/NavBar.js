import React from "react"

function NavBar() {
    return (
        <div className="hlthclnc-container">
            <nav className="hlthclnc-nav">
                <span className="hlthclnc-title">Baraka Health Clinic</span>
                <a href="/">Docter</a>
                <a href="/cinemas">Patient</a>
                <a href="/admin">Admin</a>
            </nav>
        </div>
    );
}

export default NavBar;
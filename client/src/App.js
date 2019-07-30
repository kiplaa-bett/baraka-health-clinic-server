import React from 'react';
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import DocterPage from "./DocterPage";
import PatientPage from "./PatientPage";
import AdminPage from "./AdminPage";
import Footer from "./Footer";
import NotFound from "./NotFound";
import './App.css';

function App() {
  return (
    <div className="hlthclnc-app">
      <header className="hlthclnc-header">
        <NavBar />
      </header>
      {/* <body className="hlthclnc-body">
        
      </body> */}

      <main className="hlthclnc-main">
        <Router>
          <HomePage path="/" />
          <DocterPage path="/docter" />
          <PatientPage path="/patient" />
          <AdminPage path="/admin" />
          <NotFound default />
        </Router>
      </main>
      <footer className="hlthclnc-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

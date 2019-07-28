import React from 'react';
import NavBar from "./NavBar";
import Container from "./Container";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="hlthclnc-app">
      <header className="hlthclnc-header">
        <NavBar />
      </header>
      <body className="hlthclnc-body">
        <Container />
        <Footer />
      </body>

      <main className="hlthclnc-main">

      </main>
    </div>
  );
}

export default App;

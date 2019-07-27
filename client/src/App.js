import React from 'react';
import NavBar from "./NavBar";
import Container from "./Container";
import './App.css';

// const HEALTH_CLINIC = [

//   {
//     "Patient_id": 1,
//     "Patient_Name": "Mark Oloo",
//     "Gender": "Male",
//     "Age": 34,
//     "Docter_id": 3
//   },
//   {
//     "Patient_id": 2,
//     "Patient_Name": "David Kirui",
//     "Gender": "Male",
//     "Age": 50,
//     "Docter_id": 1
//   },
//   {
//     "Patient_id": 3,
//     "Patient_Name": "Dan Omolo",
//     "Gender": "Male",
//     "Age": 30,
//     "Docter_id": 5
//   },
//   {
//     "Patient_id": 4,
//     "Patient_Name": "Cris Kasuku",
//     "Gender": "Male",
//     "Age": 16,
//     "Docter_id": 4
//   },
//   {
//     "Patient_id": 5,
//     "Patient_Name": "Jane wanjiru",
//     "Gender": "Female",
//     "Age": 20,
//     "Docter_id": 6
//   },
//   {
//     "Patient_id": 6,
//     "Patient_Name": "Agent Zuku",
//     "Gender": "FEmale",
//     "Age": 32,
//     "Docter_id": 9
//   },
//   {
//     "Patient_id": 7,
//     "Patient_Name": "Karina Kapuu",
//     "Gender": "Female",
//     "Age": 33,
//     "Docter_id": 2
//   },
//   {
//     "Patient_id": 8,
//     "Patient_Name": "Faith Chepkemoi",
//     "Gender": "Female",
//     "Age": 17,
//     "Docter_id": 8
//   },
//   {
//     "Patient_id": 9,
//     "Patient_Name": "Erick Musomba",
//     "Gender": "Male",
//     "Age": 23,
//     "Docter_id": 10
//   },
//   {
//     "Patient_id": 10,
//     "Patient_Name": "Suzy Shish Shiro",
//     "Gender": "Female",
//     "Age": 10,
//     "Docter_id": 7
//   }
// ]
function App() {
  return (
    <div className="hlthclnc-app">
      <header className="hlthclnc-header">
        <NavBar />
      </header>
      <body className="hlthclnc-body">
        <Container />
      </body>
      <main className="hlthclnc-main">
        
      </main>
    </div>
  );
}

export default App;

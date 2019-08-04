import React from "react";
import DocterForm from "./DocterForm";
import DocterTable from "./DocterTable";
import PatientForm from "./PatientForm";
import PatientTable from "./PatientTable";

function AdminPage() {
    return (
        <div className="home-container">
            <h1>Docter</h1>
            <DocterForm />
            <DocterTable />
            <h1>Patient</h1>
            <PatientForm />
            <PatientTable />
        </div>
    );
}

export default AdminPage;
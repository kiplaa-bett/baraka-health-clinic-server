import React from "react";
import DocterForm from "./DocterForm";
import DocterTable from "./DocterTable";
import PatientForm from "./PatientForm";
import PatientTable from "./PatientTable";

function AdminPage() {
    return (
        <div className="home-container">
            <header className="adm-cont">
                <h2>Docter Page</h2>
                <DocterForm />
                <DocterTable />
            </header>
            <main className="adm-mn">
                <h2>Patient Page</h2>
                <PatientForm />
                <PatientTable />
            </main>
        </div>
    );
}

export default AdminPage;
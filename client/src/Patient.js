import React from "react";

function Patient({ patient }) {
    const { Patient_id, Patient_Name, Gender, Age, Docter_id } = patient;
    return (
        <div>
            <p>{Patient_id}</p>
            <p>{Patient_Name}</p>
            <p>{Gender}</p>
            <p>{Age}</p>
            <p>{Docter_id}</p>
        </div>
    )

}
export default Patient;
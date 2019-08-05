import React from "react";

function Patient({ patient }) {
    const { Patient_id, Patient_Name, Gender, Age, Docter_id } = patient;
    return (
        <div className="tbl">
            <table>
                <thead>
                    <tr>
                        <th> NO </th>
                        <th> PATIENT NAME </th>
                        <th> GENDER </th>
                        <th> AGE </th>
                        <th> DOCTER </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Patient_id}</td>
                        <td>{Patient_Name}</td>
                        <td>{Gender}</td>
                        <td>{Age}</td>
                        <td>{Docter_id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Patient;
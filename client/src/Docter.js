import React from "react";

function Docter({ docter }) {
    const { Docter_id, Docter_Name, Department, Hospital_id } = docter;
    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th> NO </th>
                        <th> DOCTER NAME </th>
                        <th> DEPARTMENT </th>
                        <th> HOSPITAL </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Docter_id}</td>
                        <td>{Docter_Name}</td>
                        <td>{Department}</td>
                        <td>{Hospital_id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Docter;
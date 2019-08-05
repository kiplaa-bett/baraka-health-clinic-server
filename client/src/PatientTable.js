import React from "react";

function PatientTable() {
    return (
        <div className="pt-tbl">
            <table>
                <thead>
                    <tr>
                        <th> NO </th>
                        <th> PATIENT NAME </th>
                        <th> GENDER </th>
                        <th> AGE </th>
                        <th> DOCTER ID </th>
                        <th> ACTION </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Male</td>
                        <td>20</td>
                        <td>1</td>
                        <td>
                            <button type="submit" name="edit" class="e-btn">Save</button>
                            <button type="submit" name="delete" class="d-btn">Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PatientTable;

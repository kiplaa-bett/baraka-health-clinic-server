import React from "react";

function DocterTable() {
    return (
        <div className="dc-tbl">
            <table>
                <thead>
                    <tr>
                        <th> NO </th>
                        <th> DOCTER NAME </th>
                        <th> DEPARTMENT </th>
                        <th> HOSPITAL ID</th>
                        <th> ACTION </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bett</td>
                        <td>Dental</td>
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

export default DocterTable;

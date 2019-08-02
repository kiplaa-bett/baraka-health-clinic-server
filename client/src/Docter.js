import React from "react";

function Docter({ docter }) {
    const { Docter_id, Docter_Name, Department, Hospital_id } = docter;
    return (
        <div>
            <p>{Docter_id}</p>
            <p>{Docter_Name}</p>
            <p>{Department}</p>
            <p>{Hospital_id}</p>
        </div>
    )

}
export default Docter;
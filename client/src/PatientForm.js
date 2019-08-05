import React from "react";

function PatientForm() {
    return (
        <div className="pt-frm">
            <div className="hc-form">
                <div class="input-group">
                    <label>Patient Id:</label><br></br>
                    <input type="text" ></input>
                </div>
                <div class="input-group">
                    <label>Patient Name:</label><br></br>
                    <input type="text" ></input>
                </div>
                <div class="input-group">
                    <label>Gender:</label><br></br>
                    <input type="text" ></input>
                </div>
                <div class="input-group">
                    <label>Age:</label><br></br>
                    <input type="text" ></input>
                </div>
                <div class="input-group">
                    <label>Docter Id:</label><br></br>
                    <input type="text" ></input>
                </div>
            </div>
            <div className="hc-btn">
                <div class="input-group">
                    <button type="submit" name="save" class="s-btn">Save</button>
                    <button type="submit" name="update" class="u-btn">Update</button>
                </div>
            </div>
        </div>
    );
}

export default PatientForm;

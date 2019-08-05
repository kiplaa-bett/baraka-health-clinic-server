import React from "react";

function DocterForm() {
    return (
        <div className="dc-frm">
            <div className="hc-form">
                <div class="input-group">
                    <label>Docter Id:</label><br></br>
                    <input type="text" ></input>
                </div>
                <div class="input-group">
                    <label>Docter Name:</label><br></br>
                    <input type="text" ></input>
                </div>
                <div class="input-group">
                    <label>Department:</label><br></br>
                    <input type="text" ></input>
                </div>
                <div class="input-group">
                    <label>Hospital Id:</label><br></br>
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

export default DocterForm;

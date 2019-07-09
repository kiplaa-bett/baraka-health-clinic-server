require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//get homepage
app.get("/api/baraka", (req, res) => {
    pool.query("SELECT * FROM health_clinic", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});

//get docter
app.get("/api/docter", (req, res) => {
    pool.query("SELECT * FROM docter", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});

//get patient
app.get("/api/patient", (req, res) => {
    pool.query("SELECT * FROM patient", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }

        res.json(rows);
    });
});

//post docter
app.post("/api/docter", (req, res) => {
    const { Docter_Name, Department, Hospital_id } = req.body;

    if (!Docter_Name || !Department || !Hospital_id) {
        return res.status(400).json({ error: "invalid payload" });
    }

    pool.query(
        "INSERT INTO docter(Docter_Name, Department, Hospital_id) VALUES(?,?,?)",
        [Docter_Name, Department, Hospital_id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.insertId);
        }
    );
});

//post patient
app.post("/api/patient", (req, res) => {
    const { Patient_Name, Gender, Age, Docter_id } = req.body;

    if (!Patient_Name || !Gender || !Age || !Docter_id) {
        return res.status(400).json({ error: "invalid payload" });
    }

    pool.query(
        "INSERT INTO patient(Patient_Name, Gender, Age, Docter_id) VALUES(?,?,?,?)",
        [Patient_Name, Gender, Age, Docter_id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.insertId);
        }
    );
});

//update docter
app.put("/api/docter/:Docter_id", (req, res) => {
     const { Docter_Name, Department, Hospital_id } = req.body;

     if (!Docter_Name || !Department || !Hospital_id) {
         return res.status(400).json({ error: "Invalid payload" });
     }

     pool.query(
         "UPDATE docter SET Docter_Name=?, Department=?, Hospital_id=? WHERE Docter_id = ?",
         [Docter_Name, Department, Hospital_id, req.params.Docter_id],
         (error, results) => {
             if (error) {
                 return res.status(500).json({ error });
             }

             res.json(results.changeRows);
         }
     );
 });

//update Patient
 app.put("/api/patient/:Patient_id", (req, res) => {
     const {Patient_Name, Gender, Age, Docter_id} = req.body;

     if (!Patient_Name || !Gender || !Age || !Docter_id) {
         return res.status(400).json({ error: "Invalid payload" });
     }

     pool.query(
         "UPDATE patient SET Patient_Name=?, Gender=?, Age=?, Docter_id=? WHERE Patient_id=?",
         [Patient_Name, Gender, Age, Docter_id, req.params.Patient_id],
         (error, results) => {
             if (error) {
                 return res.status(500).json({ error });
             }

             res.json(results.changeRows);
         }
     );
 });

// Delete docter
app.delete("/api/docter/:Docter_id", (req, res) => {
    pool.query(
        "DELETE FROM docter WHERE Docter_id=?",
        [req.params.Docter_id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.affectedRows);
        }
    );
});

// Delete patient
app.delete("/api/patient/:Patient_id", (req, res) => {
    pool.query(
        "DELETE FROM patient WHERE Patient_id = ?",
        [req.params.Patient_id],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }
            res.json(results.affectedRows);
        }
    );
});

app.listen(9001, function () {
    console.log("Bett server is ready!");
});
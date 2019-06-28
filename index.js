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

//post
app.post("/api/docter/:Docter_id", (req, res) => {
    const { Docter_id } = req.body;

    if (!Docter_id) {
        return res.status(400).json({ error: "invalid payload" });
    }

    pool.query(
        "INSERT INTO docter (Docter_id) values (?)",
        [docter.Docter_Name],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error });
            }

            res.json(results.insertId);
        });
});

//app.post("/api/baraka_health_clinic", (req, res) =>{
//const { name } = req.body;

//if (name ==="") {
// return res.status(400).json({error: "invalid payload"});
// }
//console.log(body.baraka_health_clinic);

//insert Hospital_Name
//});

app.listen(9000, function () {
    console.log("Bett server is ready!");
});
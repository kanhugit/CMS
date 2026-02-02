const express = require("express");
const db = require("../config/db");
const router = express.Router();


// Save contact form
router.post("/contact", (req, res) => {
const { name, email, message } = req.body;


const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
db.query(sql, [name, email, message], (err, result) => {
if (err) return res.status(500).json(err);
res.json({ success: true });
});
});


// Get all contacts (Admin)
router.get("/contacts", (req, res) => {
db.query("SELECT * FROM contacts ORDER BY id DESC", (err, result) => {
if (err) return res.status(500).json(err);
res.json(result);
});
});


module.exports = router;
import express from "express";
import bcrypt from "bcryptjs";
import db from "../config/db.js";

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login route working");
});

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields required" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, hashedPassword, "ADMIN"], (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY")
        return res.status(400).json({ message: "Email already exists" });

      return res.status(500).json({ message: "Database error" });
    }

    res.json({ success: true, message: "Account created" });
  });
});

export default router;

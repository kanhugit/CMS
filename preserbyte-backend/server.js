const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const nodemailer = require("nodemailer");
const path = require("path");

const contentRoutes = require("./routes/contentRoutes");
// ✅ FIRST create app
const app = express();
// ✅ Middleware
app.use(cors());
app.use(express.json());
// ✅ Static Upload Folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// ✅ Routes AFTER app creation
app.use("/content", contentRoutes);// for content management routes


const PORT = 5000;
// ================= START SERVER =================
// ✅ Wrap everything inside async function
async function startServer() {
  // 🔹 MySQL connection
  const db = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Kanha@123", //replace with your MySQL password
    database: "preserbyte_db", //replace with your database name
  });

  // 🔹 Create table
  await db.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 🔹 Nodemailer config
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "beherakanha029@gmail.com", // replace with your compnay/person email
      pass: "iifi olpf jtgp ebrf", // replace with your email app password(not regular password) ,generate it from your email settings
    },
  });

  // 🔹 Contact API
  app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
      // 1️⃣ Save to DB
      await db.query(
        "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
        [name, email, message]
      );

      // 2️⃣ Send email to company
      await transporter.sendMail({
        from: "beherakanha029@gmail.com", // replace with your company/person email
        to: "beherakanha029@gmail.com", // replace with your company email
        subject: "New Contact Form Message",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({
        message: "Message stored in DB and emailed to company",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  });

  // 🔹 Start server
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
}
// ✅ Call function
startServer();

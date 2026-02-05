const express = require("express");
const db = require("../config/db.js");
const multer = require("multer");

const router = express.Router();

/* IMAGE UPLOAD */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/* ================= HERO SLIDES ================= */

// GET all slides
router.get("/hero-slides", (req, res) => {
  db.query("SELECT * FROM hero_slides", (err, rows) => {
    res.json(rows);
  });
});

// ADD slide
router.post("/hero-slides", upload.single("image"), (req, res) => {
  const { title, subtitle } = req.body;
  const image = req.file.filename;

  db.query(
    "INSERT INTO hero_slides (title, subtitle, image) VALUES (?,?,?)",
    [title, subtitle, image],
    () => res.json({ success: true })
  );
});

// UPDATE slide
router.put("/hero-slides/:id", upload.single("image"), (req, res) => {
  const { title, subtitle } = req.body;
  const { id } = req.params;

  let query = "UPDATE hero_slides SET title=?, subtitle=?";
  let values = [title, subtitle];

  if (req.file) {
    query += ", image=?";
    values.push(req.file.filename);
  }

  query += " WHERE id=?";
  values.push(id);

  db.query(query, values, () => res.json({ success: true }));
});

// DELETE slide
router.delete("/hero-slides/:id", (req, res) => {
  db.query("DELETE FROM hero_slides WHERE id=?", [req.params.id], () =>
    res.json({ success: true })
  );
});

/* ================= INDUSTRIES ================= */

router.get("/industries", (req, res) => {
  db.query("SELECT * FROM industries", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});
router.post("/industries", (req, res) => {
  const { name, description } = req.body;

  db.query(
    "INSERT INTO industries (name, description) VALUES (?, ?)",
    [name, description],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ success: true });
    }
  );
});
router.delete("/industries/:id", (req, res) => {
  db.query("DELETE FROM industries WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true });
  });
});

/* ✅ COMMONJS EXPORT */
module.exports = router;

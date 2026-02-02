import express from "express";
import db from "../config/db.js";
import multer from "multer";

const router = express.Router();

/* IMAGE UPLOAD */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/* HERO */
router.get("/hero", (req, res) => {
  db.query("SELECT * FROM hero LIMIT 1", (e, r) => res.json(r[0]));
});

router.put("/hero", upload.single("image"), (req, res) => {
  const { title, subtitle } = req.body;
  const image = req.file?.filename;

  let q = "UPDATE hero SET title=?, subtitle=?";
  let v = [title, subtitle];
  if (image) {
    q += ", image=?";
    v.push(image);
  }
  q += " WHERE id=1";

  db.query(q, v, () => res.json({ success: true }));
});

/* INDUSTRIES */
router.get("/industries", (req, res) => {
  db.query("SELECT * FROM industries", (e, r) => res.json(r));
});

router.post("/industries", (req, res) => {
  const { name, description } = req.body;
  db.query(
    "INSERT INTO industries (name, description) VALUES (?,?)",
    [name, description],
    () => res.json({ success: true })
  );
});

router.delete("/industries/:id", (req, res) => {
  db.query("DELETE FROM industries WHERE id=?", [req.params.id], () =>
    res.json({ success: true })
  );
});

export default router;

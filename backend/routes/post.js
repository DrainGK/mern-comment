const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Voici les donnees" });
});
router.post("/", (req, res) => {
  res.json({ message: req.body.message });
});
router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});
router.delete("/:id", (req, res) => {
  res.json({ message: "post supprime id: " + req.params.id });
});
router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post like: id" + req.params.id });
});
router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post dislike: id" + req.params.id });
});

module.exports = router;
const express = require("express");
const router = express.Router();

let users = [
  {
    id: 1,
    nama: "Rajasyah",
    email: "rajasyah@gmail.com",
  },
  {
    id: 2,
    nama: "eduwork",
    email: "eduwork@gmail.com",
  },
];

router
  .route("/users")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    res.send("Post Users");
  });

router.put("/users/:userId", (req, res) => {
  const id = req.params;
  res.send(id);
});

router.delete("/users/:userId", (req, res) => {
  const id = req.params.userId;
  res.send(id);
});

module.exports = router;

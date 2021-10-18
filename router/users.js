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
    users.push(req.body);
    res.send(users);
  });

router.put("/users/:userId", (req, res) => {
  const id = req.params.userId;
  users.filter((user) => {
    if (user.id == id) {
      user.id = id;
      user.nama = req.body.nama;
      user.email = req.body.email;

      return user;
    }
  });
  res.json(users);
});

router.delete("/users/:userId", (req, res) => {
  const id = req.params.userId;
  users = users.filter((user) => user.id != id);
  res.json(users);
});

module.exports = router;

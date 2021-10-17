const express = require("express");
const userRouter = require("./router/users");
const app = express();

app.get("/", (req, res) => {
  res.send({
    status: "Success",
    message: "Hello world",
  });
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.use(userRouter);

app.listen(process.env.PORT || 3000, () =>
  console.log("server running at http://localhost:3000")
);

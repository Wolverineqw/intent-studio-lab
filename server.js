const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("INTENT STUDIO LAB API ONLINE");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Started");
});

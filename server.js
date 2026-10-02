const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("INTENT STUDIO LAB API ONLINE");
});

app.get("/health", (req, res) => {
  res.json({
    status: "online"
  });
});

app.get("/api/version", (req, res) => {
  res.json({
    version: "1.0.0"
  });
});

app.post("/api/intent", (req, res) => {

    const { intent } = req.body;

    res.json({
        success: true,
        receivedIntent: intent,
        creativeA: "Social Media Ad",
        creativeB: "Video Campaign",
        creativeC: "Banner Campaign"
    });

});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Started");
});

import express from "express";

const app = express(); // create an express app

// Endpoints

// GET request @ API endpoint /api/hello
app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

// hello_server/app.js
import express from "express";
import fs from "fs";

const app = express(); // create an express app

// Middleware (CORS)

app.use(express.json());
app.use(express.static("./Public"));

app.get("/", (req, res) => {
  fs.readFile("./public/html/index.html", "utf8", (err, html) => {
    if (err) {
      res.status(500).send("There was an error: " + err);
      return;
    }

    console.log("Sending page...");
    res.send(html);
    console.log("Page sent!");
  });
});

// Endpoints

// GET request @ API endpoint /api/hello
app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

// listen on port 3000
app.listen(5001, () => {
  console.log("Example app listening on port 5001!");
});

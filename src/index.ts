const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// In-memory data store
const applications = {};
let nextApplicationId = 1;

app.get("/", (_, res) => res.status(200).send("Hello, world!"));
app.get("/health", (_, res) => res.status(200).send("Healthy"));

// POST route to start a new insurance application
app.post("/application", (req, res) => {
  const application = req.body;
  const id = nextApplicationId++;
  applications[id] = application;

  res.json({
    id,
    resume: `http://localhost:3000/${id}/resume`,
  });
});

// GET route to retrieve the current insurance application
app.get("/application/:id", (req, res) => {
  const { id } = req.params;
  if (!applications[id]) {
    return res.status(404).json({ message: "Application not found" });
  }

  res.json(applications[id]);
});

// PUT route to update the insurance application
app.put("/application/:id", (req, res) => {
  const { id } = req.params;
  if (!applications[id]) {
    return res.status(404).json({ message: "Application not found" });
  }

  applications[id] = { ...applications[id], ...req.body };
  res.json(applications[id]);
});

// POST route to validate the application and return a price
app.post("/application/:id/validate", (req, res) => {
  const { id } = req.params;
  if (!applications[id]) {
    return res.status(404).json({ message: "Application not found" });
  }

  const price = Math.floor(Math.random() * 100);
  res.json({ price });
});

// GET route to resume an existing application
app.get("/application/:id/resume", (req, res) => {
  const { id } = req.params;
  if (!applications[id]) {
    return res.status(404).json({ message: "Application not found" });
  }

  const price = Math.floor(Math.random() * 100);
  res.json({ price });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

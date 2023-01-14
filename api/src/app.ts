import express from "express";
// import { cors } from "cors";
var cors = require("cors");

import bodyParser from "body-parser";
import "joi-extract-type";

import applications from "./routes/applications";
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/applications", applications);
app.get("/", (_, res) => res.status(200).send("Hello, world!"));
app.get("/health", (_, res) => res.status(200).send("Healthy"));

export default app;

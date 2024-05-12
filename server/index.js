import express from "express";
import config from "./config/config.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
app.listen(config.port, () => {
  console.log(
    `Server is running on port ${config.port}. visit: http://localhost:${config.port}`
  );
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

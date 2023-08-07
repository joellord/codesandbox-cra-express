import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({message: "Hello World!"}).status(200);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
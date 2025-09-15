import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { Connection } from "./database/db";
import Router from "./routes/route";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = process.env.PORT || 8000;

// ✅ wait for DB before starting server
Connection().then(() => {
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
}).catch((err) => {
  console.error(" Could not start server:", err);
});

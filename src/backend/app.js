import express from "express";
import http from "http";
import cors from "cors";
import pc from "picocolors";
import morgan from "morgan";
import "dotenv/config";
const app = express();
app.use(cors())
app.use(morgan("dev"));

const PORT = process.env.PORT ?? 8000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Listening on port ${pc.yellow(`http://localhost:${PORT}`)}`);
});

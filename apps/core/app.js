import http from "node:http";
import express from "express";
import cors from "cors";
import debug from "debug";

import pingRoute from "./routes/ping.js";

const logger = debug("core");

const app = express();
const port = process.env.PORT || 3559;

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/status", pingRoute);

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
  logger(
    `server started and listening on http://localhost:${port} for incoming requests.`
  );
});

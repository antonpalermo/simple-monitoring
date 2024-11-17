import http from "node:http";
import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3559;

app.use(cors({ origin: "*" }));
app.disable("x-powered-by");
app.get("/ping", (_, res) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
  });
});

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
  console.log(
    `server started and listening on http://localhost:${port} for incoming requests.`
  );
});

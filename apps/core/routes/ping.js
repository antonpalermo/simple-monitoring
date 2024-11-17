import express from "express";

const route = express.Router({ strict: true });

route.get("/ping", (_, res) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
  });
});

export default route;

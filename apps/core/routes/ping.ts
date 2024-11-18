import express, { type Request, Response } from "express";

const route = express.Router({ strict: true });

route.get("/ping", (_: Request, res: Response) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    database: process.env.DATABASE_URL,
  });
});

export default route;

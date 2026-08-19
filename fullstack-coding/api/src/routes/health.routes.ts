import { Router } from "express";
import { query } from "../db.js";

export const healthRouter = Router();

healthRouter.get("/", async (_req, res) => {
  let db = "ok";
  try {
    await query("SELECT 1");
  } catch (err) {
    db = `error: ${err instanceof Error ? err.message : String(err)}`;
  }
  res.json({ api: "ok", db });
});

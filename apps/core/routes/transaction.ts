import { Router, Request, Response } from "express";

import db from "../database";
import { generateUniqueID } from "../utils/generate-id";

const router: Router = Router({ strict: true });

router.post("/transact", async (req: Request, res: Response) => {
  try {
    const txn = await db
      .insertInto("transactions")
      .values({ id: generateUniqueID(), txnid: generateUniqueID() })
      .returningAll()
      .executeTakeFirst();

    return res.status(200).json(txn);
  } catch (error) {
    throw error;
  }
});

export default router;

import { DB } from "../prisma/database/types";

import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
  }),
});

const database = new Kysely<DB>({ dialect });

export default database;

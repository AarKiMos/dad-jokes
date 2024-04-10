import pg from "pg";
import "dotenv/config";

const db = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_POST,
  database: process.env.DB_NAME,
});

export default db;

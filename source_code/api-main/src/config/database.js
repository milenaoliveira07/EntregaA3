import "dotenv/config";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;

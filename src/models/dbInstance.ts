import { Pool } from 'pg';

export const client = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORLD,
  port: Number(process.env.DB_PORT),
});

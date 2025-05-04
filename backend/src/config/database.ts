import { Pool, types } from 'pg';
 import dotenv from 'dotenv';
 
// Configura o parser para BIGINT
types.setTypeParser(types.builtins.INT8, parseInt);
 
 dotenv.config();
 
 const pool = new Pool({
   host: process.env.DB_HOST,
   port: Number(process.env.DB_PORT),
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
 });
 
 export default pool;
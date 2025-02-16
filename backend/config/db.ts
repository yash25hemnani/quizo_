import mysql from "mysql2/promise";
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.SQL_HOST as string,
    user: process.env.SQL_USER as string,
    password: process.env.SQL_PASSWORD as string,
    database: process.env.SQL_DATABASE as string,
})

export default pool;
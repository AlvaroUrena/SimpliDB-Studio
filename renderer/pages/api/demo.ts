import type { NextApiResponse } from 'next'
import mysql from 'mysql2'

export default async function handler(req, res: NextApiResponse) {
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 33060,
    password: '24082004',
    database: 'mysql-db',
    user: 'root'
  })
  res.status(200).json({ text: conn.getMaxListeners() })
}

import { router, publicProcedure } from '../trpc'
import mysql from 'mysql2'

const conn = mysql.createConnection({
  host: 'localhost',
  port: 33060,
  password: '24082004',
  database: 'mysql-db',
  user: 'root'
})
export const appRouter = router({
  getMaxListeners: publicProcedure.query(async () => {
    return conn.getMaxListeners()
  })
})
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter

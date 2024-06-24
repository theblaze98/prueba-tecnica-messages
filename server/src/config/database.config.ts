import { Client } from 'pg'
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schemas from '../models'

export const connectionDB = async (): Promise<NodePgDatabase<typeof schemas>> => {
  const client = new Client({
    host: <string>process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: <string>process.env.DB_USER,
    password: <string>process.env.DB_PASSWORD,
    database: <string>process.env.DB_DATABASE
  })

  await client.connect()

  const db = drizzle(client, {schema: schemas })

  return db
}

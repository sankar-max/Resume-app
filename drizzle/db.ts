import { env } from "@/env/server"
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "@/drizzle/schema"
const db = drizzle(env.DATABASE_URL, { schema })

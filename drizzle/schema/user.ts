import {  pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, updateAt } from "./helpers"

export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  email: varchar().notNull().unique(),
  avatar: varchar().notNull(),
  createdAt,
  updateAt,
})

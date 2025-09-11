import { pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, updateAt } from "./helpers"
import { relations } from "drizzle-orm"
import { JobInfoTable } from "./jobsInfo"

export const UserTable = pgTable("users", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  email: varchar().notNull().unique(),
  avatar: varchar().notNull(),
  createdAt,
  updateAt,
})
export const userRelations = relations(UserTable, ({ many }) => ({
  jobInfos: many(JobInfoTable),
}))

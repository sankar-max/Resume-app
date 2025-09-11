import { pgEnum, pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, id, updateAt } from "./helpers"
import { UserTable } from "./user"
import { relations } from "drizzle-orm"
import { QuestionTable } from "./question"
import { InterviewTable } from "./interview"

export const experienceLevel = ["junior", "mid-level", "senior"] as const

export type ExperienceLevelT = (typeof experienceLevel)[number]

export const experienceLevelENum = pgEnum(
  "job_infos_experience_level",
  experienceLevel
)

export const JobInfoTable = pgTable("job_info", {
  id,
  title: varchar(),
  name: varchar().notNull(),
  description: varchar().notNull(),
  userId: varchar().references(() => UserTable.id, { onDelete: "cascade" }),
  experienceLevel: experienceLevelENum().notNull(),
  createdAt,
  updateAt,
})

export const jobInfoRelations = relations(JobInfoTable, ({ one, many }) => ({
  user: one(UserTable, {
    fields: [JobInfoTable.userId],
    references: [UserTable.id],
  }),
  questions: many(QuestionTable),
  interviews: many(InterviewTable),
}))

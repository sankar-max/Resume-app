import { pgTable, uuid, varchar } from "drizzle-orm/pg-core"
import { createdAt, id, updateAt } from "./helpers"
import { JobInfoTable } from "./jobsInfo"
import { relations } from "drizzle-orm"

export const InterviewTable = pgTable("interviews", {
  id,
  jobInfoId: uuid().references(() => JobInfoTable.id, { onDelete: "cascade" }),
  duration: varchar().notNull(),
  humeChat: varchar(),
  feedback: varchar(),
  createdAt,
  updateAt,
})

export const interviewRelations = relations(InterviewTable, ({ one }) => ({
  jobInfo: one(JobInfoTable, {
    fields: [InterviewTable.jobInfoId],
    references: [JobInfoTable.id],
  }),
}))

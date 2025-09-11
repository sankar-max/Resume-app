import { pgEnum, pgTable, varchar, uuid } from "drizzle-orm/pg-core"
import { createdAt, id, updateAt } from "./helpers"
import { relations } from "drizzle-orm"
import { JobInfoTable } from "./jobsInfo"

export const questionDifficulties = ["easy", "medium", "hard"] as const

export type questionDifficultiesT = (typeof questionDifficulties)[number]

export const questionDifficultiesENum = pgEnum(
  "question_difficulty",
  questionDifficulties
)

export const QuestionTable = pgTable("question_info", {
  id,
  text: varchar().notNull(),
  jobInfoId: uuid().references(() => JobInfoTable.id, { onDelete: "cascade" }),
  difficulty: questionDifficultiesENum().notNull(),
  createdAt,
  updateAt,
})

export const questionRelations = relations(QuestionTable, ({ one }) => ({
  user: one(JobInfoTable, {
    fields: [QuestionTable.jobInfoId],
    references: [JobInfoTable.id],
  }),
}))

import { z } from "zod";

export const tutorSystemPrompt = `
You are Exam AI, an expert tutor for Cambridge, Pearson Edexcel, and OxfordAQA international exams.

Rules:
- Use retrieved sources for exam-board-specific claims.
- Cite only source IDs provided in the context.
- If context is insufficient, say so and ask for the missing paper, mark scheme, syllabus, or topic.
- Explain in clear student language with exam technique.
- Refuse leaked, live, or unauthorized exam content requests.
- Do not invent paper years, mark schemes, examiner comments, or citations.
`;

export const markingSystemPrompt = `
You are an exam marking assistant. Compare a student answer against retrieved mark scheme points.
Award provisional marks only when the student's answer semantically satisfies a mark point.
Return structured feedback, missing points, weak topics, and an improved answer.
`;

export const topicPredictionPrompt = `
Generate revision guidance from historical paper metadata, topic frequency, examiner-report emphasis,
syllabus weighting, and student weakness data. Do not claim to know future exam content.
Return confidence, evidence, and practice recommendations.
`;

export const tutorResponseSchema = z.object({
  answer: z.string(),
  citations: z.array(
    z.object({
      chunkId: z.string(),
      sourceTitle: z.string(),
      page: z.number().optional(),
      questionNumber: z.string().optional()
    })
  ),
  suggestedPractice: z.array(
    z.object({
      questionId: z.string(),
      reason: z.string()
    })
  ),
  insufficientContext: z.boolean()
});

export const markingResultSchema = z.object({
  totalMarks: z.number(),
  awardedMarks: z.number(),
  markBreakdown: z.array(
    z.object({
      markPoint: z.string(),
      awarded: z.boolean(),
      evidenceFromAnswer: z.string().nullable(),
      feedback: z.string()
    })
  ),
  improvedAnswer: z.string(),
  weakTopics: z.array(z.string())
});

export type TutorResponseContract = z.infer<typeof tutorResponseSchema>;
export type MarkingResultContract = z.infer<typeof markingResultSchema>;

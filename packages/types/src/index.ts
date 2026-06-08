export type ExamBoard = "cambridge" | "edexcel" | "oxfordaqa";

export type QualificationLevel = "igcse" | "as-level" | "a-level" | "ial";

export type PaperType =
  | "question_paper"
  | "mark_scheme"
  | "examiner_report"
  | "notes"
  | "topic_questions";

export type SearchFilters = {
  board?: ExamBoard;
  level?: QualificationLevel;
  subjectId?: string;
  syllabusCode?: string;
  yearFrom?: number;
  yearTo?: number;
  session?: string;
  paperType?: PaperType;
  topicIds?: string[];
};

export type Citation = {
  chunkId: string;
  sourceType: string;
  sourceTitle: string;
  page?: number;
  questionNumber?: string;
};

export type TutorResponse = {
  answer: string;
  citations: Citation[];
  suggestedPractice: Array<{
    questionId: string;
    reason: string;
  }>;
  insufficientContext: boolean;
};

export type MarkingResult = {
  totalMarks: number;
  awardedMarks: number;
  markBreakdown: Array<{
    markPoint: string;
    awarded: boolean;
    evidenceFromAnswer: string | null;
    feedback: string;
  }>;
  improvedAnswer: string;
  weakTopics: string[];
};

export type PredictedTopic = {
  topicId: string;
  topicName: string;
  confidence: number;
  evidence: string;
  practiceQuestionIds: string[];
};

export const subjects = [
  { board: "Cambridge", level: "IGCSE", name: "Biology", code: "0610", readiness: 74 },
  { board: "Cambridge", level: "A-Level", name: "Chemistry", code: "9701", readiness: 61 },
  { board: "Edexcel", level: "IAL", name: "Mathematics", code: "WMA", readiness: 68 }
];

export const weakTopics = [
  { name: "Gas exchange", subject: "Biology 0610", mastery: 42, action: "Practise structured Qs" },
  { name: "Organic mechanisms", subject: "Chemistry 9701", mastery: 36, action: "Review mark points" },
  { name: "Differentiation", subject: "Edexcel IAL Maths", mastery: 58, action: "Timed mixed set" }
];

export const papers = [
  {
    id: "p1",
    title: "Biology 0610 Paper 42 May/June 2024",
    board: "Cambridge",
    type: "Question paper",
    year: 2024,
    topics: ["Gas exchange", "Inheritance", "Coordination"]
  },
  {
    id: "p2",
    title: "Chemistry 9701 Paper 42 Oct/Nov 2023 Mark Scheme",
    board: "Cambridge",
    type: "Mark scheme",
    year: 2023,
    topics: ["Equilibria", "Organic chemistry", "Kinetics"]
  },
  {
    id: "p3",
    title: "Mathematics WMA12 Jan 2024 Examiner Report",
    board: "Edexcel",
    type: "Examiner report",
    year: 2024,
    topics: ["Calculus", "Sequences", "Trigonometry"]
  }
];

export const predictions = [
  {
    topic: "Gas exchange in humans",
    subject: "Biology 0610",
    confidence: 72,
    evidence: "Repeated examiner-report weakness and lower recent coverage."
  },
  {
    topic: "Transition metals",
    subject: "Chemistry 9701",
    confidence: 65,
    evidence: "High syllabus weighting and frequent structured-question pairing."
  },
  {
    topic: "Integration by substitution",
    subject: "Edexcel IAL Maths",
    confidence: 59,
    evidence: "Moderate recency gap and strong co-occurrence with area problems."
  }
];

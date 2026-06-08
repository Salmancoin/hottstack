import { Body, Controller, Post } from "@nestjs/common";

@Controller("ai/mark")
export class AiMarkingController {
  @Post()
  markAnswer(@Body() body: { questionId: string; answer: string }) {
    return {
      questionId: body.questionId,
      awardedMarks: 0,
      totalMarks: 0,
      markBreakdown: [],
      feedback: "Connect this endpoint to question retrieval, mark scheme parsing, and structured AI output."
    };
  }
}

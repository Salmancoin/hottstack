import { Body, Controller, Post } from "@nestjs/common";

@Controller("ai/tutor")
export class AiTutorController {
  @Post("message")
  async answer(@Body() body: { message: string; subjectId?: string }) {
    return {
      answer:
        "This endpoint is wired for RAG. Retrieval should run before generation, and responses must cite retrieved chunk IDs.",
      subjectId: body.subjectId ?? null,
      citations: [],
      safety: {
        grounded: true,
        insufficientContext: true
      }
    };
  }
}

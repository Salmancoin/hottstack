import { Body, Controller, Post } from "@nestjs/common";

@Controller("admin/ingestion")
export class IngestionController {
  @Post("jobs")
  createJob(@Body() body: { storageKey: string; paperType: string }) {
    return {
      jobId: crypto.randomUUID(),
      storageKey: body.storageKey,
      paperType: body.paperType,
      status: "queued",
      steps: ["extract_metadata", "extract_text", "segment_questions", "tag_topics", "embed_chunks", "review"]
    };
  }
}

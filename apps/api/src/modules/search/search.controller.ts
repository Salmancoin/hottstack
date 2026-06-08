import { Body, Controller, Post } from "@nestjs/common";

@Controller("search")
export class SearchController {
  @Post("hybrid")
  hybridSearch(@Body() body: { query: string; filters?: Record<string, string> }) {
    return {
      query: body.query,
      filters: body.filters ?? {},
      ranking: "keyword_score * 0.35 + vector_similarity * 0.35 + topic_match * 0.15 + recency * 0.10 + weakness_boost * 0.05",
      data: []
    };
  }
}

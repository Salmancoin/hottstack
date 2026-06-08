import { Controller, Get, Param, Query } from "@nestjs/common";

@Controller("papers")
export class PapersController {
  @Get("search")
  searchPapers(@Query("q") query?: string) {
    return {
      query: query ?? "",
      data: [
        {
          id: "demo-paper-1",
          title: "Biology 0610 Paper 42 May/June 2024",
          type: "question_paper",
          year: 2024,
          topics: ["Gas exchange", "Inheritance"]
        }
      ]
    };
  }

  @Get(":id")
  getPaper(@Param("id") id: string) {
    return {
      id,
      title: "Biology 0610 Paper 42 May/June 2024",
      viewerUrl: null,
      legalStatus: "license_required_before_public_hosting"
    };
  }
}

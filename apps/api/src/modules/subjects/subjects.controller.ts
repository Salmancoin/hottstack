import { Controller, Get } from "@nestjs/common";

@Controller("subjects")
export class SubjectsController {
  @Get()
  listSubjects() {
    return {
      data: [
        { board: "Cambridge", level: "IGCSE", name: "Biology", syllabusCode: "0610" },
        { board: "Cambridge", level: "A-Level", name: "Chemistry", syllabusCode: "9701" },
        { board: "Pearson Edexcel", level: "IAL", name: "Mathematics", syllabusCode: "WMA" }
      ]
    };
  }
}

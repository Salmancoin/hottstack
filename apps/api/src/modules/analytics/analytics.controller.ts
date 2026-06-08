import { Controller, Get } from "@nestjs/common";

@Controller("analytics")
export class AnalyticsController {
  @Get("me")
  getStudentAnalytics() {
    return {
      readiness: 68,
      streakDays: 11,
      weakTopics: [
        { topic: "Gas exchange", mastery: 42 },
        { topic: "Organic mechanisms", mastery: 36 }
      ]
    };
  }
}

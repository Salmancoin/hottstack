import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AnalyticsModule } from "./modules/analytics/analytics.module";
import { AiMarkingModule } from "./modules/ai-marking/ai-marking.module";
import { AiTutorModule } from "./modules/ai-tutor/ai-tutor.module";
import { AuthModule } from "./modules/auth/auth.module";
import { IngestionModule } from "./modules/ingestion/ingestion.module";
import { PapersModule } from "./modules/papers/papers.module";
import { PaymentsModule } from "./modules/payments/payments.module";
import { SearchModule } from "./modules/search/search.module";
import { SubjectsModule } from "./modules/subjects/subjects.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    SubjectsModule,
    PapersModule,
    SearchModule,
    AiTutorModule,
    AiMarkingModule,
    IngestionModule,
    AnalyticsModule,
    PaymentsModule
  ]
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { AiTutorController } from "./ai-tutor.controller";

@Module({
  controllers: [AiTutorController]
})
export class AiTutorModule {}

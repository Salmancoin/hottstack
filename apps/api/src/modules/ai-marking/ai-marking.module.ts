import { Module } from "@nestjs/common";
import { AiMarkingController } from "./ai-marking.controller";

@Module({
  controllers: [AiMarkingController]
})
export class AiMarkingModule {}

import { Module } from "@nestjs/common";
import { PapersController } from "./papers.controller";

@Module({
  controllers: [PapersController]
})
export class PapersModule {}

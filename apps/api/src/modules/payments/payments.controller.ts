import { Body, Controller, Post } from "@nestjs/common";

@Controller("payments")
export class PaymentsController {
  @Post("stripe/webhook")
  stripeWebhook(@Body() body: unknown) {
    return { received: true, provider: "stripe", bodyType: typeof body };
  }

  @Post("mpesa/callback")
  mpesaCallback(@Body() body: unknown) {
    return { received: true, provider: "mpesa", bodyType: typeof body };
  }
}

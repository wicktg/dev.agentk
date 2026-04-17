import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { auth } from "./auth";
import { dodoWebhookHandler } from "./webhookDodo";
import { telegramWebhook } from "./telegram";
import { discordWebhook } from "./discord";

const http = httpRouter();
auth.addHttpRoutes(http);

http.route({
  path: "/webhookDodo",
  method: "POST",
  handler: dodoWebhookHandler,
});

http.route({
  path: "/webhookDodo",
  method: "OPTIONS",
  handler: httpAction(async () => new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, svix-id, svix-timestamp, svix-signature",
    },
  })),
});

http.route({
  path: "/telegram",
  method: "POST",
  handler: telegramWebhook,
});

http.route({
  path: "/discord",
  method: "POST",
  handler: discordWebhook,
});

export default http;

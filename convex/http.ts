import { httpRouter } from "convex/server";
import { auth } from "./auth";
import { telegramWebhook } from "./telegram";
import { discordWebhook } from "./discord";

const http = httpRouter();
auth.addHttpRoutes(http);

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

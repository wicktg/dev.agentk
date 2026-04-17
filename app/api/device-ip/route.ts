import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp    = req.headers.get("x-real-ip");
  const ip = (forwarded?.split(",")[0] ?? realIp ?? "unknown").trim();
  return NextResponse.json({ ip });
}

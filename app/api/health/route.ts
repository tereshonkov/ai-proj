import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ time: new Date().toISOString(), status: "ok" }, { status: 200 });
}

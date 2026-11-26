import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const { status, success } = await supabaseAdmin.getOpenApiSpec();

    if (!success) {
      return NextResponse.json(
        { time: new Date().toISOString(), status: "error", error: "Supabase health check failed" },
        { status: status }
      );
    }

    return NextResponse.json(
      { time: new Date().toISOString(), status: "ok", supabaseStatus: status },
      { status: status }
    );
  } catch (error) {
    console.error("Supabase health check failed:", error);

    return NextResponse.json({ time: new Date().toISOString(), status: "error" }, { status: 500 });
  }
}

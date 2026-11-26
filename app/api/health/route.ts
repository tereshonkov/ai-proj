import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const { status, success, error } = await supabaseAdmin.getOpenApiSpec();

    if (!success) {
      console.error("Supabase health check failed: 503 Service Unavailable", {
        status,
        success,
        error,
      });
      return NextResponse.json(
        {
          time: new Date().toISOString(),
          status: "error",
          error: "Supabase health check failed",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ time: new Date().toISOString(), status: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Supabase health check failed: 503 Service Unavailable", error);

    return NextResponse.json({ time: new Date().toISOString(), status: "error" }, { status: 503 });
  }
}

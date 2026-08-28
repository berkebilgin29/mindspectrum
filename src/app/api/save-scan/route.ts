import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    // If Supabase variables are not set, we silently ignore the save
    // This allows the app to work without a DB in local/forked setups
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({ success: true, warning: "Supabase not configured" });
    }

    const body = await request.json();
    const { audience, scores, branches_used } = body;

    if (!audience || !scores) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("scans").insert([
      {
        audience,
        scores,
        branches_used: branches_used ?? [],
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save scan" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Save scan endpoint error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

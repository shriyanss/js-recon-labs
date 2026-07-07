import { NextResponse } from "next/server";

// Triggers request rules: api_path, missing_authorization_header
export async function GET() {
    return NextResponse.json({ content: "<p>Hello from API</p>" });
}

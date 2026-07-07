import { NextResponse } from "next/server";

// Triggers request rules: api_path, admin_api, missing_authorization_header
export async function GET() {
    return NextResponse.json({ users: [] });
}

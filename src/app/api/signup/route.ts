import { NextResponse } from "next/server";

/**
 * Territory request handler.
 * TODO: connect this to the real destination (CRM, email, or webhook)
 * before launch — right now it accepts the payload and returns success.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Request received. We'll confirm your territory within one business day.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process request" },
      { status: 500 }
    );
  }
}

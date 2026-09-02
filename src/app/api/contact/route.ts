import { NextResponse } from "next/server";

/** Contact form handler. Connect your email provider — see documentation/index.html */
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
      message: "Your message has been received. We will contact you shortly.",
      data: body,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process contact form" },
      { status: 500 }
    );
  }
}

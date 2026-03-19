import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await resend.emails.send({
      from: "OrchardPatch Waitlist <info@orchardpatch.com>",
      to: "jude@orchardpatch.com",
      subject: `🍎 New waitlist signup: ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #2d5016; margin-bottom: 8px;">New OrchardPatch Signup</h2>
          <p style="color: #555; margin-bottom: 24px;">Someone just joined the waitlist.</p>
          <div style="background: #f0f7e8; border: 1px solid #c5dba8; border-radius: 8px; padding: 16px 20px;">
            <p style="margin: 0; font-size: 18px; color: #1a1a2e; font-weight: 600;">${email}</p>
          </div>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">orchardpatch.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Failed to process signup" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function appendToSheet(email: string) {
  try {
    const sheetId = process.env.WAITLIST_SHEET_ID;
    const serviceKey = process.env.GOOGLE_SERVICE_KEY;
    if (!sheetId || !serviceKey) return;

    // Get access token via service account
    const key = JSON.parse(serviceKey);
    const now = new Date().toISOString();

    // Use Google Sheets API directly
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: await makeJWT(key),
      }),
    });
    const { access_token } = await tokenRes.json();

    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A:C:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [[email, now, "orchardpatch.com"]],
        }),
      }
    );
  } catch (err) {
    console.error("Sheet append error:", err);
  }
}

async function makeJWT(key: { client_email: string; private_key: string }) {
  const header = btoa(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const now = Math.floor(Date.now() / 1000);
  const payload = btoa(
    JSON.stringify({
      iss: key.client_email,
      scope: "https://www.googleapis.com/auth/spreadsheets",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    })
  );
  const data = `${header}.${payload}`;

  // Import the private key
  const pemContents = key.private_key
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\n/g, "");
  const binaryKey = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(data)
  );
  const sig = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return `${data}.${sig}`;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Send notification email and append to sheet in parallel
    await Promise.allSettled([
      resend.emails.send({
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
      }),
      appendToSheet(email),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Failed to process signup" }, { status: 500 });
  }
}

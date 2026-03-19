import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrchardPatch — macOS Fleet App Inventory & Patch Management",
  description:
    "Automatically discovers every app on every device in your macOS fleet and keeps them patched — without touching your MDM. Built for mac admins who are tired of doing this manually.",
  openGraph: {
    title: "OrchardPatch — macOS Fleet App Inventory & Patch Management",
    description:
      "Automatic app inventory and one-click patching for macOS fleets. No MDM conflicts. No manual setup.",
    siteName: "OrchardPatch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrchardPatch — macOS Fleet App Inventory & Patch Management",
    description:
      "Automatic app inventory and one-click patching for macOS fleets. No MDM conflicts. No manual setup.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

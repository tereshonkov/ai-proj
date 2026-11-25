import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "ATTIA AI | Lead Intake Assistant for Custom-Order Businesses",
  description:
    "An AI assistant for custom-order businesses that answers customer questions from your documents and turns website chats into qualified leads for your team.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

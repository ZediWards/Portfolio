import type { Metadata } from "next";
import { inter, lora, merriweather } from "@/app/ui/fonts";
import "./globals.css";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.className} min-h-screen bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

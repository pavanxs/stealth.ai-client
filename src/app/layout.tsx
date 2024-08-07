import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ClerkProvider } from "@clerk/nextjs";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stealth AI",
  description: "AI agents to automate calls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="relative">
        <body className={twMerge(dmSans.className, "antialiased")}>
          {" "}
          {/* bg-[#EAEEFE] */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

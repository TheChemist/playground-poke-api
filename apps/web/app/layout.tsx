import "@repo/ui/globals.css";
import { cn } from "@repo/ui/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Providers from "./_providers/providers";
import { SiteFooter } from "./layout/site-footer";
import { SiteHeader } from "./layout/site-header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "PokeApi Playground",
  description: "An App to get familiar with Next.js and the PokeApi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers>
          <SiteHeader />
          <main className="relative container flex flex-row justify-center min-h-[87vh] py-3">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}

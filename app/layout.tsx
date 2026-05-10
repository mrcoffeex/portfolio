import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Using Google Fonts via CSS @import in globals.css to avoid Turbopack build-time fetch

export const metadata: Metadata = {
  title: "Kent Gocotano — Full Stack Developer",
  description:
    "Full Stack Developer specializing in building exceptional digital experiences. Crafting modern web applications with React, Next.js, and Node.js.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Kent Gocotano",
    "Philippines",
    "Web Developer",
  ],
  authors: [{ name: "Kent Gocotano" }],
  creator: "Kent Gocotano",
  openGraph: {
    title: "Kent Gocotano — Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kent Gocotano — Full Stack Developer",
    description:
      "Full Stack Developer specializing in building exceptional digital experiences.",
    creator: "@kentgocotano",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

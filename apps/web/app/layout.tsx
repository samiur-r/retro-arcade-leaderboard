import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Retro Arcade Leaderboard",
    template: "%s | Retro Arcade Leaderboard",
  },
  description:
    "Compete for high scores on classic arcade games. Track your progress and challenge others on the leaderboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}

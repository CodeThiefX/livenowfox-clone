import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "LiveNOW from FOX | Breaking News, Live Events",
  description: "LiveNOW gives you today's breaking news, live events and stories taking place across the nation. Stream 24/7 on your TV, mobile device and computer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}

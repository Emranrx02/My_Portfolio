import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
const ibmmono = IBM_Plex_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Emran Haque | Social Media Expert - Empowering Your Social Media Success Today!",
  description:
    "Discover Emran Haque : A marketing expert driving digital growth through social media, blockchain, and strategic marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmmono.className}  antialiased`}>{children}</body>
    </html>
  );
}

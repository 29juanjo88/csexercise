import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Couchsurfing",
  description: "Find your next galactic stay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f1eeea]`}>
        <div className="max-w-7xl mx-auto bg-white min-h-screen shadow-md">
          {children}
        </div>
      </body>
    </html>
  );
}

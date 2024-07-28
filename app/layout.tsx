import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "ARC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background text-fg`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

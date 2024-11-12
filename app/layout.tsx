import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const InterRegular = localFont({
  src: "./fonts/Inter_Regular.ttf",
  variable: "--font-inter-regular",
  weight: "100 900",
});
const InterMedium = localFont({
  src: "./fonts/Inter_Medium.ttf",
  variable: "--font-inter-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BaironDev",
  description: "Bairon Botero Web Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterRegular.variable} ${InterMedium.variable} antialiased bg-[#0f162b] min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

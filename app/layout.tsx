import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyareth Marko's Portfolio",
  description:
    "Nyareth Marko is a 17 year old software engineer with more than 5years of experience in full stack software development",
  creator: "Nyareth Marko",
  keywords: [
    "Nyareth",
    "Marko",
    "Nyareth Marko",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Full Stack",
    "Developer",
    "Engineer",
    "Software",
    "Nyareth Marko's Portfolio",
    "Nyareth Marko's Website",
    "Nyareth Marko's Blog",
    "Software development in South Sudan",
    "Sudanese programmers",
    "South Sudanese programmers",
    "Sudanese developers",
    "South Sudanese developers",
    "Sudanese software engineers",
    "Best software developers in South Sudan",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

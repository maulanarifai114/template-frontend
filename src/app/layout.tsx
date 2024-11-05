import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RootLayout from "@/components/layout/RootLayout";

const inter = localFont({
  src: "../../public/fonts/inter.woff2",
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "XNGINE",
  description: "From Developer To Developer",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootLayout font={inter.variable} children={children} />;
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = localFont({
  src: "../../public/fonts/inter.woff2",
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Template Frontend",
  description: "From Dev To Wargoo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Layout font={inter.variable} children={children} />;
}

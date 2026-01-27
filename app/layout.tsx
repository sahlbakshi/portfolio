import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahl Bakshi",
  description: "Sahl's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.variable} ${inter.variable} antialiased`}>
        <div className="flex flex-row justify-center items-start">
          <div className="flex flex-col w-full sm:w-auto sm:flex-row m-6 sm:m-16 gap-4 sm:gap-10">
            <Sidebar />
            <div className="w-full sm:w-[510px]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

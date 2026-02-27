import type { Metadata } from "next";
import { Open_Sans, Spectral } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
      <body className={`${spectral.variable} antialiased`}>
        <div className="flex flex-row justify-center items-start">
          <div className="flex flex-col w-full sm:w-auto sm:flex-row m-6 sm:m-16 gap-5 sm:gap-10">
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

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const spectral = localFont({
  src: [
    { path: "../public/Spectral-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/Spectral-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/Spectral-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/Spectral-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/Spectral-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/Spectral-SemiBoldItalic.ttf", weight: "600", style: "italic" },
  ],
  variable: "--font-spectral",
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

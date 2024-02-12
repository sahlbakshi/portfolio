import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sahl Bakshi",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center">
          <div className="sm:w-[32rem] w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

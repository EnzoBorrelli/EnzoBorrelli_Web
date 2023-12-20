import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header/Header";
import Footer from "@/app/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EnzoBorrelli Web | Home",
  description: "Enzo Borrelli Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full h-full bg-slate-500 flex justify-center text-slate-300`}>
        <div className="h-full w-full max-w-4xl bg-slate-700 shadow shadow-white">  
        <Header />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}

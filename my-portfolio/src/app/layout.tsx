import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frankline Kober | Full-Stack Developer",
  description: "Portfolio of Frankline Kober, Full-Stack Developer & AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
          <BackToTop /> 
        </Providers>
      </body>
    </html>
  );
}
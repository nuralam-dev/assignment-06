import type { Metadata } from "next";
import { Suspense } from "react";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FitLogProvider } from "@/context/FitLogContext";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          {children}

          <Footer />
        </FitLogProvider>
      </body>
    </html>
  );
}
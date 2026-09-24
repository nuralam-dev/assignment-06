import type { Metadata } from "next";
import { Suspense } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FitLogProvider } from "@/context/FitLogContext";
import { ToastProvider } from "@/context/ToastContext";
import "./globals.css";

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
          <ToastProvider>
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>

            {children}

            <Footer />
          </ToastProvider>
        </FitLogProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <Header />
        </Suspense>
        <main className={`${inter.className} min-h-[70vh] xl:pt-[80px]`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

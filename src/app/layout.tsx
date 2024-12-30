import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

import {Sidebar} from "@/components/sidebar/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Dashboard",
  description: "Um dashboard feito com Next ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-gray-50 font-sans antialiased", inter.className)}>
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}

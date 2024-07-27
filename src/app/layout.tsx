import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Ayoba Vision",
  description: "Ayoba vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'flex'}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

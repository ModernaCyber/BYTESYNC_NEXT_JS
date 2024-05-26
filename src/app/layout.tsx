import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ByteSync - Empowering Your Business",
  description:
    "At ByteSync, we specialize in delivering comprehensive solutions tailored to meet the unique needs of modern businesses. Our suite of services encompasses Document Management Systems (DMS) which efficiently organizes, stores, and manages your documents in a centralized, digital environment., to forge lasting connections and elevate customer experiences with our Customer Relationship Management (CRM) solution, Enterprise Resource Planning (ERP)  to optimize your business processes for enhanced efficiency and productivity and Enterprise Content Management (ECM)  to organize, access, and secure your business content intelligently.",
  keywords: "ByteSync, ERP, CRM, ECM, DMS, Web Design, App Development",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased relative",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

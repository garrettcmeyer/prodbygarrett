    // Start of Selection
    import type { Metadata } from "next";
    import { Inter } from "next/font/google";
    import "./globals.css";
    
    const inter = Inter({ subsets: ["latin"] });
    
    export const metadata: Metadata = {
      title: "prodbygarrett",
      description: "A portfolio of music and production work by Garrett Meyer",
      icons: "/new-icon.ico", // Changed icon
    };
    
    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      );
    }

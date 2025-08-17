import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "OweNo",
  description: "Expense Sharing & Bill-Splitting Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      <body
        className={`${inter.className}`}
      >
        <ConvexClientProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

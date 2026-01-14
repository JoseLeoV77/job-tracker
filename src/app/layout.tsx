import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | JobTracker 2026",
    default: "JobTracker | Secure Your Future",
  },
  description: "Personal Professional Job Application Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <nav className="border-b bg-white p-4">
          <div className="container mx-auto flex justify-between">
            <h1 className="font-bold">JobTracker.ai</h1>
            <div className="space-x-4">
              <a href="/dashboard" className="hover:underline">Dashboard</a>
              <a href="/jobs" className="hover:underline">Jobs</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
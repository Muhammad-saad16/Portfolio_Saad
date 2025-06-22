import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { BackToTop } from "@/components/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Saad - Passionate Web Developer",
  description:
    "Portfolio of Muhammad Saad, a passionate web developer specializing in modern web technologies and creating beautiful digital experiences.",
  keywords: ["web developer", "react", "next.js", "typescript", "portfolio"],
  authors: [{ name: "Muhammad Saad" }],
  openGraph: {
    title: "Muhammad Saad - Passionate Web Developer",
    description: "Portfolio of Muhammad Saad, a passionate web developer specializing in modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main>
            {children}
            <BackToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

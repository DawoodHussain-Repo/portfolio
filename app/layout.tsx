import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bricolageGrotesque = Bricolage_Grotesque({ 
  subsets: ["latin"],
  variable: "--font-bricolage",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Dawood Hussain - Full-Stack Developer Portfolio",
  description: "Portfolio of Dawood Hussain - Full-Stack Developer specializing in React, Next.js, Node.js, AI/ML, and modern web technologies. Building scalable applications with clean code.",
  keywords: ["Dawood Hussain", "Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "AI/ML", "TensorFlow", "Portfolio"],
  authors: [{ name: "Dawood Hussain" }],
  creator: "Dawood Hussain",
  publisher: "Dawood Hussain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dawood-hussain.vercel.app",
    title: "Dawood Hussain - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js, and AI/ML technologies",
    siteName: "Dawood Hussain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawood Hussain - Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js, and AI/ML technologies",
    creator: "@DHussain16725",
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

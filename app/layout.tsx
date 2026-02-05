import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Ribbons from "@/components/ui/Ribbons"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
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
      {
        url: "/icon.svg",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
          <Ribbons
            baseThickness={30}
            colors={["#6366f1"]}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={false}
          />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

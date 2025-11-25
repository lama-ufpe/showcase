import type React from "react"
import type { Metadata } from "next"
import { Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Using Roboto Slab as per LAMA brand guidelines
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "LAMA - Processo Seletivo 2025",
  description: "Uma liga acadêmica que une arte, tecnologia e sociedade para criar, experimentar e transformar.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoSlab.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

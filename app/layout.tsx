import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import { LoadingScreen } from "@/components/loading-screen"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: {
    default: "Batman - Penetration Tester & Security Researcher",
    template: "%s | Batman - Security Portfolio"
  },
  description:
    "Cybersecurity expert specializing in penetration testing, vulnerability assessment, and security research. View my security projects and get in touch for collaboration.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "security research",
    "vulnerability assessment",
    "ethical hacking",
    "network security",
    "web security",
    "malware analysis",
    "security monitoring",
    "batman",
    "security portfolio"
  ],
  authors: [{ name: "Batman" }],
  creator: "Batman",
  openGraph: {
    title: "Batman - Penetration Tester & Security Researcher",
    description: "Cybersecurity expert specializing in penetration testing, vulnerability assessment, and security research. View my security projects and get in touch for collaboration.",
    url: "https://cn1.github.io",
    siteName: "Batman Security Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Batman - Penetration Tester & Security Researcher Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Batman - Penetration Tester & Security Researcher",
    description: "Cybersecurity expert specializing in penetration testing, vulnerability assessment, and security research.",
    images: ["/og-image.jpg"],
    creator: "@shad0w_byt3"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: "https://cn1.github.io",
  },
  generator: "Next.js 15",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased scanline`}>
        <LoadingScreen />
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}

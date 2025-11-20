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
    default: "Batman - Elite Cybersecurity Expert & Penetration Tester",
    template: "%s | Batman Security Portfolio V2"
  },
  description: "Elite cybersecurity specialist and penetration tester with expertise in network security, vulnerability assessment, and ethical hacking. Explore cutting-edge security projects and professional services.",
  keywords: [
    "cybersecurity expert",
    "penetration testing",
    "ethical hacking",
    "network security",
    "vulnerability assessment",
    "security research",
    "web application security",
    "malware analysis",
    "security consulting",
    "cybersecurity portfolio",
    "professional hacker",
    "security auditor",
    "batman security",
    "elite cybersecurity"
  ],
  authors: [{ name: "Batman", url: "https://cn1.github.io" }],
  creator: "Batman Security",
  publisher: "Batman Security Portfolio",
  metadataBase: new URL("https://cn1.github.io"),
  openGraph: {
    title: "Batman - Elite Cybersecurity Expert & Penetration Tester",
    description: "Elite cybersecurity specialist and penetration tester with expertise in network security, vulnerability assessment, and ethical hacking. Explore cutting-edge security projects.",
    url: "https://cn1.github.io",
    siteName: "Batman Security Portfolio V2",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-batman-security.jpg",
        width: 1200,
        height: 630,
        alt: "Batman - Elite Cybersecurity Expert Portfolio",
        type: "image/jpeg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Batman - Elite Cybersecurity Expert",
    description: "Elite cybersecurity specialist and penetration tester. Explore security projects and professional services.",
    images: ["/og-batman-security.jpg"],
    creator: "@shad0w_byt3",
    site: "@shad0w_byt3"
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
    yandex: 'your-yandex-verification-code'
  },
  alternates: {
    canonical: "https://cn1.github.io",
    languages: {
      'en-US': 'https://cn1.github.io/en',
    }
  },
  generator: "Next.js 15 + Batman Security",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    'theme-color': '#FCD34D',
    'msapplication-TileColor': '#0F172A',
    'application-name': 'Batman Security Portfolio'
  }
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

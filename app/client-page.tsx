"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const Background3D = dynamic(
  () => import("@/components/background-3d").then((mod) => ({ default: mod.Background3D })),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10 bg-batman-dark" />,
  },
)

export default function Home() {
  return (
    <Suspense fallback={<div className="fixed inset-0 -z-10 bg-batman-dark" />}>
      <Background3D />
      <main className="relative min-h-screen bg-batman-dark/50">
        <div className="absolute inset-0 bg-gradient-to-b from-batman-dark/90 via-batman-dark/70 to-batman-gray/80 -z-10" />
        <Header />
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </Suspense>
  )
}

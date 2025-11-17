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
    loading: () => <div className="fixed inset-0 -z-10 bg-background" />,
  },
)

export default function Home() {
  return (
    <Suspense fallback={<div className="fixed inset-0 -z-10 bg-background" />}>
      <Background3D />
      <main className="relative min-h-screen">
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

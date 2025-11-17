"use server"

// Mock data for local development
const mockContent = {
  hero: {
    title: "Batman",
    subtitle: "Penetration Tester & Security Researcher",
    description: "Specializing in cybersecurity, vulnerability assessment, and ethical hacking."
  },
  about: {
    bio: "Experienced cybersecurity professional with expertise in penetration testing and security research."
  },
  skills: ["Penetration Testing", "Vulnerability Assessment", "Ethical Hacking", "Security Research"],
  projects: [
    {
      title: "Security Audit Tool",
      description: "Automated security auditing tool for web applications.",
      image: "/placeholder.jpg",
      link: "#"
    }
  ],
  blog: [
    {
      title: "Getting Started with Cybersecurity",
      slug: "getting-started-with-cybersecurity",
      excerpt: "A beginner's guide to cybersecurity fundamentals.",
      published: true
    }
  ]
}

import { revalidatePath } from "next/cache"

export async function updateWebsiteContent(section: string, content: any) {
  // Mock update - in real app, this would update database
  console.log(`Updating ${section} with:`, content)
  revalidatePath("/")
  revalidatePath("/admin/content")
  return { success: true }
}

export async function getWebsiteContent(section?: string) {
  if (section) {
    return mockContent[section as keyof typeof mockContent] || null
  }
  return mockContent
}

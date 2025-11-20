"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string | null
  tags: string[] | null
  github_url: string | null
  live_url: string | null
  order_index: number
}

// Static project data
const staticProjects: Project[] = [
  {
    id: "1",
    title: "Network Penetration Testing Framework",
    description: "Advanced automated framework for comprehensive network vulnerability assessment and exploitation. Features custom exploit development and automated reconnaissance capabilities.",
    image: "/modern-dashboard-analytics-interface.jpg",
    tags: ["Python", "Nmap", "Metasploit", "Security", "Automation"],
    github_url: "https://github.com/shad0w-byt3/cn1.github.io",
    live_url: "https://github.com/shad0w-byt3/cn1.github.io",
    order_index: 1,
  },
  {
    id: "2",
    title: "Web Application Security Scanner",
    description: "Sophisticated web application vulnerability scanner with custom payloads for comprehensive OWASP Top 10 testing and automated exploit generation.",
    image: "/mobile-app-health-wellness-interface.jpg",
    tags: ["Python", "Burp Suite", "OWASP", "Web Security", "Automation"],
    github_url: "https://github.com/shad0w-byt3/cn1.github.io",
    live_url: "https://github.com/shad0w-byt3/cn1.github.io",
    order_index: 2,
  },
  {
    id: "3",
    title: "Wireless Security Audit Tool",
    description: "Comprehensive wireless network security assessment toolkit featuring advanced WiFi penetration testing capabilities and automated attack vectors.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Bash", "Aircrack-ng", "WiFi", "Security", "Penetration Testing"],
    github_url: "https://github.com/shad0w-byt3/cn1.github.io",
    live_url: "https://github.com/shad0w-byt3/cn1.github.io",
    order_index: 3,
  },
  {
    id: "4",
    title: "Cryptography Toolkit",
    description: "Collection of cryptographic utilities and implementations for secure communication protocols",
    image: "/abstract-creative-workspace-design.jpg",
    tags: ["Python", "Cryptography", "Security"],
    github_url: "https://github.com/shad0w-byt3/cn1.github.io",
    live_url: null,
    order_index: 4,
  },
  {
    id: "5",
    title: "Malware Analysis Environment",
    description: "Isolated environment for analyzing malicious software with automated reporting",
    image: "/brand-identity-design-mockup.jpg",
    tags: ["Python", "Malware", "Analysis", "Security"],
    github_url: "https://github.com/shad0w-byt3/cn1.github.io",
    live_url: null,
    order_index: 5,
  },
  {
    id: "6",
    title: "Security Monitoring Dashboard",
    description: "Real-time security monitoring dashboard with alerts and incident response",
    image: "/modern-dashboard-analytics-interface.jpg",
    tags: ["React", "Node.js", "Security", "Monitoring"],
    github_url: "https://github.com/shad0w-byt3/cn1.github.io",
    live_url: null,
    order_index: 6,
  },
]

export function Projects() {

  // No loading state needed for static data

  return (
    <section id="projects" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm lg:text-base font-mono text-primary glow-text mb-4">{">"} PROJECTS</p>
          <h2 className="text-3xl lg:text-5xl font-mono font-bold text-balance leading-tight">
            Security <span className="text-secondary glow-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 font-mono">
            Open-source tools and frameworks for penetration testing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {staticProjects.map((project: Project, index: number) => (
            <Card
              key={project.id || index}
              className="group overflow-hidden bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/modern-dashboard-analytics-interface.jpg"}
                  alt={`Screenshot of ${project.title} security project`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    const fallbackImages = [
                      '/mobile-app-health-wellness-interface.jpg',
                      '/modern-ecommerce-interface.png',
                      '/abstract-creative-workspace-design.jpg',
                      '/brand-identity-design-mockup.jpg',
                      '/placeholder.jpg'
                    ]

                    const currentSrc = target.src
                    const currentImage = fallbackImages.find(img => currentSrc.includes(img))

                    if (currentImage) {
                      const currentIndex = fallbackImages.indexOf(currentImage)
                      const nextIndex = (currentIndex + 1) % fallbackImages.length
                      target.src = fallbackImages[nextIndex]
                    } else {
                      target.src = '/placeholder.jpg'
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-mono font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string, tagIndex: number) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="font-mono text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Shield, Code, Network, Bug, Lock, Terminal, Cpu, Database } from "lucide-react"
import { Card } from "@/components/ui/card"

const skills = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security assessments of networks, web applications, and infrastructure",
    color: "text-primary",
  },
  {
    icon: Bug,
    title: "Vulnerability Assessment",
    description: "Identifying and analyzing security weaknesses before attackers can exploit them",
    color: "text-secondary",
  },
  {
    icon: Code,
    title: "Exploit Development",
    description: "Creating custom exploits and proof-of-concepts for discovered vulnerabilities",
    color: "text-accent",
  },
  {
    icon: Network,
    title: "Network Security",
    description: "Securing network infrastructure and identifying potential attack vectors",
    color: "text-primary",
  },
  {
    icon: Lock,
    title: "Web Application Security",
    description: "Testing and securing web applications against OWASP Top 10 vulnerabilities",
    color: "text-secondary",
  },
  {
    icon: Terminal,
    title: "Security Research",
    description: "Discovering zero-day vulnerabilities and contributing to security community",
    color: "text-accent",
  },
  {
    icon: Cpu,
    title: "Reverse Engineering",
    description: "Analyzing malware and understanding binary exploitation techniques",
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Database Security",
    description: "Securing databases and preventing SQL injection and data breaches",
    color: "text-secondary",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-4 mb-12 lg:mb-16">
          <p className="text-sm lg:text-base font-mono text-primary glow-text">{">"} EXPERTISE</p>
          <h2 className="text-3xl lg:text-5xl font-mono font-bold text-balance">
            Security <span className="text-primary glow-text">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-mono">
            Specialized skills and tools for comprehensive security testing and research
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="space-y-4">
                  <div className={`${skill.color} group-hover:glow-text transition-all`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-mono font-bold">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Tools Section */}
        <div className="mt-16 lg:mt-24">
          <h3 className="text-2xl lg:text-3xl font-mono font-bold mb-8 text-center">
            <span className="text-secondary glow-text">Tools & Technologies</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Python",
              "Bash",
              "Metasploit",
              "Burp Suite",
              "Nmap",
              "Wireshark",
              "Kali Linux",
              "Parrot OS",
              "SQLMap",
              "John the Ripper",
              "Hashcat",
              "Aircrack-ng",
            ].map((tool, index) => (
              <div
                key={index}
                className="p-4 bg-card/30 backdrop-blur border border-primary/20 rounded text-center font-mono text-sm hover:border-secondary/50 hover:bg-card/50 transition-all cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

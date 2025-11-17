import { Github, Linkedin, Twitter, Mail, Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 lg:py-16 bg-card/30 border-t border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-mono font-bold text-primary glow-text">BATMAN</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-mono">
              Breaking systems to build better security.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono font-semibold text-secondary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#skills"
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                /skills
              </a>
              <a href="#about" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                /about
              </a>
              <a
                href="#projects"
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                /projects
              </a>
              <a href="#blog" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                /blog
              </a>
              <a
                href="#contact"
                className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
              >
                /contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-mono font-semibold text-secondary">Services</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                Penetration Testing
              </a>
              <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                Security Audits
              </a>
              <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                Vulnerability Assessment
              </a>
              <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
                Security Consulting
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-mono font-semibold text-secondary">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/batman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary flex items-center justify-center transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/batman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-secondary/30 hover:border-secondary hover:bg-secondary/10 text-muted-foreground hover:text-secondary flex items-center justify-center transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/batman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-accent/30 hover:border-accent hover:bg-accent/10 text-muted-foreground hover:text-accent flex items-center justify-center transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:batman@protonmail.com"
                className="w-10 h-10 rounded-lg bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary flex items-center justify-center transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">© 2025 Batmanc0d3. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/admin" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              Admin
            </a>
            <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Send, CheckCircle2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact-actions"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataObj = new FormData()
      formDataObj.append("name", formData.name)
      formDataObj.append("email", formData.email)
      formDataObj.append("subject", formData.subject)
      formDataObj.append("message", formData.message)

      await submitContactForm(formDataObj)

      setIsSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm lg:text-base font-mono text-primary glow-text mb-4">{">"} CONTACT</p>
          <h2 className="text-3xl lg:text-5xl font-mono font-bold text-balance leading-tight">
            Let's <span className="text-primary glow-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 font-mono">
            Have a security project or need a penetration test? Get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Card className="p-8 lg:p-10 bg-card/50 backdrop-blur border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-foreground">
                  {">"} Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-mono bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-foreground">
                  {">"} Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-mono bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-mono text-foreground">
                  {">"} Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Penetration Testing Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="font-mono bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-foreground">
                  {">"} Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your security needs..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="font-mono bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-mono bg-primary hover:bg-primary/80 text-background neon-border"
                disabled={isSubmitting || isSuccess}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </>
                )}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground font-mono text-sm">batman@protonmail.com</p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-card/30 backdrop-blur border-secondary/20">
              <h3 className="font-mono font-semibold mb-4 text-secondary">Availability</h3>
              <div className="space-y-2 text-muted-foreground font-mono text-sm">
                <p>{">"} Available for freelance projects</p>
                <p>{">"} Penetration testing engagements</p>
                <p>{">"} Security consulting</p>
                <p>{">"} Bug bounty collaborations</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur border-accent/20">
              <h3 className="font-mono font-semibold mb-4 text-accent">Response Time</h3>
              <div className="space-y-2 text-muted-foreground font-mono text-sm">
                <p>{">"} Typically respond within 24 hours</p>
                <p>{">"} Urgent security matters: Same day</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

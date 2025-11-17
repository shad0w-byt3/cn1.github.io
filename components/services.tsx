import { Card } from "@/components/ui/card"
import { Palette, Code, Lightbulb, Rocket } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Creating cohesive visual identities that resonate with your audience and stand out in the market.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and accessible websites using modern technologies and best practices.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description: "Developing comprehensive digital strategies that align with your business goals and drive growth.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description: "Guiding your product from concept to market with expert planning, design, and execution.",
    color: "bg-primary text-primary-foreground",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-sm lg:text-base font-medium text-primary uppercase tracking-wider mb-4">Services</p>
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-balance leading-tight">
            Comprehensive Solutions for Digital Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300">
                <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

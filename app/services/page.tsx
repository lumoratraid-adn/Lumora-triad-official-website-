"use client"


import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  Layout,
  PenTool,
  Globe,
  Smartphone,
  Database,
  Film,
  GraduationCap,
  User,
} from "lucide-react"

/* Service data separated for clarity & reuse */
const SERVICES = [
  {
    title: "UI / UX Design",
    desc: "User-focused design for clarity, usability, and engagement.",
    icon: Layout,
    features: [
      "UX research & user flows",
      "Wireframes & UI design",
      "Figma prototypes",
      "Design systems & UI animations",
    ],
  },
  {
    title: "Graphic Design & Branding",
    desc: "Strong visual identity and creative brand assets.",
    icon: PenTool,
    features: [
      "Logo & brand identity",
      "Posters & banners",
      "Marketing & social creatives",
    ],
  },
  {
    title: "Website Design & Development",
    desc: "High-performance, scalable websites.",
    icon: Globe,
    features: [
      "Business & personal websites",
      "Responsive & SEO-friendly",
      "Frontend & backend development",
      "UI animation integration",
    ],
  },
  {
    title: "Mobile App Development",
    desc: "Clean, scalable mobile applications.",
    icon: Smartphone,
    features: [
      "Android & iOS apps",
      "App UI / UX implementation",
      "Backend & API integration",
    ],
  },
  {
    title: "Animation & Motion Design",
    desc: "Motion that enhances storytelling and user experience.",
    icon: Film,
    features: [
      "Motion graphics",
      "Promotional animations",
      "Explainer & UI animations",
    ],
  },
  {
    title: "Personal Portfolio & Branding",
    desc: "Professional portfolios to showcase skills and identity.",
    icon: User,
    features: [
      "Personal portfolio websites",
      "Developer & designer portfolios",
      "Personal brand presentation",
    ],
  },
]

export function ServicesDesign() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-black tracking-tight mb-6">
            Lumora Triad Services –{" "}
            <span className="block text-primary">Web Design & Development</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Explore our comprehensive suite of services including custom web development,
            intuitive UI/UX design, and impactful branding. We partner with startups
            and enterprises to deliver scalable, high-performance digital solutions
            that drive measurable results.
          </p>
        </motion.header>

        {/* SERVICES GRID */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ServicesDesign />
      </div>
      <Footer />
    </main>
  )
}

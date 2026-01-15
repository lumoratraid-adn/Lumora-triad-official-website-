"use client"

import type { Metadata } from "next"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Users,
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  Search,
  Palette,
  Code,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/* =========================
   SEO METADATA (REMOVED - Client Component)
========================= */


/* =========================
   DATA
========================= */
const services = [
  { icon: Search, title: "UX Research", desc: "Understanding users, behaviors, and business needs" },
  { icon: Palette, title: "Wireframe → Design → Prototype", desc: "Turning ideas into interactive designs" },
  { icon: Palette, title: "Figma Design", desc: "High-quality UI, layouts, and design systems" },
  { icon: Sparkles, title: "Branding & Logo Design", desc: "Creating strong visual identities" },
  { icon: Code, title: "Website Development", desc: "Responsive, fast, and SEO-friendly websites" },
]

const whyChooseUs = [
  "User-focused design approach",
  "Clean, scalable, and maintainable code",
  "Modern tools & proven technologies",
  "Affordable solutions for startups and students",
  "End-to-end project support",
]

/* =========================
   PAGE
========================= */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>

            {/* SEO OPTIMIZED H1 */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              About Lumora Triad –{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Our Vision & Expertise
              </span>
            </h1>

            {/* SEO PARAGRAPH (CRITICAL) */}
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of developers and designers at Lumora Triad, dedicated to
              crafting exceptional digital experiences through web development, UI/UX design, and
              branding. Our services empower forward-thinking startups and businesses to scale
              effectively and connect with their audience through innovative technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Who We Are</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Passionate Creators & Innovators
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of designers, developers, and problem solvers who believe
              great digital products are built at the intersection of user experience,
              clean code, and thoughtful strategy.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our approach blends research-driven design with reliable development
              practices to ensure every product is scalable, maintainable, and
              future-ready.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lumora Triad started as a shared vision among friends — to build a
              company that values creativity, collaboration, and craftsmanship.
              Today, we continue to grow with the same passion for building meaningful
              digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end digital services designed to help businesses
              establish, scale, and succeed online.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <Target className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To empower startups and businesses by delivering user-centered,
              scalable, and high-quality digital solutions.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To become a trusted digital partner known for design excellence,
              clean engineering, and meaningful innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Why Choose Lumora Triad
          </h2>

          <div className="space-y-4">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50"
              >
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have an idea or a project in mind? Let’s turn it into a powerful digital experience.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-10 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

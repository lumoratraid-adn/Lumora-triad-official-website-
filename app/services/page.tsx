"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import {
  Layout,
  PenTool,
  Globe,
  Smartphone,
  Film,
  User,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const SERVICES = [
  {
    title: "UI / UX Design",
    desc: "We create intuitive, user-centric interfaces that balance aesthetic beauty with functional clarity.",
    icon: Layout,
    image: "/minimalist-designer-hands-working-with-color-swatc.jpg",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    title: "Web Development",
    desc: "Full-stack development using cutting-edge technologies like Next.js, React, and Node.js.",
    icon: Globe,
    image: "/modern-clean-code-on-a-sleek-monitor.jpg",
    features: ["Custom Web Apps", "E-commerce", "Performance Optimization", "CMS Integration"],
  },
  {
    title: "Brand Identity",
    desc: "Crafting memorable brand stories through strategic visual identities and logo design.",
    icon: PenTool,
    image: "/minimalist-designer-working-on-a-modern-workspace-.jpg",
    features: ["Logo Design", "Brand Guidelines", "Marketing Assets", "Corporate Identity"],
  },
  {
    title: "Mobile Solutions",
    desc: "Building seamless cross-platform mobile experiences for iOS and Android.",
    icon: Smartphone,
    image: "/booking-platform-interface.jpg",
    features: ["Native Apps", "Hybrid Solutions", "App UI Design", "API Integration"],
  },
  {
    title: "Motion Design",
    desc: "Bringing brands to life with high-impact animations and motion graphics.",
    icon: Film,
    image: "/premium-minimalist-product-launch-presentation.jpg",
    features: ["UI Animation", "Explainer Videos", "3D Motion", "Micro-interactions"],
  },
  {
    title: "Personal Branding",
    desc: "Defining and elevating individual professional identities in the digital space.",
    icon: User,
    image: "/about_hero.png",
    features: ["Portfolio Sites", "Social Strategy", "Content Curation", "Resume Growth"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] overflow-hidden">

      {/* Services Hero */}
      <section className="relative pt-32 pb-16">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden text-black/[0.03]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff]/20 via-[#fafafa] to-[#f8fafc]" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform rotate-[5deg] opacity-20" />
        </div>

        <div className="container mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              OUR CAPABILITIES
            </span>
            <h1 className="editorial-heading text-black uppercase">
              DIGITAL <span className="text-primary italic">EXCELLENCE</span> <br />
              <span className="text-black/10 stroke-text">DELIVERED.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-black/60 font-medium mt-6 leading-relaxed">
              We provide a comprehensive suite of digital services designed to help
              businesses scale and individuals thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-white border-y border-black/5 rounded-[3rem]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-[2.5rem] bg-[#fafafa] border border-black/5 hover:border-primary/50 transition-all overflow-hidden flex flex-col shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500"
                >
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa]/90 to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-2xl group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-3xl font-black mb-4 tracking-tight text-black group-hover:text-primary transition-colors uppercase">
                      {service.title}
                    </h3>

                    <p className="text-black/60 font-medium mb-8 leading-relaxed flex-1">
                      {service.desc}
                    </p>

                    <ul className="space-y-3 pb-8 border-b border-black/5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-bold text-black/40">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="mt-8 flex items-center justify-between group/link">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-black">Get Inquiry</span>
                      <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover/link:translate-x-2" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-spacing">
        <div className="container mx-auto">
          <div className="p-12 md:p-20 rounded-[3rem] bg-luxury-gradient text-black text-center space-y-8 relative overflow-hidden shadow-2xl">
            {/* Background Texture with Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/heromage1.jpg"
                alt="Project Background"
                className="w-full h-full object-cover opacity-[0.15]"
              />
              <div className="absolute inset-0 dot-pattern opacity-[0.2]" />
            </div>

            <div className="relative z-10">
              <h2 className="editorial-heading text-black text-[clamp(2rem,6vw,4rem)]">
                READY TO BRING YOUR VISION <br /> <span className="italic font-light">TO LIFE?</span>
              </h2>
              <Link href="/contact" className="inline-block mt-8 bg-black text-white px-12 py-5 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl">
                Start a Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

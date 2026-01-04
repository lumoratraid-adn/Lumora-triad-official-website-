"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function WorksPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Dynamic Website",
      desc: "Full-featured online store with secure checkout and admin.",
      image: "/modern-ecommerce-website.png",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      category: "Static Website",
      desc: "Minimalist portfolio showcasing creative work.",
      image: "/minimal-portfolio-website.png",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Restaurant Dashboard",
      category: "Admin Panel",
      desc: "Scalable order management system with real-time updates.",
      image: "/restaurant-admin-dashboard.jpg",
      tech: ["React", "Django", "PostgreSQL"],
    },
    {
      title: "Booking Platform",
      category: "Dynamic Website",
      desc: "Reservation system with integrated payment processing.",
      image: "/booking-platform-interface.jpg",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Corporate Website",
      category: "Static Website",
      desc: "Professional corporate presence with modern design.",
      image: "/corporate-business-website.png",
      tech: ["HTML", "Tailwind CSS"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 sm:pt-40 pb-16 md:pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 md:mb-20"
          >
            <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-serif font-black tracking-tighter mb-8 leading-[1.1] md:leading-none uppercase">
              Selected <br />
              <span className="text-muted-foreground/30 italic">Work.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl font-medium px-4 md:px-0">
              A snapshot of platforms and products developed across different domains and technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer"
              >
                <div className="aspect-square sm:aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-muted border border-border relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[0.21,0.47,0.32,0.98] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#053678]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 z-10">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#6A3A8F] mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-[#053678] dark:text-foreground group-hover:text-[#6A3A8F] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 font-medium">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-[10px] sm:text-xs font-bold uppercase px-3 py-1 bg-[#F4F7FB] dark:bg-muted text-[#053678] dark:text-foreground rounded-full border border-[#C7D3E5] dark:border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

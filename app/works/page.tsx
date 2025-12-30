"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function WorksPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Dynamic Website",
      desc: "A full-featured online store with cart, checkout, and admin panel.",
      image: "/modern-ecommerce-website.png",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      category: "Static Website",
      desc: "A clean, minimal portfolio showcasing creative work.",
      image: "/minimal-portfolio-website.png",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Restaurant Dashboard",
      category: "Admin Panel",
      desc: "Complete order management system with real-time updates.",
      image: "/restaurant-admin-dashboard.jpg",
      tech: ["React", "Django", "PostgreSQL"],
    },
    {
      title: "Booking Platform",
      category: "Dynamic Website",
      desc: "Online reservation system with payment integration.",
      image: "/booking-platform-interface.jpg",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Corporate Website",
      category: "Static Website",
      desc: "Professional corporate site with modern design.",
      image: "/corporate-business-website.png",
      tech: ["HTML", "Tailwind CSS"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter mb-8 leading-none uppercase">
              OUR <br />
              <span className="text-muted-foreground/30 italic">WORKS.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our portfolio of successful projects across various industries. From static websites to complex
              dynamic systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-muted border border-border relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs font-bold uppercase px-3 py-1 bg-muted rounded-full border border-border"
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

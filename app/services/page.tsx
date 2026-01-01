"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Code, Database, Layout } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "Robust digital foundations for your business.",
      icon: Layout,
      features: ["Static and dynamic websites", "Admin dashboards", "Custom web applications"],
    },
    {
      title: "AI & Automation",
      desc: "Smart systems improving efficiency and insight.",
      icon: Database,
      features: ["AI-integrated workflows", "Data-driven systems", "Intelligent process automation"],
    },
    {
      title: "Product Engineering",
      desc: "Scalable architecture for long-term success.",
      icon: Code,
      features: ["System architecture design", "Performance optimization", "Deployment and scaling support"],
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
            className="mb-20 text-center"
          >
            <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter mb-8 leading-none uppercase">
              Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end development services designed for scalability and long-term use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Not sure which service you need?</h2>
            <p className="text-muted-foreground mb-8">
              We offer free consultation to help you choose the right solution.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/20"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

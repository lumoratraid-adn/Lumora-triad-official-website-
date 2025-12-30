"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Code, Palette, Database, Layout, ShoppingCart, Shield } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Static Websites",
      price: "₹8,000 - ₹15,000",
      desc: "Fast, secure, and clean sites perfect for portfolios, landing pages, and business presentations.",
      icon: Layout,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Design"],
    },
    {
      title: "Dynamic Websites",
      price: "₹20,000 - ₹50,000",
      desc: "Full-featured web applications with complex business logic and database integration.",
      icon: Code,
      features: ["User Authentication", "Database Integration", "Admin Panel", "API Integration"],
    },
    {
      title: "E-Commerce Solutions",
      price: "₹50,000+",
      desc: "Complete online store setup with payment gateway, cart, and order management.",
      icon: ShoppingCart,
      features: ["Payment Gateway", "Product Management", "Order Tracking", "Inventory System"],
    },
    {
      title: "UI/UX Design",
      price: "Custom Pricing",
      desc: "Professional Figma designs that bring your vision to life with intuitive user experiences.",
      icon: Palette,
      features: ["Wireframing", "Prototyping", "User Research", "Design System"],
    },
    {
      title: "Admin Panels",
      price: "₹50,000+",
      desc: "Custom admin dashboards for managing your business operations efficiently.",
      icon: Database,
      features: ["Analytics Dashboard", "User Management", "Content Management", "Reports"],
    },
    {
      title: "Maintenance & Support",
      price: "Custom Pricing",
      desc: "Ongoing support and maintenance to keep your website running smoothly.",
      icon: Shield,
      features: ["Bug Fixes", "Updates", "Security", "Performance Optimization"],
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
              OUR <br />
              <span className="text-muted-foreground/30 italic">SERVICES.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive web development services tailored to your business needs. From simple static sites
              to complex dynamic systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-8 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary font-bold mb-4 text-sm">{service.price}</p>
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

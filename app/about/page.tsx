"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl md:text-8xl font-serif font-black tracking-tighter mb-8 leading-[0.9] uppercase"
            >
              Our Approach <br />
              and <span className="text-muted-foreground/30 italic">Philosophy.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-xl md:text-2xl font-medium leading-relaxed text-muted-foreground max-w-xl"
            >
              Lumora Traid is a forward-thinking technology studio. We specialize in mobile & web development, UI/UX design, and cloud deployment, delivering end-to-end digital solutions.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 uppercase tracking-tighter">What We Focus On</h2>
              <ul className="space-y-6">
                {[
                  "Modern web platforms",
                  "AI-assisted systems",
                  "Backend-driven architectures",
                  "Cloud-ready deployment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 uppercase tracking-tighter">How We Work</h2>
              <ul className="space-y-6">
                {[
                  "Requirement-driven development",
                  "Clean system architecture",
                  "Iterative delivery",
                  "Production stability and performance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold mb-12 uppercase tracking-tighter"
          >
            Our Tech Stack
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-primary">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React</li>
                <li>• HTML, CSS, JavaScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-primary">Backend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Django</li>
                <li>• Node.js</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-primary">Database</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
                <li>• MySQL</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}

"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-serif font-black tracking-tighter mb-12 leading-none uppercase"
          >
            WE ARE <br />
            <span className="text-muted-foreground/30 italic">LUMORA TRIAD.</span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                A freelance web development team focused on static websites, dynamic websites, and admin panels with
                full UI/UX, frontend, backend, and database solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We provide free consultation, Figma UI design, and basic branding support. Founded on the principles of
                Technology, Design, and Delivery, we bridge the gap between complex engineering and human-centered
                design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 gap-8 border-t border-border pt-8"
            >
              {[
                { label: "Team Size", value: "3 Co-Founders + 4 Developers" },
                { label: "Target Projects", value: "8-15 in 3 Months" },
                { label: "Location", value: "Global / Remote" },
                { label: "Focus", value: "Web Development" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                  className="space-y-2"
                >
                  <span className="text-[10px] font-black tracking-widest text-muted-foreground/50 uppercase">
                    {item.label}
                  </span>
                  <p className="font-bold">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold mb-12 uppercase tracking-tighter"
          >
            The Co-Founders
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              { name: "Akash", role: "Developer + Co-Founder" },
              { name: "Dani", role: "Developer + Co-Founder" },
              { name: "Chotta", role: "Developer + Client Relations Manager" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group cursor-default"
              >
                <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500 mb-4" />
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold mb-12 uppercase tracking-tighter mt-16"
          >
            Core Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Rahul", role: "Main Developer + Product Manager" },
              { name: "Aswin", role: "Main Developer" },
              { name: "Nishath", role: "UI/UX Designer (Figma)" },
              { name: "Renna", role: "UI/UX Designer (Figma)" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-2xl border border-border"
              >
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold mb-12 uppercase tracking-tighter"
          >
            Our Tech Stack
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
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

      <Footer />
    </main>
  )
}

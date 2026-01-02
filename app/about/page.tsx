"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { CheckCircle2, Target, Eye } from "lucide-react"

export default function AboutPage() {
  const categories = [
    {
      title: "Design & Creative",
      desc: "Transforming ideas into visually stunning and user-friendly realities.",
      items: [
        { title: "UX Research", desc: "Understanding users, behaviors, and business needs" },
        { title: "UI / UX Design", desc: "Turning ideas into interactive, high-fidelity prototypes" },
        { title: "Figma Design", desc: "Professional layouts, assets, and design systems" },
        { title: "Branding & Logo", desc: "Creating strong, memorable visual identities" },
        { title: "Visual Storytelling", desc: "Engaging poster and animation designs" },
      ],
    },
    {
      title: "Development & Tech",
      desc: "Building the robust technical foundation for your digital products.",
      items: [
        { title: "Website Creation", desc: "Responsive, fast, and SEO-friendly web platforms" },
        { title: "App Development", desc: "Custom Android, iOS, and cross-platform applications" },
        { title: "Database Management", desc: "Secure, optimized, and scalable data handling" },
        { title: "API Integration", desc: "Seamless system communication and architecture" },
      ],
    },
    {
      title: "Individual & Academic",
      desc: "Empowering developers and students with professional support.",
      items: [
        { title: "Academic Projects", desc: "Real-world project support for school & college" },
        { title: "Personal Portfolios", desc: "Professional showcases for individual creators" },
        { title: "Technical Documentation", desc: "Clear, concise project reports and guides" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-32 sm:pt-48 pb-16 md:pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-50" />
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-serif font-black tracking-tighter mb-8 leading-[1.1] md:leading-[1] uppercase"
          >
            Designing Experiences. <br />
            <span className="text-primary italic font-medium">Developing Digital Solutions.</span>
          </motion.h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-6 md:mb-8 uppercase tracking-tighter">Who We Are</h2>
            <div className="space-y-6 text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium px-4">
              <p>
                We are a team of passionate software engineers, designers, and digital creators dedicated
                to building intuitive designs and reliable software solutions.
              </p>
              <p>
                Our work blends UX research, visual design, and robust development to ensure every
                product is not only beautiful but also functional and scalable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO (CATEGORIZED) */}
      <section className="py-16 md:py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-tighter">What We Do</h2>
            <p className="text-sm sm:text-lg text-muted-foreground uppercase tracking-widest font-bold">Our Core Specializations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30 group"
              >
                <h3 className="text-xl sm:text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">{category.title}</h3>
                <p className="text-muted-foreground mb-8 sm:mb-10 text-[13px] sm:text-sm leading-relaxed font-medium">{category.desc}</p>

                <div className="space-y-4 sm:space-y-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-[11px] sm:text-xs text-muted-foreground font-medium leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-border bg-card shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 sm:mb-8">
                <Target className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 uppercase tracking-tighter">Our Mission</h2>
              <p className="text-[15px] sm:text-lg text-muted-foreground leading-relaxed font-medium">
                To empower businesses and students by delivering innovative, user-centered, and
                technically strong digital solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-border bg-card shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 sm:mb-8">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6 uppercase tracking-tighter">Our Vision</h2>
              <p className="text-[15px] sm:text-lg text-muted-foreground leading-relaxed font-medium">
                To become a trusted digital partner known for quality design, clean code, and meaningful innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}

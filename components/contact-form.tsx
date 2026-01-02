"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react"

export function ContactForm() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight mb-6 text-[#053678] dark:text-white uppercase transition-all">
            Let’s <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#053678] to-[#6A3A8F] dark:from-primary dark:to-primary italic font-medium">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
            Have an idea, project, or requirement?
            Whether you’re a business, startup, or student —
            we’re here to help you move forward with clarity.
          </p>
        </motion.div>

        {/* YOU CAN CONTACT US FOR (TOP) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-10 text-center text-[#6A3A8F] dark:text-primary uppercase tracking-tighter">
            You can contact us for
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ServicePanel
              title="Design"
              items={[
                "UI / UX Design",
                "UX Research & User Flows",
                "Wireframes & Prototypes",
                "Design Systems & Animations",
              ]}
              color="bg-[#053678]"
            />
            <ServicePanel
              title="Branding"
              items={[
                "Logo & Brand Identity",
                "Posters & Creatives",
                "Social Media Designs",
                "Motion & Visual Design",
              ]}
              color="bg-[#6A3A8F]"
            />
            <ServicePanel
              title="Development"
              items={[
                "Website Development",
                "Mobile Applications",
                "Backend & Databases",
                "API & System Architecture",
              ]}
              color="bg-[#F4F7FB]"
            />
            <ServicePanel
              title="Students"
              items={[
                "Academic Projects",
                "Mini & Major Projects",
                "Final-Year Documentation",
                "Personal Portfolios",
              ]}
              color="bg-white"
              border="border-[#C7D3E5]"
            />
          </div>
        </motion.div>

        {/* CONTACT METHODS — HORIZONTAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
        >
          <ContactCard
            icon={<Mail className="w-5 h-5" />}
            title="Email"
            value="hello@lumoratriad.com"
          />
          <ContactCard
            icon={<Phone className="w-5 h-5" />}
            title="Call"
            value="+91 99478 84418"
          />
          <ContactCard
            icon={<MessageCircle className="w-5 h-5" />}
            title="WhatsApp"
            value="Start a chat"
          />
          <ContactCard
            icon={<Linkedin className="w-5 h-5" />}
            title="LinkedIn"
            value="Connect"
          />
        </motion.div>

        {/* SUPPORTING TEXT BELOW ICONS */}
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
            Reach out to us for collaborations, consultations, or project
            discussions. We respond quickly and guide you clearly through
            the next steps — no confusion, no pressure.
          </p>
        </div>

      </div>
    </section>
  )
}

/* UI COMPONENTS */

function ContactCard({ icon, title, value }: any) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border bg-card hover:border-[#6A3A8F] dark:hover:border-primary transition-all group shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-[#053678]/10 dark:bg-primary/10 flex items-center justify-center text-[#053678] dark:text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#6A3A8F] dark:text-primary font-black">
          {title}
        </p>
        <p className="text-sm font-bold text-[#053678] dark:text-foreground">
          {value}
        </p>
      </div>
    </div>
  )
}

function ServicePanel({ title, items, color, border }: any) {
  const isDark = color === "bg-[#053678]" || color === "bg-[#6A3A8F]";

  return (
    <div className={`${color} dark:bg-card ${border || "border-border/30"} border rounded-[2.5rem] p-8 hover:shadow-xl transition-all h-full`}>
      <h3 className={`text-xl font-black mb-6 uppercase tracking-tight ${isDark ? 'text-white' : 'text-[#053678]'} dark:text-foreground`}>
        {title}
      </h3>
      <ul className={`space-y-4 ${isDark ? 'text-white/80' : 'text-[#053678]/70'} dark:text-muted-foreground`}>
        {items.map((item: string) => (
          <li key={item} className="flex gap-3 text-sm font-bold leading-tight">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-[#6A3A8F]'} dark:bg-primary shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

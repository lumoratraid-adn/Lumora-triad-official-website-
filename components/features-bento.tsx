"use client"

import { Compass, Cpu, Layers, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturesBento() {
  const features = [
    {
      title: "Smart Feed",
      desc: "Homepage curates your interests.",
      icon: Compass,
      bgColor: "bg-[#E6F4FF] dark:bg-[#1a3a52]",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Engagement Tools",
      desc: "Social tools foster real connections.",
      icon: Cpu,
      bgColor: "bg-[#FFF9E6] dark:bg-[#4a3f1a]",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      title: "Modular & Flexible",
      desc: "Pluggable interface integrations.",
      icon: Layers,
      bgColor: "bg-[#F5F1FF] dark:bg-[#2a1f3a]",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Compliance Ready",
      desc: "Moderation, copyright, user rules.",
      icon: ShieldCheck,
      bgColor: "bg-[#FFF1F1] dark:bg-[#4a1f1f]",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight text-foreground">
              Empowering <br /> creators to <br /> <span className="text-primary italic">thrive.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              Join teams and creators who trust us to simplify content sharing, real-time feedback, and creative
              collaboration.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`p-8 rounded-[2rem] ${f.bgColor} flex flex-col gap-8 h-full border border-border/20`}
              >
                <div className="w-12 h-12 rounded-2xl bg-background/80 dark:bg-foreground/10 flex items-center justify-center shadow-sm backdrop-blur-sm">
                  <f.icon className={`w-6 h-6 ${f.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{f.title}</h3>
                  <p className="text-sm text-foreground/70 dark:text-foreground/80 font-medium leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

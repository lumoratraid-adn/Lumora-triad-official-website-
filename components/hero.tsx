"use client"

import Link from "next/link"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-4xl sm:text-6xl md:text-[7rem] mb-10 md:mb-14 leading-[0.9] tracking-tighter font-serif font-black text-balance"
          >
            Ideas into Products. Design into Systems. <span className="text-primary italic font-medium">Built to Grow.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-tight mb-12 md:mb-16 font-medium tracking-tight text-pretty"
          >
            We help turn ideas into well-crafted websites and digital systems — focused on clarity, performance, and long-term growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-10"
          >
            <Link href="/contact" className="group relative bg-foreground text-background px-12 py-6 rounded-full text-[13px] font-black hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-2xl uppercase tracking-[0.2em] overflow-hidden flex items-center justify-center">
              <span className="relative z-10">Let’s build your idea</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.21,0.47,0.32,0.98]" />
            </Link>
            <Link href="/works" className="group relative bg-muted/30 border border-border backdrop-blur-sm text-foreground px-12 py-6 rounded-full text-[13px] font-black hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 uppercase tracking-[0.2em] flex items-center justify-center hover:bg-muted/50">
              <span>View our work</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

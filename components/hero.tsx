"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { NeuralNetwork } from "./neural-network"

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

      {/* Neural Network Background */}
      <NeuralNetwork />

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">



          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-[6.5rem] mb-10 leading-[1.1] tracking-tighter font-serif font-black text-balance px-4"
          >
            Designing Experiences.<br />
            <span className="text-secondary-foreground dark:text-primary italic font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#053678] to-[#6A3A8F] dark:from-white dark:to-white py-2 block sm:inline">
              Developing Digital Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-14 font-medium tracking-tight text-pretty"
          >
            We help businesses, startups, and students transform ideas into powerful digital products
            through user-centric design and scalable technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-10"
          >
            <Link href="/services">
              <button className="group relative bg-[#053678] text-white border-2 border-[#053678] dark:bg-primary dark:text-primary-foreground dark:border-transparent px-12 py-5 rounded-full text-[13px] font-black hover:bg-[#6A3A8F] hover:border-[#6A3A8F] dark:hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-[#053678]/10 uppercase tracking-[0.2em] overflow-hidden w-full sm:w-auto">
                <span className="relative z-10">Get Started</span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="group relative bg-[#F4F7FB] text-[#053678] border-2 border-[#C7D3E5] dark:bg-background dark:text-foreground dark:border-border px-12 py-5 rounded-full text-[13px] font-black hover:bg-white hover:text-[#6A3A8F] hover:border-[#6A3A8F] active:scale-95 transition-all duration-300 uppercase tracking-[0.2em] w-full sm:w-auto">
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

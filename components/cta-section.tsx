"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
    return (
        <section className="py-24 bg-[#F4F7FB] dark:bg-[#050505] overflow-hidden relative border-t border-border/10">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#053678]/10 dark:bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6A3A8F]/10 dark:bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-5xl md:text-7xl font-serif font-black text-[#053678] dark:text-white mb-12 tracking-tighter uppercase"
                >
                    Let’s build something <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#053678] to-[#6A3A8F] dark:from-primary dark:to-primary italic font-medium">amazing</span> together.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <Link href="/contact">
                        <button className="bg-[#053678] dark:bg-primary text-white dark:text-primary-foreground px-12 py-5 rounded-full text-[13px] font-black hover:bg-[#6A3A8F] dark:hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl uppercase tracking-[0.2em]">
                            Get Started
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="bg-white/50 dark:bg-white/5 border-2 border-[#C7D3E5] dark:border-white/10 text-[#053678] dark:text-white px-12 py-5 rounded-full text-[13px] font-black hover:bg-white dark:hover:bg-white/10 active:scale-95 transition-all duration-300 uppercase tracking-[0.2em] backdrop-blur-sm">
                            Contact Us
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

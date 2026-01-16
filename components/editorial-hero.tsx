"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Play } from "lucide-react"
import Link from "next/link"

export function MainHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fafafa] border-t border-black/5">
            {/* Cinematic Background Elements (Continued) */}
            <div className="absolute inset-0 z-0 overflow-hidden text-black/5">
                <div className="absolute inset-0 bg-[#fafafa]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[60%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <div className="max-w-5xl mx-auto space-y-12">

                    {/* Text Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Premium Digital Solutions
                            </span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.85] tracking-tighter text-black uppercase">
                                BUILDING<br />
                                <span className="text-primary italic">DIGITAL</span><br />
                                <span className="text-black/10 stroke-text">REALITIES.</span>
                            </h1>
                            <p className="max-w-2xl text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
                                Lumora Triad merges technical precision with aesthetic excellence to
                                <span className="text-black font-bold"> empower businesses, startups, and innovators</span> with cutting-edge digital products.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex flex-wrap items-center gap-8 pt-4"
                        >
                            <Link
                                href="/contact"
                                className="group px-12 py-6 bg-primary text-black rounded-full font-black text-lg flex items-center gap-3 transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,95,0,0.2)]"
                            >
                                Start Your Journey
                                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Section Divider Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent shadow-[0_-1px_20px_rgba(0,0,0,0.02)]" />

            {/* Subtle Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://grain-y.com/assets/images/grain.png')] opacity-[0.015] pointer-events-none" />
        </section>
    )
}

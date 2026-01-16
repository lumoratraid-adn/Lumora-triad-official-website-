"use client"

import { WorldGlobe } from "./world-globe"
import { motion } from "framer-motion"

export function GlobeHero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fafafa]">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden text-black/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff]/30 via-[#fafafa] to-[#f8fafc]" />

                {/* Subtle Architectural Lines */}
                <div className="absolute top-0 right-0 w-[120%] h-full opacity-[0.2] pointer-events-none">
                    <div className="absolute top-[20%] left-0 w-full h-[1px] bg-current transform rotate-[-5deg]" />
                    <div className="absolute top-[45%] left-0 w-full h-[1px] bg-current transform rotate-[-3deg]" />
                    <div className="absolute top-[75%] left-0 w-full h-[1px] bg-current transform rotate-[-8deg]" />
                </div>

                {/* Light Glows */}
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-primary/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full max-w-4xl aspect-square lg:aspect-video flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                    <WorldGlobe />
                </motion.div>

                {/* Scroll Interaction Hint */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 flex flex-col items-center gap-3 text-black/40"
                >
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll to Discover</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-[1px] h-10 bg-gradient-to-b from-black/40 to-transparent"
                    />
                </motion.div>
            </div>

            {/* Subtle Grain Overlay */}
            <div className="absolute inset-0 bg-[url('https://grain-y.com/assets/images/grain.png')] opacity-[0.015] pointer-events-none" />
        </section>
    )
}

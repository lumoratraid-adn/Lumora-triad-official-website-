"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { ArrowUpRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="section-spacing bg-[#fafafa]">
            <div className="container mx-auto">
                <div className="relative p-10 sm:p-14 md:p-28 rounded-[3rem] sm:rounded-[4rem] bg-white text-black overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-black/5">
                    {/* Background Image with Shade Effect */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/architectural-minimalist-office-with-warm-lighting.jpg"
                            alt="Project Background"
                            className="w-full h-full object-cover opacity-[0.05] sm:opacity-[0.03] scale-110 object-center"
                        />
                        <div className="absolute inset-0 dot-pattern opacity-[0.1]" />
                    </div>

                    <div className="relative z-10 text-center space-y-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm mx-auto">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            GET STARTED
                        </span>

                        <h2 className="editorial-heading text-black uppercase leading-[0.95]">
                            READY TO BRING YOUR<br />
                            <span className="text-primary italic">VISION</span> <span className="text-black/10 stroke-text font-black">TO LIFE?</span>
                        </h2>

                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
                            We merge technical precision with aesthetic excellence to deliver
                            world-class digital products that scale with your vision.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 pt-6">
                            <Link
                                href="/contact"
                                className="px-12 py-6 bg-black text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-black hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-2xl"
                            >
                                Start a Project
                                <ArrowUpRight className="w-6 h-6" />
                            </Link>
                            <Link
                                href="/services"
                                className="px-12 py-6 bg-transparent border border-black/10 text-black rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] -mr-48 -mt-48 rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] -ml-48 -mb-48 rounded-full" />
                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Header } from "./header"
import Link from "next/link"

export function SimpleHero() {
    return (
        <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
            {/* Header */}
            <Header />

            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center space-y-6"
                    >


                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                        >
                            Designing Experiences.{" "}
                            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                Developing Digital Solutions.
                            </span>
                        </motion.h1>

                        {/* Sub-headline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto"
                        >
                            We help businesses, startups, and students transform ideas into
                            powerful digital products through user-centric design and scalable
                            technology.
                        </motion.p>

                        {/* Intro Paragraph */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-base sm:text-lg text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto"
                        >
                            At Lumora Traid, we combine creativity, research, and technology to
                            build meaningful digital experiences. From UX research and UI design
                            to full-stack development and database management, we deliver
                            end-to-end solutions tailored to your goals.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="group relative overflow-hidden px-8 py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Button>
                            </Link>

                            <Link href="/about">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group px-8 py-6 text-base sm:text-lg font-semibold border-2 transition-all duration-300 hover:bg-primary/5 hover:border-primary/50 hover:scale-105"
                                >
                                    Learn More About Us
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function IntroSection() {
    const benefits = [
        "User-focused design approach",
        "Clean, scalable code",
        "Modern tools & technologies",
        "Affordable solutions for students & startups",
        "End-to-end project support",
    ]

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black mb-6 md:mb-8 leading-tight text-[#053678] dark:text-foreground">
                            Crafting Digital <br /> Excellence with <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#053678] to-[#6A3A8F] dark:from-primary dark:to-primary italic font-medium">Purpose.</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-[#053678]/80 dark:text-muted-foreground leading-relaxed mb-8 font-medium">
                            At Lumora Triad, we combine creativity, research, and technology to build meaningful
                            digital experiences. From UX research and UI design to full-stack development and database
                            management, we deliver end-to-end solutions tailored to your goals.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-[#F4F7FB] dark:bg-muted/30 border border-[#C7D3E5] dark:border-border rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-12 shadow-sm"
                    >
                        <h3 className="text-2xl font-black mb-10 uppercase tracking-widest text-[#6A3A8F] dark:text-primary">Why Choose Us</h3>
                        <div className="grid gap-6">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-primary/10 flex items-center justify-center text-[#053678] dark:text-primary shrink-0 shadow-sm border border-[#C7D3E5]/50 dark:border-transparent">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-bold text-[#053678] dark:text-foreground">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

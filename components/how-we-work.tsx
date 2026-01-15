"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Hammer, Rocket, Sparkles } from "lucide-react"

const processSteps = [
    {
        number: "01",
        title: "Connect",
        description:
            "We understand your goals, business needs, target audience, and technical requirements through clear discussions.",
        icon: MessageCircle,
    },
    {
        number: "02",
        title: "Build",
        description:
            "Our team designs, develops, and tests scalable digital solutions using modern tools, clean code, and best practices.",
        icon: Hammer,
    },
    {
        number: "03",
        title: "Deliver",
        description:
            "We launch, support, and continuously improve your product — ensuring performance, reliability, and long-term value.",
        icon: Rocket,
    },
]

export function HowWeWork() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Our Process</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        How We Work
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        A simple, transparent workflow designed for results
                    </p>
                </motion.div>

                {/* Process Timeline */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Connection Line - Desktop */}
                        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                        {/* Steps */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                            {processSteps.map((step, index) => {
                                const Icon = step.icon
                                return (
                                    <motion.div
                                        key={step.number}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={
                                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                                        }
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.2,
                                            ease: [0.25, 0.4, 0.25, 1],
                                        }}
                                        className="relative"
                                    >
                                        {/* Connection Dot - Desktop */}
                                        <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                                        {/* Card */}
                                        <motion.div
                                            whileHover={{ y: -8 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                                        >
                                            {/* Number Badge */}
                                            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-primary/10 border border-primary/20">
                                                <span className="text-2xl font-bold text-primary">
                                                    {step.number}
                                                </span>
                                            </div>

                                            {/* Icon */}
                                            <div className="mb-6">
                                                <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Decorative gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        </motion.div>

                                        {/* Mobile Connection Line */}
                                        {index < processSteps.length - 1 && (
                                            <div className="lg:hidden flex justify-center my-6">
                                                <div className="w-0.5 h-12 bg-gradient-to-b from-border to-transparent" />
                                            </div>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Bottom CTA or Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-muted-foreground italic">
                            Every project is unique, and we adapt our process to fit your specific needs
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

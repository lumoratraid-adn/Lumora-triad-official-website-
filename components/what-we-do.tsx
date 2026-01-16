"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
    Code2,
    Palette,
    Megaphone,
    Layers,
    Smartphone,
    Cloud,
    Layout,
    Sparkles,
    TrendingUp,
    Settings,
} from "lucide-react"

const services = [
    {
        category: "Web & Software Development",
        icon: Code2,
        items: [
            "Business Websites",
            "Full-Stack Web Applications",
            "Cloud-Based Software Systems",
            "Admin Dashboards & APIs",
        ],
        gradient: "from-blue-500/20 to-cyan-500/20",
        iconColor: "text-blue-500",
    },
    {
        category: "UI / UX & Product Design",
        icon: Palette,
        items: [
            "Website & App UI Design",
            "UX Flows & Wireframes",
            "Design Systems",
            "Figma → Code",
        ],
        gradient: "from-purple-500/20 to-pink-500/20",
        iconColor: "text-purple-500",
    },
    {
        category: "Graphic & Brand Design",
        icon: Layers,
        items: [
            "Branding & Identity",
            "Logo & Marketing Design",
            "Social Media Creatives",
            "Posters & Visual Assets",
        ],
        gradient: "from-orange-500/20 to-red-500/20",
        iconColor: "text-orange-500",
    },
    {
        category: "Digital Growth & Support",
        icon: TrendingUp,
        items: [
            "SEO-Ready Setup",
            "Landing Page Optimization",
            "Analytics Integration",
            "Maintenance & Support",
        ],
        gradient: "from-green-500/20 to-emerald-500/20",
        iconColor: "text-green-500",
    },
]

export function WhatWeDo() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1] as any,
            },
        },
    }

    return (
        <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Our Expertise</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        What We Do – Technology & Design Services
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.category}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="group relative"
                            >
                                <div className="relative h-full p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
                                    {/* Gradient background on hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10 space-y-6">
                                        {/* Icon */}
                                        <div className="inline-flex p-3 rounded-xl bg-background/80 border border-border/50 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className={`w-6 h-6 ${service.iconColor}`} />
                                        </div>

                                        {/* Category */}
                                        <h3 className="text-2xl font-bold tracking-tight">
                                            {service.category}
                                        </h3>

                                        {/* Items List */}
                                        <ul className="space-y-3">
                                            {service.items.map((item, itemIndex) => (
                                                <motion.li
                                                    key={item}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={
                                                        isInView
                                                            ? { opacity: 1, x: 0 }
                                                            : { opacity: 0, x: -10 }
                                                    }
                                                    transition={{
                                                        delay: 0.3 + index * 0.1 + itemIndex * 0.05,
                                                        duration: 0.4,
                                                    }}
                                                    className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                                                >
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                    <span className="text-sm sm:text-base leading-relaxed">
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

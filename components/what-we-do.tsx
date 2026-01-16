"use client"

import { motion } from "framer-motion"
import {
    Code2,
    Palette,
    Layers,
    TrendingUp,
} from "lucide-react"

const services = [
    {
        category: "Web & Software Development",
        icon: Code2,
        image: "/modern-clean-code-on-a-sleek-monitor.jpg",
        items: [
            "Business Websites",
            "Full-Stack Web Applications",
            "Cloud-Based Software Systems",
            "Admin Dashboards & APIs",
        ],
    },
    {
        category: "UI / UX & Product Design",
        icon: Palette,
        image: "/minimalist-designer-hands-working-with-color-swatc.jpg",
        items: [
            "Website & App UI Design",
            "UX Flows & Wireframes",
            "Design Systems",
            "Figma → Code",
        ],
    },
    {
        category: "Graphic & Brand Design",
        icon: Layers,
        image: "/minimalist-designer-working-on-a-modern-workspace-.jpg",
        items: [
            "Branding & Identity",
            "Logo & Marketing Design",
            "Social Media Creatives",
            "Posters & Visual Assets",
        ],
    },
    {
        category: "Digital Growth & Support",
        icon: TrendingUp,
        image: "/premium-abstract-geometric-network-dots-pattern.jpg",
        items: [
            "SEO-Ready Setup",
            "Landing Page Optimization",
            "Analytics Integration",
            "Maintenance & Support",
        ],
    },
]

export function WhatWeDo() {
    return (
        <section className="section-spacing relative bg-[#fafafa] border-t border-black/5">
            <div className="container mx-auto">

                {/* Section Header */}
                <div className="mb-20 space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        OUR CAPABILITIES
                    </span>
                    <h2 className="editorial-heading text-black uppercase">
                        CRAFTING <span className="text-primary italic">SOLUTIONS</span><br />
                        <span className="text-black/10 stroke-text">FOR MODERN BRANDS.</span>
                    </h2>
                    <p className="max-w-2xl text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
                        We merge technical precision with aesthetic excellence to deliver
                        world-class digital products that scale with your vision.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-[2.5rem] bg-white border border-black/5 hover:border-black/20 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
                            >
                                {/* Background Image Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={service.image}
                                        alt={service.category}
                                        className="w-full h-full object-cover opacity-[0.05] group-hover:opacity-10 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
                                </div>

                                <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                                        <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 tracking-tight text-black group-hover:text-primary transition-colors uppercase leading-tight">
                                        {service.category}
                                    </h3>

                                    <ul className="space-y-4 flex-1 pt-6 border-t border-black/5">
                                        {service.items.slice(0, 4).map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-xs text-black/40 font-black uppercase tracking-[0.15em]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-black opacity-40 group-hover:opacity-100 transition-all flex items-center gap-2">
                                        Learn More <span className="text-primary">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

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
    return (
        <section className="section-spacing relative bg-[#fafafa] overflow-hidden border-t border-black/5">
            <div className="container mx-auto">

                {/* Section Header */}
                <div className="mb-20 text-center space-y-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm mx-auto">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        OUR PROCESS
                    </span>
                    <h2 className="editorial-heading text-black uppercase">
                        FROM <span className="text-primary italic">VISION</span><br />
                        <span className="text-black/10 stroke-text">TO REALITY.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
                        Our streamlined three-step phase ensures your project moves from
                        concept to deployment with precision and speed.
                    </p>
                </div>

                {/* Process Timeline */}
                <div className="relative">
                    {/* Desktop Timeline Line */}
                    <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent z-0" />

                    {/* Mobile Timeline Line */}
                    <div className="lg:hidden absolute left-10 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/5 to-transparent z-0 ml-[0.5px] max-md:block hidden" />

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative z-10 space-y-8 group text-center lg:text-left"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto lg:mx-0 rounded-[2rem] bg-black flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-xl">
                                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-black transition-transform group-hover:scale-110" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-black/40 text-[10px] font-black tracking-[0.2em] uppercase border border-black/5">
                                            Phase {step.number}
                                        </div>
                                        <h3 className="text-3xl font-black tracking-tight text-black group-hover:text-primary transition-colors uppercase">
                                            {step.title}
                                        </h3>
                                        <p className="text-black/60 leading-relaxed font-medium text-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

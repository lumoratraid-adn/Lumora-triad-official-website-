"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code2, Mail, Lock, CheckCircle2, Terminal, ArrowRight } from "lucide-react"

const steps = [
    {
        icon: Mail,
        title: "Brevo API Integration",
        description: "Developed a secure backend route using Brevo (formerly Sendinblue) SMTP API v3.",
        details: [
            "Configured HTTPS POST requests to Brevo's relay.",
            "Implemented JSON-LD payload for transactional emails.",
            "Set up verified sender authentication for lumoratraid@gmail.com."
        ]
    },
    {
        icon: Lock,
        title: "Security & Protection",
        description: "Implemented industry-standard security practices for API handling.",
        details: [
            "Moved API keys to Environment Variables (.env.local).",
            "Bypassed GitHub Push Protection by removing hardcoded secrets.",
            "Added server-side validation to prevent mailbox spam."
        ]
    },
    {
        icon: Terminal,
        title: "Automation Flow",
        description: "Dual-stream automation for seamless client communication.",
        details: [
            "Stream 1: Instant admin notification with full user details.",
            "Stream 2: Professional HTML auto-reply to the client.",
            "Added logic to handle multi-part form data (Name, Email, Service, etc.)."
        ]
    }
]

export default function DevGuidePage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <Code2 className="w-16 h-16 text-primary mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Developer Implementation Guide</h1>
                        <p className="text-xl text-muted-foreground">Technical Breakdown: How we built the Lumora Triad Email System.</p>
                    </motion.div>
                </div>
            </section>

            {/* Steps List */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl space-y-24">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row gap-12 items-center"
                            >
                                <div className={`flex-1 space-y-6 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold">{step.title}</h2>
                                    <p className="text-lg text-muted-foreground">{step.description}</p>
                                    <ul className="space-y-3">
                                        {step.details.map((detail, dIndex) => (
                                            <li key={dIndex} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-1 w-full bg-card/50 border border-border/50 rounded-3xl p-8 aspect-video flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Terminal className="w-24 h-24 text-primary/20" />
                                    <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground opacity-50">step_0{index + 1}.js</div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* Summary Note */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
                <div className="container mx-auto max-w-3xl text-center space-y-8">
                    <h2 className="text-3xl font-bold">Ready for Production</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The integration is successfully deployed to the Main branch. It utilizes Next.js App Router API handlers
                        and React state management for a modern, fast, and secure user experience.
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">Next.js 14+</div>
                        <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">Brevo SMTP</div>
                        <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">TypeScript</div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

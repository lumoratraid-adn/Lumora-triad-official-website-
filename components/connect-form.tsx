"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Sparkles, Send, CheckCircle2, Loader2 } from "lucide-react"

export function ConnectForm() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error("Failed to send message")

            setIsSuccess(true)
            setFormData({ name: "", email: "", company: "", service: "", message: "" })
        } catch (error) {
            console.error("Error:", error)
            alert("Something went wrong. Please try again or contact us directly.")
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setIsSuccess(false), 5000)
        }
    }

    return (
        <section
            ref={ref}
            className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/50"
        >
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
            </div>

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
                        <span className="text-sm font-medium text-primary">Get In Touch</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Let's Build Something Together
                    </h2>

                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have an idea, project, or requirement? We'd love to hear from you.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative p-8 sm:p-12 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm shadow-2xl">
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl pointer-events-none" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-semibold text-foreground"
                                >
                                    Name *
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your full name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-semibold text-foreground"
                                >
                                    Email *
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors"
                                />
                            </div>

                            {/* Company Field (Optional) */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="company"
                                    className="text-sm font-semibold text-foreground"
                                >
                                    Company{" "}
                                    <span className="text-muted-foreground font-normal">
                                        (optional)
                                    </span>
                                </label>
                                <Input
                                    id="company"
                                    type="text"
                                    placeholder="Your company name"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors"
                                />
                            </div>

                            {/* Service Interested In */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="service"
                                    className="text-sm font-semibold text-foreground"
                                >
                                    Service Interested In *
                                </label>
                                <Select
                                    required
                                    value={formData.service}
                                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                                >
                                    <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50 focus:border-primary/50">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="web-development">
                                            Web & Software Development
                                        </SelectItem>
                                        <SelectItem value="ui-ux-design">
                                            UI/UX & Product Design
                                        </SelectItem>
                                        <SelectItem value="branding">
                                            Graphic & Brand Design
                                        </SelectItem>
                                        <SelectItem value="digital-growth">
                                            Digital Growth & Support
                                        </SelectItem>
                                        <SelectItem value="consultation">
                                            Consultation
                                        </SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-semibold text-foreground"
                                >
                                    Message *
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project or requirements..."
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="rounded-xl border-border/50 bg-background/50 focus:border-primary/50 transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting || isSuccess}
                                className="w-full h-12 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5 mr-2" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 ml-2" />
                                    </>
                                )}
                            </Button>

                            {/* Privacy Note */}
                            <p className="text-xs text-center text-muted-foreground">
                                We respect your privacy. Your information will never be shared with
                                third parties.
                            </p>
                        </form>
                    </div>
                </motion.div>

                {/* Additional Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        Prefer to reach out directly?
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <a
                            href="mailto:hello@lumoratriad.com"
                            className="text-primary hover:underline transition-colors"
                        >
                            hello@lumoratriad.com
                        </a>
                        <span className="text-border">•</span>
                        <a
                            href="tel:+919947884418"
                            className="text-primary hover:underline transition-colors"
                        >
                            +91 99478 84418
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

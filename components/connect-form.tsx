"use client"

import { motion, useInView } from "framer-motion"
import * as React from "react"
import { useRef, useState, useEffect } from "react"
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
    const [mounted, setMounted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    })

    if (!mounted) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
    }

    return (
        <section className="section-spacing relative bg-[#fafafa] overflow-hidden border-t border-black/5">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">

                    {/* Section Header */}
                    <div className="mb-20 text-center space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm mx-auto">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            GET IN TOUCH
                        </span>
                        <h2 className="editorial-heading text-black uppercase">
                            LET&apos;S <span className="text-primary italic">BUILD</span><br />
                            <span className="text-black/10 stroke-text">YOUR NEXT BIG THING.</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
                            Have an idea or a project in mind? We respond to all
                            inquiries within 24 hours.
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="p-8 md:p-16 rounded-[3rem] bg-white border border-black/5 shadow-[0_50px_100px_rgba(0,0,0,0.05)] relative overflow-hidden">
                        <div className="relative z-10">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-black/40 uppercase tracking-[0.2em] ml-1">Your Name</label>
                                        <Input
                                            placeholder="John Doe"
                                            className="h-16 bg-[#fafafa] rounded-2xl border-black/5 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black font-bold"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-black/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="h-16 bg-[#fafafa] rounded-2xl border-black/5 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black font-bold"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-black/40 uppercase tracking-[0.2em] ml-1">Interested In</label>
                                    <Select>
                                        <SelectTrigger className="h-16 bg-[#fafafa] rounded-2xl border-black/5 focus:border-primary font-bold text-black uppercase tracking-widest">
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white border-black/5">
                                            <SelectItem value="web">Web Development</SelectItem>
                                            <SelectItem value="design">UI/UX Design</SelectItem>
                                            <SelectItem value="brand">Branding</SelectItem>
                                            <SelectItem value="mobile">Mobile App</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-black/40 uppercase tracking-[0.2em] ml-1">Message</label>
                                    <Textarea
                                        placeholder="Briefly describe your project..."
                                        className="min-h-[150px] bg-[#fafafa] rounded-2xl border-black/5 focus:border-primary focus:ring-1 focus:ring-primary transition-all text-black font-bold pt-4"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className="w-full h-18 py-6 rounded-2xl bg-black text-white font-black text-lg uppercase tracking-[0.2em] shadow-2xl transition-all hover:bg-primary hover:text-black hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : isSuccess ? <CheckCircle2 /> : (
                                        <>
                                            Send Project Brief
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>

                                {isSuccess && (
                                    <p className="text-center text-primary font-black uppercase tracking-widest animate-bounce">
                                        Message received! We&apos;ll be in touch soon.
                                    </p>
                                )}
                            </form>
                        </div>

                        {/* Background Aura */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full" />
                    </div>

                    {/* Direct Links */}
                    <div className="mt-16 flex flex-wrap justify-center gap-12">
                        <a href="mailto:hello@lumoratriad.in" className="text-xs font-black uppercase tracking-[0.2em] text-black/40 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            HELLO@LUMORATRIAD.IN
                        </a>
                        <a href="tel:+919947884418" className="text-xs font-black uppercase tracking-[0.2em] text-black/40 hover:text-primary transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            +91 99478 84418
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
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
import {
  Mail,
  Phone,
  Globe,
  Send,
  Loader2,
  CheckCircle2,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@lumoratriad.in",
    href: "mailto:hello@lumoratriad.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99478 84418",
    href: "tel:+919947884418",
  },
  {
    icon: Globe,
    label: "Support",
    value: "support@lumoratriad.in",
    href: "mailto:support@lumoratriad.in",
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  return (
    <main className="min-h-screen bg-[#fafafa] overflow-hidden">

      {/* Contact Hero */}
      <section className="relative pt-32 pb-16">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden text-black/[0.03]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff]/20 via-[#fafafa] to-[#f8fafc]" />
          <div className="absolute top-0 right-0 w-[120%] h-full opacity-[0.2] pointer-events-none">
            <div className="absolute top-[20%] left-0 w-full h-[1px] bg-current transform rotate-[-5deg]" />
            <div className="absolute top-[45%] left-0 w-full h-[1px] bg-current transform rotate-[-3deg]" />
          </div>
        </div>

        <div className="container mx-auto text-center space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              INITIATE PROJECT
            </span>
            <h1 className="editorial-heading text-black uppercase">
              READY TO <span className="text-primary italic">INITIATE?</span> <br />
              <span className="text-black/10 stroke-text">LET&apos;S TALK.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-black/60 font-medium mt-6 leading-relaxed">
              Fill out the form below or reach out via our direct channels.
              We typically respond within 12-24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-spacing bg-white border-y border-black/5 rounded-[3rem]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">

            {/* Left Column: Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-black tracking-tight text-black uppercase">CONTACT INFO</h3>
                <p className="text-black/40 font-bold uppercase text-xs tracking-widest">Prefer direct communication? Use our details below.</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-[#fafafa] border border-black/5 hover:border-black/20 hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center group-hover:bg-primary transition-colors">
                      <info.icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-black/20 uppercase tracking-widest">{info.label}</p>
                      <p className="text-lg font-black text-black group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8 border-t border-black/10 space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-black/40">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-black/40 hover:bg-black hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#fafafa] border border-black/5 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold opacity-60">Full Name</label>
                      <Input placeholder="John Doe" className="h-14 bg-white/5 rounded-xl border-white/10" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold opacity-60">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="h-14 bg-white/5 rounded-xl border-white/10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold opacity-60">Interested In</label>
                    <Select>
                      <SelectTrigger className="h-14 bg-white/5 rounded-xl border-white/10">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="brand">Branding</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold opacity-60">Your Message</label>
                    <Textarea placeholder="Tell us about your project..." className="min-h-[150px] bg-white/5 rounded-xl border-white/10" required />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || isSuccess}
                    className="w-full h-16 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : isSuccess ? <CheckCircle2 /> : "Send Project Inquiry"}
                  </Button>

                  {isSuccess && (
                    <p className="text-center text-primary font-bold animate-bounce mt-4">Message sent successfully! We&apos;ll be in touch soon.</p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

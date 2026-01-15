"use client"


import { motion } from "framer-motion"
import { Header } from "@/components/header"
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
  Sparkles,
  CheckCircle2,
  Loader2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@lumoratriad.com",
    href: "mailto:hello@lumoratriad.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99478 84418",
    href: "tel:+919947884418",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.lumoratriad.com",
    href: "https://www.lumoratriad.com",
  },
]

const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/",
    color: "hover:text-[#1877F2]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/lumo.ratraid/?hl=en",
    color: "hover:text-[#E4405F]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lumoratriad/",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Twitter,
    label: "X (Twitter)",
    href: "https://x.com/LumoraTraid",
    color: "hover:text-[#000000]",
  },
]

const services = [
  "Website Development",
  "UI/UX Design & Figma Projects",
  "Branding, Logo & Posters",
  "Animations & Creative Design",
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                From Idea to Impact
              </span>
            </div>

            {/* SEO-OPTIMIZED H1 */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              Contact Lumora Triad –{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Start Your Digital Project
              </span>
            </h1>

            {/* SEO PARAGRAPH (IMPORTANT) */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to elevate your business? Contact Lumora Triad today for inquiries regarding
              professional web development, UI/UX design, and strategic branding. We are here to
              help startups, businesses, and individuals bring their digital vision to life.
            </p>

            {/* EXISTING UX TEXT (KEEP) */}
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have an idea, project, or requirement? We'd love to hear from you.
            </p>

            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Whether you're a business owner, startup founder, student, or
              individual, we're here to help you turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all text-center"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-sm text-muted-foreground mb-1">
                    {info.label}
                  </div>
                  <div className="font-semibold">{info.value}</div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="h-12 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold">
                    Service Required *
                  </label>
                  <Select required>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-dev">
                        Website Development
                      </SelectItem>
                      <SelectItem value="ui-ux-figma">
                        UI/UX Design & Figma Projects
                      </SelectItem>
                      <SelectItem value="branding">
                        Branding, Logo & Posters
                      </SelectItem>
                      <SelectItem value="animations">
                        Animations & Creative Design
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Project Description *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSuccess}
                  className="w-full h-12 rounded-xl text-base font-semibold"
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
              </form>
            </motion.div>

            {/* What You Can Contact Us For */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                What You Can Contact Us For
              </h2>
              <div className="space-y-4 mb-12">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all ${social.color}`}
                        title={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Taglines */}
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h3 className="text-lg font-bold mb-4">Our Promise</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>✨ Design. Develop. Deliver.</p>
                  <p>✨ Where Creativity Meets Code</p>
                  <p>✨ Building Digital Experiences That Matter</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

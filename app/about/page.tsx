"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const whyChooseUs = [
  "User-focused design approach",
  "Clean, scalable, and maintainable code",
  "Modern tools & proven technologies",
  "Affordable solutions for startups",
  "End-to-end project support",
  "Seamless Communication",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] overflow-hidden">

      {/* Hero Section with Sharp Background */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden text-black/[0.03]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff]/20 via-[#fafafa] to-[#f8fafc]" />
          <div className="absolute top-0 right-0 w-[120%] h-full opacity-[0.2] pointer-events-none">
            <div className="absolute top-[20%] left-0 w-full h-[1px] bg-current transform rotate-[-5deg]" />
            <div className="absolute top-[45%] left-0 w-full h-[1px] bg-current transform rotate-[-3deg]" />
          </div>
        </div>

        <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              THE AGENCY STORY
            </span>
            <h1 className="editorial-heading text-black uppercase">
              WE ARE <span className="text-primary italic">LUMORA.</span><br />
              <span className="text-black/10 stroke-text">YOUR DIGITAL PARTNERS.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-black/60 font-medium mt-6 leading-relaxed">
              Lumora Triad is a premium digital agency specialized in building high-performance
              web and mobile experiences for businesses that refuse to settle for average.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values / Manifesto */}
      <section className="section-spacing bg-white border-y border-black/5 rounded-[3rem] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="editorial-heading text-4xl lg:text-5xl text-black">OUR MANIFESTO.</h2>
              <div className="space-y-6 text-xl text-black/60 font-medium leading-relaxed">
                <p>
                  At Lumora Triad, we believe that software should be an extension of human intent.
                  Every pixel and line of code we write is a conscious decision towards excellence.
                </p>
                <p>
                  Our mission is to bridge the gap between complex technology and intuitive design,
                  making powerful digital tools accessible to brands of all sizes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/10">
                <div className="space-y-1">
                  <span className="text-3xl font-black text-primary">0%</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-black/40">Quality Compromise</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-black text-primary">100%</span>
                  <p className="text-xs uppercase tracking-widest font-bold text-black/40">Client Obsession</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-[2.5rem] overflow-hidden border border-black/10 shadow-2xl relative"
              >
                <img
                  src="/about_hero.png"
                  alt="Lumora Process"
                  className="w-full aspect-[4/5] object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa]/60 to-transparent" />
              </motion.div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 p-6 rounded-3xl bg-black text-white font-black text-xl shadow-2xl rotate-3">
                BUILT_BY_VISIONARIES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2 rounded-[2.5rem] overflow-hidden h-64 sm:h-80 md:h-96 relative group">
              <img
                src="/heromage1.jpg"
                alt="Strategy"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 p-10 flex flex-col justify-end">
                <h4 className="text-3xl font-black text-white">STRATEGIC_PLANNING</h4>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden h-64 sm:h-80 md:h-96 relative group">
              <img
                src="/modern-clean-code-on-a-sleek-monitor.jpg"
                alt="Dev"
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/20 p-10 flex flex-col justify-end">
                <h4 className="text-2xl font-black text-white uppercase">TECH_STACK</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-spacing bg-white border-y border-black/5 rounded-[3rem]">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="editorial-heading text-[clamp(2rem,6vw,4.5rem)] text-black">
              WHY WE <span className="text-primary italic">STAND OUT</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-8 rounded-3xl bg-[#fafafa] border border-black/5 hover:border-primary/40 transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <p className="text-lg font-bold tracking-tight text-black/80 group-hover:text-black transition-colors">
                    {reason}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container mx-auto">
          <div className="p-12 md:p-20 rounded-[3.5rem] bg-luxury-gradient text-black flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            {/* Background Texture with Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/architectural-minimalist-office-with-warm-lighting.jpg"
                alt="Project Background"
                className="w-full h-full object-cover opacity-[0.15]"
              />
              <div className="absolute inset-0 dot-pattern opacity-[0.2]" />
            </div>

            <div className="relative z-10 text-center md:text-left space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                READY TO <span className="italic">EVOLVE?</span>
              </h2>
              <p className="text-lg font-bold opacity-80">Let&apos;s build something extraordinary together.</p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 px-12 py-6 bg-black text-white rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
            >
              Start Your Journey
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

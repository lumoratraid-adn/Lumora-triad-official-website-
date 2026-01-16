"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Testimonials() {
  return (
    <section className="section-spacing bg-[#fafafa] overflow-hidden border-t border-black/5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase border border-black/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              OUR IMPACT
            </span>
            <h2 className="editorial-heading text-black uppercase">
              STORIES OF <span className="text-primary italic">GROWTH</span><br />
              <span className="text-black/10 stroke-text">AND SUCCESS.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-lg">
              We don&apos;t just deliver projects; we build long-term partnerships
              that drive real-world value and digital transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-10 md:p-14 rounded-[3rem] bg-white border border-black/5 shadow-[0_50px_100px_rgba(0,0,0,0.05)] relative z-10">
              <p className="text-xl md:text-2xl font-black leading-[1.4] mb-10 italic text-black/80">
                &quot;Lumora Triad has been instrumental in our digital evolution.
                Their attention to detail and technical prowess transformed our
                brand into a modern digital powerhouse.&quot;
              </p>
              <div className="flex items-center gap-5 pt-10 border-t border-black/5">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center font-black text-white shadow-lg">
                  LT
                </div>
                <div>
                  <h4 className="font-black text-xl tracking-tight text-black uppercase">Lumora Core</h4>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Digital Strategy</p>
                </div>
              </div>
            </div>
            {/* Background Aura */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

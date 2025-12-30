"use client"

import { motion } from "framer-motion"

export function ContactForm() {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70 text-white p-12 md:p-20 rounded-[2rem] relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight text-white font-bold">
              Have a project in mind? <br />
              <span className="italic opacity-90 font-serif font-normal">Let's build it the right way.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <p className="text-xl opacity-95 mb-8 text-white font-medium">
                  Reach out to start a conversation about your digital future.
                </p>
                <div className="flex flex-col gap-4 text-lg text-white font-medium">
                  <a
                    href="mailto:hello@lumoratriad.com"
                    className="hover:underline hover:opacity-80 transition-opacity"
                  >
                    hello@lumoratriad.com
                  </a>
                  <a
                    href="https://wa.me/994788418"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <span>Message on WhatsApp</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82l.303.18c1.397.83 3.013 1.269 4.667 1.27h.001c5.398 0 9.791-4.393 9.793-9.791 0-2.615-1.02-5.073-2.871-6.925-1.851-1.852-4.31-2.871-6.925-2.871-5.398 0-9.791 4.393-9.793 9.791 0 2.126.559 4.198 1.616 5.961l.177.297-1.066 3.89 3.996-1.048z" />
                    </svg>
                  </a>
                </div>
              </div>

              <form className="grid gap-6">
                <div className="grid gap-2">
                  <label className="text-sm uppercase tracking-widest text-white/90 font-bold">Full Name</label>
                  <input
                    type="text"
                    className="bg-white/10 backdrop-blur-sm border-b-2 border-white/40 pb-2 focus:border-white outline-none transition-colors text-white placeholder:text-white/60 font-medium px-2"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm uppercase tracking-widest text-white/90 font-bold">Email Address</label>
                  <input
                    type="email"
                    className="bg-white/10 backdrop-blur-sm border-b-2 border-white/40 pb-2 focus:border-white outline-none transition-colors text-white placeholder:text-white/60 font-medium px-2"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm uppercase tracking-widest text-white/90 font-bold">Your Message</label>
                  <textarea
                    rows={3}
                    className="bg-white/10 backdrop-blur-sm border-b-2 border-white/40 pb-2 focus:border-white outline-none transition-colors resize-none text-white placeholder:text-white/60 font-medium px-2"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button className="bg-white text-primary px-8 py-4 rounded-full font-bold mt-4 hover:scale-105 active:scale-95 transition-transform shadow-lg">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  )
}

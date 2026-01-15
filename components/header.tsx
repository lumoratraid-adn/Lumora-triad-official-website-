"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for background
      setScrolled(currentScrollY > 50)

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false)
      } else {
        // Scrolling up
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="container mx-auto relative h-16 sm:h-20 flex items-center justify-between">

        {/* Logo Section */}
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group relative z-50">
          <div className="flex flex-col items-center">
            <img src="/logo.svg" alt="Lumora" className="h-10 sm:h-12 w-auto brightness-110 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
          </div>
        </Link>

        {/* Desktop Nav Pill (Centered) */}
        <nav className="hidden lg:flex items-center gap-1 px-8 py-3 rounded-full border border-white/10 border-t-white/30 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] absolute left-1/2 -translate-x-1/2 overflow-hidden">
          {/* Silver Sheen Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="flex items-center gap-6 relative z-10 text-[10px] font-bold tracking-[0.2em]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative group text-white/70 hover:text-white transition-colors duration-300 uppercase py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-[10px] uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Connect Us
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white ml-2 relative z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-background/98 backdrop-blur-xl pt-24 px-6"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="text-2xl font-bold tracking-widest uppercase hover:text-primary transition-colors border-b border-border/20 pb-4"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase tracking-widest shadow-lg mt-4"
              >
                Connect Us →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

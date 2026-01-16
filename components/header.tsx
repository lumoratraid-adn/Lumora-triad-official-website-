"use client"

import Link from "next/link"
import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Scrolled state for styling
      setScrolled(currentScrollY > 20)

      // Visibility logic - hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (!mobileMenuOpen) setVisible(false) // Scrolling down
      } else {
        setVisible(true) // Scrolling up
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, mobileMenuOpen])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 px-6 py-4 ${scrolled ? "pt-2" : "pt-4"
        } ${visible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0"}`}
    >
      <div
        className={`container mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl px-6 relative z-[110] ${scrolled || mobileMenuOpen
          ? "h-14 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl"
          : "h-16 bg-transparent"
          }`}
      >
        {/* Logo Section */}
        <Link
          href="/"
          onClick={() => {
            if (typeof window !== 'undefined' && window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            setMobileMenuOpen(false);
          }}
          className="group relative z-[120] transition-all duration-300"
        >
          <img
            src="/logo.svg"
            alt="Lumora Triad"
            className={`h-6 sm:h-8 w-auto transition-all duration-300 group-hover:scale-105 ${!scrolled && !mobileMenuOpen ? "invert contrast-125" : "brightness-110"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-bold transition-all duration-300 tracking-tight ${scrolled || mobileMenuOpen ? "text-white/70 hover:text-primary" : "text-black/60 hover:text-black"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className={`hidden sm:flex items-center justify-center px-6 py-2 rounded-lg font-bold text-sm tracking-tight transition-all active:scale-95 shadow-lg ${scrolled || mobileMenuOpen
              ? "bg-primary text-black hover:brightness-110 shadow-primary/20"
              : "bg-black text-white hover:bg-primary hover:text-black shadow-black/10"}`}
          >
            Get Started
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-all z-[120] lg:hidden ${scrolled || mobileMenuOpen ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="lg:hidden fixed inset-0 bg-black z-[100] flex flex-col pt-32 px-6 h-[100dvh] overflow-y-auto"
          >
            {/* Background Texture for Mobile Menu */}
            <div className="absolute inset-0 dot-pattern opacity-[0.1] -z-10" />

            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl xs:text-5xl font-black tracking-tighter text-white hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-12 flex flex-col gap-8"
            >
              <div className="h-px bg-white/10 w-full" />

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-white/40">Quick Contact</p>
                <a href="mailto:hello@lumoratriad.in" className="text-xl font-bold text-white hover:text-primary transition-colors">
                  hello@lumoratriad.in
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-5 bg-primary text-black rounded-2xl font-black text-xl shadow-[0_10px_30px_rgba(255,95,0,0.2)] flex items-center justify-center gap-3 active:scale-95 transition-all"
              >
                START A PROJECT
                <ArrowUpRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

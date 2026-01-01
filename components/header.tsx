"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
          ? "bg-background/70 backdrop-blur-xl border-border/40 py-2 shadow-md supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent border-transparent py-4"
          }`}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              setMobileMenuOpen(false)
            }}
            className="group relative z-50 flex items-center gap-2"
          >
            <Image
              src="/lumora.svg"
              alt="Lumora Triad"
              width={160}
              height={50}
              className="h-16 w-auto object-contain transition-transform duration-500 scale-125 origin-left ml-2 group-hover:scale-[1.35]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 bg-background/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/5 shadow-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${isActive
                    ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-4 relative z-50">
            <ThemeToggle />

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://wa.me/994788418"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 ring-2 ring-transparent hover:ring-green-400/30"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" strokeWidth={0} />
              </Link>

              <Link
                href="/contact"
                className="group relative px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-bold text-sm tracking-wide overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Connect Us
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </div>

            {/* Hamburger Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-[100] w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl flex flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-bold font-serif tracking-tight">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <nav className="flex flex-col gap-6 items-start">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-4xl font-bold tracking-tight hover:text-primary transition-colors ${pathname === item.href ? "text-primary" : "text-foreground"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-col gap-4 mt-auto mb-12 w-full">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center h-14 bg-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-transform"
                >
                  Get a Quote
                </Link>

                <Link
                  href="https://wa.me/994788418"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 h-14 rounded-2xl bg-[#25D366] text-white shadow-xl shadow-green-500/20 active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-6 h-6 fill-current" strokeWidth={0} />
                  <span>WhatsApp Us</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Show for 4 seconds to allow the letter-by-letter animation to complete comfortably
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    // The text to animate
    const text = "Lumora Triad"
    const letters = Array.from(text)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Slow delay between each letter
                delayChildren: 0.5 // Wait a bit before starting
            }
        }
    }

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" } as any
        }
    }

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
                >
                    <div className="w-full h-full relative flex items-center justify-center p-4">

                        {/* Letter-by-Letter Animated Text */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.5 } }}
                            className="relative z-10 text-center select-none flex flex-wrap justify-center gap-[0.2vw]"
                        >
                            {letters.map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    className="text-[12vw] font-serif font-black tracking-tighter leading-none bg-gradient-to-r from-[#053678] via-[#053678]/90 to-[#053678] dark:from-gray-300 dark:via-gray-100 dark:to-gray-400 bg-clip-text text-transparent uppercase shadow-xl drop-shadow-2xl will-change-transform"
                                >
                                    {/* Preserve space width */}
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* Subtle light effect behind */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            <div className="w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px]" />
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

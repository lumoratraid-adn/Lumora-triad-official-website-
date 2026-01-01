"use client"

import { motion, useInView, useAnimation, Variant } from "framer-motion"
import { useEffect, useRef } from "react"

interface RevealProps {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    delay?: number
    duration?: number
    y?: number
    className?: string
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0.1,
    duration = 0.6,
    y = 20,
    className = ""
}: RevealProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: y },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }} // Apple-style smooth easing
            >
                {children}
            </motion.div>
        </div>
    )
}

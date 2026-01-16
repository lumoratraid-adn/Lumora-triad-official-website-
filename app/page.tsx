import { GlobeHero } from "@/components/globe-hero"
import { MainHero } from "@/components/editorial-hero"
import { WhatWeDo } from "@/components/what-we-do"
import { ShowcaseSection } from "@/components/showcase-section"
import { HowWeWork } from "@/components/how-we-work"
import { Testimonials } from "@/components/testimonials"
import { ConnectForm } from "@/components/connect-form"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lumora Triad | Web Development, UI/UX Design & Branding",
  description:
    "Lumora Triad provides professional web development, UI/UX design, and branding services for startups and businesses. Transform your ideas into digital reality.",
}

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      <GlobeHero />
      <MainHero />

      {/* Main Content Sections */}
      <div className="relative bg-[#fafafa]">
        {/* What We Do - Services Overview */}
        <WhatWeDo />

        {/* Showcase - Mockups */}
        <ShowcaseSection />

        {/* How We Work - Process */}
        <HowWeWork />

        {/* Testimonials - Social Proof */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />

        {/* Contact Form */}
        <ConnectForm />
      </div>

      <Footer />
    </main>
  )
}

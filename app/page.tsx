import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { IntroSection } from "@/components/intro-section"
import { FeaturesBento } from "@/components/features-bento"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroSection />
      <FeaturesBento />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

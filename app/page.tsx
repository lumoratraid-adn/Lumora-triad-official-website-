import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturesBento } from "@/components/features-bento"
import { Services } from "@/components/services" // Updated services component
import { Process } from "@/components/process" // Updated process component
import { Testimonials } from "@/components/testimonials" // Added testimonials component
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturesBento />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

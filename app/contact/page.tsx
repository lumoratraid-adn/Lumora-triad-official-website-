import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-40 pb-20"> {/* Increased spacing for fixed header */}
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}

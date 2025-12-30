import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter mb-8 leading-none uppercase text-foreground">
            LET'S <span className="text-primary italic">CONNECT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to transform your digital presence? Get in touch and let's create something extraordinary together.
          </p>
        </div>
      </section>
      <ContactForm />
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-sm font-black tracking-widest uppercase text-muted-foreground mb-4">Location</h3>
              <p className="text-lg font-bold text-foreground">Global Remote</p>
              <p className="text-sm text-muted-foreground mt-2">Available Worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-black tracking-widest uppercase text-muted-foreground mb-4">Email</h3>
              <a href="mailto:hello@lumoratriad.com" className="text-lg font-bold text-primary hover:underline">
                hello@lumoratriad.com
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-black tracking-widest uppercase text-muted-foreground mb-4">Phone</h3>
              <a
                href="tel:+919947884188"
                className="text-lg font-bold text-foreground hover:text-primary transition-colors"
              >
                +91 994788418
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

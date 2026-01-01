export function Pillars() {
  const pillars = [
    {
      id: "01",
      title: "Production-ready development",
      description: "Code that works reliably in the real world.",
    },
    {
      id: "02",
      title: "Clean and maintainable architecture",
      description: "Structures designed for ease of use and updates.",
    },
    {
      id: "03",
      title: "Performance-first approach",
      description: "Optimized for speed and efficiency from day one.",
    },
    {
      id: "04",
      title: "Scalable and future-proof systems",
      description: "Built to grow with your business needs.",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group p-8 bg-background rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-4xl font-serif text-primary/10 block mb-6 group-hover:text-primary/20 transition-colors">
                {pillar.id}
              </span>
              <h3 className="text-2xl font-serif mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

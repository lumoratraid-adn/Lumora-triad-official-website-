export function Pillars() {
  const pillars = [
    {
      id: "01",
      title: "Technology",
      description: "Core engineering, scalable systems, and high-performance architecture built for the long term.",
    },
    {
      id: "02",
      title: "Design",
      description: "User experience and visual clarity that bridge the gap between complexity and usability.",
    },
    {
      id: "03",
      title: "Delivery",
      description: "Accountability and reliability in timelines, ensuring your project lands exactly when promised.",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
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

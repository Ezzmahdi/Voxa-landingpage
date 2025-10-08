import { Mic, Palette, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Mic,
    title: "Talk to Voxa",
    description:
      "Open a stream and start talking about your day, business, app, or ideas. Voxa records and transcribes everything automatically.",
  },
  {
    icon: Palette,
    title: "Add Creator Styles",
    description:
      "Build a library of styles by linking social accounts of creators you admire. Voxa analyzes their tone and writing patterns.",
  },
  {
    icon: Sparkles,
    title: "Generate Content",
    description:
      "Pick streams and styles to generate polished content in your voice with their style. Human-like, never robotic.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Three simple steps to better content
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">From voice to polished posts in minutes</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/30">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

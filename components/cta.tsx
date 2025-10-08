import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function CTA() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Ready to transform your voice into content?
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Join creators, entrepreneurs, and thinkers who are turning their ideas into polished content with Voxa.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"
          >
            <Download className="mr-2 h-5 w-5" />
            Download for Android
          </Button>
          <p className="text-sm text-muted-foreground">Free to download • No credit card required</p>
        </div>
      </div>
    </section>
  )
}

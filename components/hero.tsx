import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <>
      <div className="h-20" />

      <section className="relative overflow-hidden bg-background px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h1 className="text-balance font-sans text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
                An app you'll love using
              </h1>

              <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Talk naturally about your ideas, and Voxa transforms them into engaging content written in your favorite
                creator's style.
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90"
                >
                  Join Waitlist
                </Button>
                <p className="text-sm text-muted-foreground">No credit card required</p>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="relative">
                {/* Phone frame */}
                <div className="relative z-10 mx-auto w-[300px] overflow-hidden rounded-[3rem] border-[12px] border-foreground bg-foreground shadow-2xl">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-foreground" />

                  {/* Screen content */}
                  <div className="relative aspect-[9/19.5] overflow-hidden bg-background">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-07%20at%2021.22.25_5b6920aa-iExqSSHJhfRdgAHSZmV8gAgsZrqqa5.jpg"
                      alt="Voxa Generate Screen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

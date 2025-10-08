import Image from "next/image"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
            Three simple steps to better content 🚀
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn your thoughts into polished content in your voice, with their style — no robotic AI fluff
          </p>
        </div>

        {/* Three Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1: Talk to Voxa */}
          <div className="text-center">
            <div className="relative mx-auto w-64 h-80 mb-6 rounded-3xl overflow-hidden border border-border/50 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100/50">
              <Image
                src="/WhatsApp Image 2025-10-07 at 21.22.25_9b33e56a - Copy.jpg"
                alt="Talk to Voxa - Recording interface"
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Talk to Voxa</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Open a "stream" and start talking about your day, business, app, or ideas. Voxa records and transcribes everything automatically.
            </p>
          </div>

          {/* Step 2: Add Creator Styles */}
          <div className="text-center">
            <div className="relative mx-auto w-64 h-80 mb-6 rounded-3xl overflow-hidden border border-border/50 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100/50">
              <Image
                src="/WhatsApp Image 2025-10-07 at 21.22.26_0d8b69bd.jpg"
                alt="Add Creator Styles - Style library interface"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Add Creator Styles</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Create a library of styles by linking social accounts of creators you like. Voxa analyzes their tone and extracts how they write.
            </p>
          </div>

          {/* Step 3: Generate Content */}
          <div className="text-center">
            <div className="relative mx-auto w-64 h-80 mb-6 rounded-3xl overflow-hidden border border-border/50 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100/50">
              <Image
                src="/WhatsApp Image 2025-10-07 at 21.22.25_5b6920aa.jpg"
                alt="Generate Content - Voice library and content generation"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Generate Content</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pick one or multiple streams + styles, and Voxa generates content in your voice with their polished style — no robotic AI fluff.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

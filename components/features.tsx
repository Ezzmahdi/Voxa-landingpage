import Image from "next/image"

export function Features() {
  return (
    <section id="features" className="px-6 py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
            The basics, but better ⚡
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Built so you'll want to open it and track your daily content creation
          </p>
        </div>

        {/* Three Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Creator Styles */}
          <div className="text-center">
            <div className="relative mx-auto w-72 h-96 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center p-6">
                <div className="relative w-56 h-80 rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                  <Image
                    src="/WhatsApp Image 2025-10-07 at 21.22.26_0d8b69bd.jpg"
                    alt="Creator styles library"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Creator styles</h3>
          </div>

          {/* Voice Recording */}
          <div className="text-center">
            <div className="relative mx-auto w-72 h-96 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center p-6">
                <div className="relative w-56 h-80 rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                  <Image
                    src="/WhatsApp Image 2025-10-07 at 21.22.25_9b33e56a.jpg"
                    alt="Voice recording interface"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Voice recording</h3>
          </div>

          {/* Content Generation */}
          <div className="text-center">
            <div className="relative mx-auto w-72 h-96 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl"></div>
              <div className="relative w-full h-full flex items-center justify-center p-6">
                <div className="relative w-56 h-80 rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                  <Image
                    src="/WhatsApp Image 2025-10-07 at 21.22.25_5b6920aa.jpg"
                    alt="Content generation interface"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Content generation</h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
            Simple, but powerful 🤯
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Almost all features can be turned on/off so you can make the app as simple (or powerful) as you need it to be
          </p>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
            How Voxa Works
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Turn your thoughts into polished content in your voice, with their style — no robotic AI fluff
          </p>
        </div>

        {/* Custom Layout */}
        <div className="space-y-6">
          {/* Top Row: Talk to Voxa (tall) + Voxa in Action */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Talk to Voxa - Tall Box */}
            <div className="lg:w-1/3">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-lg">🗣️</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Talk to Voxa</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Open a "stream" and start talking about your day, business, app, or ideas. Voxa records and transcribes everything automatically.
                </p>
                <div className="relative w-full h-24 rounded-xl overflow-hidden mb-6 border border-border/50">
                  <Image
                    src="/WhatsApp Image 2025-10-07 at 21.22.25_9b33e56a - Copy.jpg"
                    alt="Voxa recording interface"
                    fill
                    className="object-contain bg-muted/20"
                  />
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Real-time transcription</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Automatic stream organization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Voice-to-text accuracy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Voxa in Action */}
            <div className="lg:w-2/3">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-start gap-6 h-full">
                  <div className="flex-1">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                      <span className="text-lg">📱</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4">Voxa in Action</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      See how Voxa transforms your voice streams into polished content that sounds authentically you.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Perfect for content creators, entrepreneurs, and anyone who wants to turn thoughts into content effortlessly.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground mb-6">
                      <div>• Social media posts</div>
                      <div>• Blog articles</div>
                      <div>• Email newsletters</div>
                      <div>• Business updates</div>
                      <div>• Creative writing</div>
                      <div>• Marketing copy</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary font-medium">Your voice, their style</span>
                      <span className="text-primary">🎯</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="relative w-36 h-56 lg:w-44 lg:h-72 border border-border/50 rounded-2xl overflow-hidden">
                      <Image
                        src="/WhatsApp Image 2025-10-07 at 21.22.25_5b6920aa.jpg"
                        alt="Voxa Voice Library interface showing creator styles"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: Add Creator Styles + Generate Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Add Creator Styles */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-lg">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Add Creator Styles</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Create a library of styles by linking social accounts of creators you like. Voxa analyzes their tone and extracts how they write.
              </p>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Style Library
              </div>
            </div>

            {/* Generate Content */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-lg">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Generate Content</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pick one or multiple streams + styles, and Voxa generates content in your voice with their polished style.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Reset status message after 5 seconds
  useEffect(() => {
    if (submitStatus === "success" || submitStatus === "error") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.trim()) return
    
    setIsSubmitting(true)
    setSubmitStatus("idle")
    
    try {
      const response = await fetch("https://submit-form.com/1kjXnOKz2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      })
      
      // Check if the response is successful (status 200-299)
      if (response.ok) {
        setSubmitStatus("success")
        setEmail("") // Clear input only on success
      } else {
        console.error("Form submission failed:", response.status, response.statusText)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="h-14 rounded-full px-6 text-base flex-1"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || !email}
                    className="h-14 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 sm:whitespace-nowrap disabled:opacity-50"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </form>
                
                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 font-medium">
                    🎉 Thanks for joining! We'll be in touch soon.
                  </p>
                )}
                
                {submitStatus === "error" && (
                  <p className="text-sm text-red-600 font-medium">
                    Something went wrong. Please try again.
                  </p>
                )}
                
                {submitStatus === "idle" && (
                  <p className="text-sm text-muted-foreground">No credit card required</p>
                )}
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

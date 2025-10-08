import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app_icon-rqtmukwwdJNo27rcknQiR7ilcA1LF1.png"
            alt="Voxa"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-xl font-bold text-foreground">Voxa</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
        </div>

        <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">Download</Button>
      </div>
    </nav>
  )
}

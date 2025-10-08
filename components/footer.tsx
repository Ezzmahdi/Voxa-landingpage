import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app_icon-rqtmukwwdJNo27rcknQiR7ilcA1LF1.png"
                alt="Voxa"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-bold text-foreground">Voxa</h3>
            </div>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Turn your voice into polished content. Available now on Android.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="transition-colors hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-foreground">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Voxa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

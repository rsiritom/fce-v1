import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 text-center md:gap-6">
        <div className="flex flex-col gap-2 md:gap-3">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FCE Prep. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/about" className="hover:underline hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:underline hover:text-foreground">
            Contact
          </Link>
          <Link href="/privacy" className="hover:underline hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}


"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { BookOpen, Headphones, Pencil, MessageSquare, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      name: "Reading & Use of English",
      path: "/reading-use-of-english",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
    },
    {
      name: "Writing",
      path: "/writing",
      icon: <Pencil className="h-4 w-4 mr-2" />,
    },
    {
      name: "Listening",
      path: "/listening",
      icon: <Headphones className="h-4 w-4 mr-2" />,
    },
    {
      name: "Speaking",
      path: "/speaking",
      icon: <MessageSquare className="h-4 w-4 mr-2" />,
    },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">FCE Prep</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                pathname.startsWith(route.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {route.icon}
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b z-50 md:hidden">
            <nav className="container flex flex-col gap-4 p-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                    pathname.startsWith(route.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.icon}
                  {route.name}
                </Link>
              ))}
              <div className="flex items-center mt-2">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


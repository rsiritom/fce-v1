import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Mail, Book, PenTool } from "lucide-react"

export default function WritingPage() {
  const sections = [
    {
      title: "Essay Writing",
      description: "Practice writing essays on various topics",
      icon: <FileText className="h-6 w-6" />,
      href: "/writing/essay",
    },
    {
      title: "Email Writing",
      description: "Practice writing formal and informal emails",
      icon: <Mail className="h-6 w-6" />,
      href: "/writing/email",
    },
    {
      title: "Review Writing",
      description: "Practice writing reviews of books, films, etc.",
      icon: <Book className="h-6 w-6" />,
      href: "/writing/review",
    },
    {
      title: "Article Writing",
      description: "Practice writing articles for magazines or websites",
      icon: <PenTool className="h-6 w-6" />,
      href: "/writing/article",
    },
  ]

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Writing</h1>
      <p className="mb-6">
        Practice your writing skills with these exercises designed to help you prepare for the FCE Writing paper.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                {section.icon}
                <CardTitle>{section.title}</CardTitle>
              </div>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={section.href}>
                <Button>Practice</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


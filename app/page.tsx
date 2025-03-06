import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Headphones, Pencil, MessageSquare } from "lucide-react"

export default function HomePage() {
  const sections = [
    {
      title: "Reading & Use of English",
      description: "Practice your reading comprehension and knowledge of English grammar and vocabulary.",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/reading-use-of-english",
    },
    {
      title: "Writing",
      description: "Develop your writing skills with various essay and letter writing exercises.",
      icon: <Pencil className="h-6 w-6" />,
      href: "/writing",
    },
    {
      title: "Listening",
      description: "Improve your listening skills with audio exercises and comprehension questions.",
      icon: <Headphones className="h-6 w-6" />,
      href: "/listening",
    },
    {
      title: "Speaking",
      description: "Practice your speaking skills with conversation topics and pronunciation exercises.",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "/speaking",
    },
  ]

  return (
    <div className="container max-w-5xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">FCE Exam Preparation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive practice materials for the Cambridge First Certificate in English (FCE) examination.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                {section.icon}
                <CardTitle>{section.title}</CardTitle>
              </div>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={section.href}>
                <Button>Practice Now</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">About the FCE Exam</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
          The B2 First, formerly known as Cambridge English: First (FCE), is an English language examination provided by
          Cambridge Assessment English. It is an upper-intermediate level qualification that proves you can use everyday
          written and spoken English for work or study purposes.
        </p>
        <Link href="/about">
          <Button variant="outline">Learn More About FCE</Button>
        </Link>
      </div>
    </div>
  )
}


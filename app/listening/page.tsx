import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Headphones, CheckSquare, ListChecks, MessageSquare } from "lucide-react"

export default function ListeningPage() {
  const sections = [
    {
      title: "Multiple Choice",
      description: "Listen to audio and answer multiple choice questions",
      icon: <CheckSquare className="h-6 w-6" />,
      href: "/listening/multiple-choice",
    },
    {
      title: "Sentence Completion",
      description: "Listen and complete sentences with missing information",
      icon: <ListChecks className="h-6 w-6" />,
      href: "/listening/sentence-completion",
    },
    {
      title: "Matching",
      description: "Match speakers to statements or questions",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "/listening/matching",
    },
    {
      title: "General Listening",
      description: "Practice with various listening exercises",
      icon: <Headphones className="h-6 w-6" />,
      href: "/listening/general",
    },
  ]

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Listening</h1>
      <p className="mb-6">
        Practice your listening skills with these exercises designed to help you prepare for the FCE Listening paper.
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


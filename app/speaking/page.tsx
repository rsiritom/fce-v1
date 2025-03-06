import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Image, Clock } from "lucide-react"

export default function SpeakingPage() {
  const sections = [
    {
      title: "Interview",
      description: "Practice answering common interview questions",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "/speaking/interview",
    },
    {
      title: "Collaborative Task",
      description: "Practice discussing options and making decisions",
      icon: <Users className="h-6 w-6" />,
      href: "/speaking/collaborative-task",
    },
    {
      title: "Picture Description",
      description: "Practice describing pictures and photographs",
      icon: <Image className="h-6 w-6" />,
      href: "/speaking/picture-description",
    },
    {
      title: "Long Turn",
      description: "Practice speaking for an extended period on a topic",
      icon: <Clock className="h-6 w-6" />,
      href: "/speaking/long-turn",
    },
  ]

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Speaking</h1>
      <p className="mb-6">
        Practice your speaking skills with these exercises designed to help you prepare for the FCE Speaking paper.
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


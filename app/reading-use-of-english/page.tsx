import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, SplitSquareVertical, AlignJustify } from "lucide-react"

export default function ReadingUseOfEnglishPage() {
  const sections = [
    {
      title: "Multiple Choice",
      description: "Read a text and answer multiple choice questions",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/reading-use-of-english/multiple-choice",
    },
    {
      title: "Gap Filling",
      description: "Fill in the gaps in a text with appropriate words",
      icon: <SplitSquareVertical className="h-6 w-6" />,
      href: "/reading-use-of-english/gap-filling",
    },
    {
      title: "Word Formation",
      description: "Form words to fill gaps in a text",
      icon: <FileText className="h-6 w-6" />,
      href: "/reading-use-of-english/word-formation",
    },
    {
      title: "Sentence Transformation",
      description: "Rewrite sentences using different structures",
      icon: <AlignJustify className="h-6 w-6" />,
      href: "/reading-use-of-english/sentence-transformation",
    },
  ]

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Reading & Use of English</h1>
      <p className="mb-6">
        Practice your reading comprehension and knowledge of English grammar and vocabulary with these exercises.
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


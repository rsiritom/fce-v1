import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { essayTopics } from "@/lib/data"

export default function EssayWritingPage() {
  return (
    <div className="container max-w-4xl py-6">
      <Link href="/writing" className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Writing
      </Link>

      <h1 className="text-2xl font-bold mb-6">Essay Writing</h1>
      <p className="mb-6">Practice writing essays on various topics. Choose a topic below to begin.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {essayTopics.map((topic) => (
          <Card key={topic.id}>
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>{topic.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/writing/essay/${topic.id}`}>
                <Button>Start</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


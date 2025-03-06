import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { listeningMultipleChoiceSets } from "@/lib/data"

export default function ListeningMultipleChoicePage() {
  return (
    <div className="container max-w-4xl py-6">
      <Link href="/listening" className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Listening
      </Link>

      <h1 className="text-2xl font-bold mb-6">Listening Multiple Choice</h1>
      <p className="mb-6">
        Practice your listening skills by listening to audio and answering multiple choice questions.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {listeningMultipleChoiceSets.map((set) => (
          <Card key={set.id}>
            <CardHeader>
              <CardTitle>{set.title}</CardTitle>
              <CardDescription>{set.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/listening/multiple-choice/${set.id}`}>
                <Button>Start</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


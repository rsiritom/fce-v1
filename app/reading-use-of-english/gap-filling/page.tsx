import Link from "next/link"
import { gapFillingSets } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function GapFillingPage() {
  return (
    <div className="container max-w-4xl py-6">
      <Link
        href="/reading-use-of-english"
        className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Reading & Use of English
      </Link>

      <h1 className="text-2xl font-bold mb-6">Gap Filling Exercises</h1>
      <p className="mb-6">
        Practice your vocabulary and grammar by filling in the gaps in these texts. Choose a set below to begin.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gapFillingSets.map((set) => (
          <Card key={set.id}>
            <CardHeader>
              <CardTitle>{set.title}</CardTitle>
              <CardDescription>{set.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/reading-use-of-english/gap-filling/${set.id}`}>
                <Button>Start</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


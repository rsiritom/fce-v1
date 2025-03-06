"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

interface EssayWritingExerciseProps {
  topic: {
    id: string
    title: string
    description: string
    prompt: string
    wordCount: number
    tips: string[]
    sampleEssay?: string
  }
}

export default function EssayWritingExercise({ topic }: EssayWritingExerciseProps) {
  const [essay, setEssay] = useState("")
  const [showSample, setShowSample] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length

  const handleSubmit = () => {
    if (wordCount < topic.wordCount * 0.8) {
      setFeedback(`Your essay is too short. Try to write at least ${Math.floor(topic.wordCount * 0.8)} words.`)
    } else if (wordCount > topic.wordCount * 1.2) {
      setFeedback(`Your essay is too long. Try to keep it under ${Math.ceil(topic.wordCount * 1.2)} words.`)
    } else {
      setFeedback(
        "Your essay has been submitted successfully! In a real exam, your essay would now be assessed based on content, organization, language, and accuracy.",
      )
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Link href="/writing/essay" className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Essay Topics
        </Link>

        <h2 className="text-xl font-semibold mb-4">{topic.title}</h2>
        <p className="mb-4">{topic.description}</p>

        <div className="p-4 bg-muted rounded-md mb-6">
          <p className="font-medium">Essay Prompt:</p>
          <p className="mt-2">{topic.prompt}</p>
          <p className="mt-2 text-sm text-muted-foreground">Write approximately {topic.wordCount} words.</p>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-2">Writing Tips:</p>
          <ul className="list-disc pl-5 space-y-1">
            {topic.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 mb-6">
          <label htmlFor="essay" className="font-medium">
            Your Essay:
          </label>
          <Textarea
            id="essay"
            value={essay}
            onChange={(e) => setEssay(e.target.value)}
            placeholder="Start writing your essay here..."
            className="min-h-[300px]"
          />
          <div className="text-sm text-right">
            Word count: {wordCount} / {topic.wordCount}
          </div>
        </div>

        {feedback && (
          <Alert className="mb-6">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Feedback</AlertTitle>
            <AlertDescription>{feedback}</AlertDescription>
          </Alert>
        )}

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button onClick={handleSubmit}>Submit Essay</Button>
          {topic.sampleEssay && (
            <Button variant="outline" onClick={() => setShowSample(!showSample)}>
              {showSample ? "Hide Sample Essay" : "View Sample Essay"}
            </Button>
          )}
        </div>

        {showSample && topic.sampleEssay && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="font-medium mb-2">Sample Essay:</p>
            <p className="whitespace-pre-line">{topic.sampleEssay}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


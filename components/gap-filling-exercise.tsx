"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface GapFillingExerciseProps {
  set: {
    id: string
    title: string
    text: string
    gaps: {
      id: number
      answer: string
    }[]
  }
}

export default function GapFillingExercise({ set }: GapFillingExerciseProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  // Split the text by gaps and create an array of text segments and gap placeholders
  const textParts = set.text.split(/\{(\d+)\}/).map((part, index) => {
    const gapMatch = part.match(/^\d+$/)
    if (gapMatch) {
      const gapId = Number.parseInt(part)
      return (
        <span key={`gap-${gapId}`} className="inline-block mx-1">
          <Input
            type="text"
            value={answers[gapId] || ""}
            onChange={(e) => {
              setAnswers({
                ...answers,
                [gapId]: e.target.value,
              })
            }}
            className="w-32 inline-block"
            disabled={showResults}
          />
        </span>
      )
    }
    return <span key={`text-${index}`}>{part}</span>
  })

  const checkAnswers = () => {
    let correctCount = 0

    set.gaps.forEach((gap) => {
      if (answers[gap.id]?.toLowerCase().trim() === gap.answer.toLowerCase().trim()) {
        correctCount++
      }
    })

    setScore(correctCount)
    setShowResults(true)
  }

  const resetExercise = () => {
    setAnswers({})
    setShowResults(false)
    setScore(0)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Link
          href="/reading-use-of-english/gap-filling"
          className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Gap Filling Sets
        </Link>

        <h2 className="text-xl font-semibold mb-4">{set.title}</h2>

        <div className="mb-6 text-lg leading-relaxed">{textParts}</div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {!showResults ? (
            <Button onClick={checkAnswers}>Check Answers</Button>
          ) : (
            <>
              <div className="flex items-center">
                <span className="font-medium">
                  Your score: {score}/{set.gaps.length} ({Math.round((score / set.gaps.length) * 100)}%)
                </span>
              </div>
              <Button onClick={resetExercise}>Try Again</Button>
            </>
          )}
        </div>

        {showResults && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <h3 className="font-semibold mb-2">Correct Answers:</h3>
            <ul className="space-y-2">
              {set.gaps.map((gap) => (
                <li key={gap.id} className="flex items-start">
                  <span className="font-medium mr-2">{gap.id}:</span>
                  <span
                    className={
                      answers[gap.id]?.toLowerCase().trim() === gap.answer.toLowerCase().trim()
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }
                  >
                    {gap.answer}
                    {answers[gap.id]?.toLowerCase().trim() !== gap.answer.toLowerCase().trim() &&
                      ` (your answer: ${answers[gap.id] || "blank"})`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface MultipleChoiceExerciseProps {
  set: {
    id: string
    title: string
    text: string
    questions: {
      id: number
      question: string
      options: string[]
      correctAnswer: number
    }[]
  }
}

export default function MultipleChoiceExercise({ set }: MultipleChoiceExerciseProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerChange = (questionId: number, optionIndex: number) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex,
    })
  }

  const checkAnswers = () => {
    let correctCount = 0

    set.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
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
          href="/reading-use-of-english/multiple-choice"
          className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Multiple Choice Sets
        </Link>

        <h2 className="text-xl font-semibold mb-4">{set.title}</h2>

        <div className="mb-6 text-lg leading-relaxed">
          <p className="whitespace-pre-line">{set.text}</p>
        </div>

        <div className="space-y-6 mb-6">
          {set.questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <h3 className="font-medium">
                Question {question.id}: {question.question}
              </h3>
              <RadioGroup
                value={answers[question.id]?.toString()}
                onValueChange={(value) => handleAnswerChange(question.id, Number.parseInt(value))}
                disabled={showResults}
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`q${question.id}-option${index}`} />
                    <Label
                      htmlFor={`q${question.id}-option${index}`}
                      className={
                        showResults
                          ? index === question.correctAnswer
                            ? "text-green-600 dark:text-green-400 font-medium"
                            : answers[question.id] === index
                              ? "text-red-600 dark:text-red-400"
                              : ""
                          : ""
                      }
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          {!showResults ? (
            <Button onClick={checkAnswers}>Check Answers</Button>
          ) : (
            <>
              <div className="flex items-center">
                <span className="font-medium">
                  Your score: {score}/{set.questions.length} ({Math.round((score / set.questions.length) * 100)}%)
                </span>
              </div>
              <Button onClick={resetExercise}>Try Again</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}


"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, Mic, StopCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PictureDescriptionExerciseProps {
  set: {
    id: string
    title: string
    imageUrl: string
    description: string
    promptQuestions: string[]
    tips: string[]
    sampleAnswer?: string
  }
}

export default function PictureDescriptionExercise({ set }: PictureDescriptionExerciseProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [timer, setTimer] = useState(60)
  const [showSample, setShowSample] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startRecording = () => {
    setIsRecording(true)
    setTimer(60)

    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          stopRecording()
          return 0
        }
        return prevTimer - 1
      })
    }, 1000)
  }

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    setIsRecording(false)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Link
          href="/speaking/picture-description"
          className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Picture Description
        </Link>

        <h2 className="text-xl font-semibold mb-4">{set.title}</h2>

        <div className="mb-6">
          <div className="relative h-64 w-full mb-4">
            <Image
              src={set.imageUrl || "/placeholder.svg"}
              alt={set.title}
              fill
              className="object-contain rounded-md"
            />
          </div>
          <p>{set.description}</p>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-2">Questions to consider:</p>
          <ul className="list-disc pl-5 space-y-1">
            {set.promptQuestions.map((question, index) => (
              <li key={index}>{question}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-2">Speaking Tips:</p>
          <ul className="list-disc pl-5 space-y-1">
            {set.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-md mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{timer} seconds remaining</span>
            </div>
          </div>

          <div className="flex space-x-4">
            {!isRecording ? (
              <Button onClick={startRecording} className="flex items-center space-x-2">
                <Mic className="h-4 w-4" />
                <span>Start Speaking (60s)</span>
              </Button>
            ) : (
              <Button onClick={stopRecording} variant="destructive" className="flex items-center space-x-2">
                <StopCircle className="h-4 w-4" />
                <span>Stop</span>
              </Button>
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Note: This is a practice exercise. In a real exam, you would speak for 1 minute.
          </p>
        </div>

        {set.sampleAnswer && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={() => setShowSample(!showSample)}>
              {showSample ? "Hide Sample Answer" : "View Sample Answer"}
            </Button>
          </div>
        )}

        {showSample && set.sampleAnswer && (
          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="font-medium mb-2">Sample Answer:</p>
            <p className="whitespace-pre-line">{set.sampleAnswer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


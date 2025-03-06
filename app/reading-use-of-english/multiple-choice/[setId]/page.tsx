import { notFound } from "next/navigation"
import { getMultipleChoiceSet } from "@/lib/data"
import MultipleChoiceExercise from "@/components/multiple-choice-exercise"

interface MultipleChoicePageProps {
  params: {
    setId: string
  }
}

export default function MultipleChoicePage({ params }: MultipleChoicePageProps) {
  const setId = params.setId
  const set = getMultipleChoiceSet(setId)

  if (!set) {
    return notFound()
  }

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Multiple Choice Reading</h1>
      <MultipleChoiceExercise set={set} />
    </div>
  )
}


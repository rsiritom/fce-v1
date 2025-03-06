import { notFound } from "next/navigation"
import { getListeningMultipleChoiceSet } from "@/lib/data"
import ListeningMultipleChoiceExercise from "@/components/listening-multiple-choice-exercise"

interface ListeningMultipleChoicePageProps {
  params: {
    setId: string
  }
}

export default function ListeningMultipleChoicePage({ params }: ListeningMultipleChoicePageProps) {
  const setId = params.setId
  const set = getListeningMultipleChoiceSet(setId)

  if (!set) {
    return notFound()
  }

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Listening Multiple Choice</h1>
      <ListeningMultipleChoiceExercise set={set} />
    </div>
  )
}


import { notFound } from "next/navigation"
import { getGapFillingSet } from "@/lib/data"
import GapFillingExercise from "@/components/gap-filling-exercise"

interface GapFillingPageProps {
  params: {
    setId: string
  }
}

export default function GapFillingPage({ params }: GapFillingPageProps) {
  const setId = params.setId
  const set = getGapFillingSet(setId)

  if (!set) {
    return notFound()
  }

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Gap Filling Exercise</h1>
      <GapFillingExercise set={set} />
    </div>
  )
}


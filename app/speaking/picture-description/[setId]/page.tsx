import { notFound } from "next/navigation"
import { getPictureDescriptionSet } from "@/lib/data"
import PictureDescriptionExercise from "@/components/picture-description-exercise"

interface PictureDescriptionPageProps {
  params: {
    setId: string
  }
}

export default function PictureDescriptionPage({ params }: PictureDescriptionPageProps) {
  const setId = params.setId
  const set = getPictureDescriptionSet(setId)

  if (!set) {
    return notFound()
  }

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Picture Description</h1>
      <PictureDescriptionExercise set={set} />
    </div>
  )
}


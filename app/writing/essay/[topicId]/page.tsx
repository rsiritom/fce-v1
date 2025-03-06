import { notFound } from "next/navigation"
import { getEssayTopic } from "@/lib/data"
import EssayWritingExercise from "@/components/essay-writing-exercise"

interface EssayWritingPageProps {
  params: {
    topicId: string
  }
}

export default function EssayWritingPage({ params }: EssayWritingPageProps) {
  const topicId = params.topicId
  const topic = getEssayTopic(topicId)

  if (!topic) {
    return notFound()
  }

  return (
    <div className="container max-w-4xl py-6">
      <h1 className="text-2xl font-bold mb-6">Essay Writing</h1>
      <EssayWritingExercise topic={topic} />
    </div>
  )
}


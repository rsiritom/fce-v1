import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { pictureDescriptionSets } from "@/lib/data"
import Image from "next/image"

export default function PictureDescriptionPage() {
  return (
    <div className="container max-w-4xl py-6">
      <Link href="/speaking" className="flex items-center text-sm text-muted-foreground mb-4 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Speaking
      </Link>

      <h1 className="text-2xl font-bold mb-6">Picture Description</h1>
      <p className="mb-6">Practice describing pictures and photographs. Choose a picture below to begin.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {pictureDescriptionSets.map((set) => (
          <Card key={set.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={set.imageUrl || "/placeholder.svg"} alt={set.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{set.title}</CardTitle>
              <CardDescription>{set.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/speaking/picture-description/${set.id}`}>
                <Button>Start</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


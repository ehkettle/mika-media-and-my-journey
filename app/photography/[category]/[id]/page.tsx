import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// This is a sample implementation - you'll need to connect to your actual image data
export default function PhotoDetailPage({ params }: { params: { category: string; id: string } }) {
  // Sample metadata for the actual images
  const imageMetadata: Record<string, any> = {
    "sunset-dock": {
      title: "Sunset Dock",
      description: "Peaceful evening light captured from a lakeside wooden pier",
      metadata: {
        camera: "Sony Alpha a7 III",
        lens: "Sony FE 24-70mm f/2.8 GM",
        aperture: "f/8",
        shutterSpeed: "1/125s",
        iso: "100",
        location: "Lake Serenity",
        date: "June 2024",
      },
    },
    "twilight-lake": {
      title: "Twilight Reflections",
      description: "Colorful sky reflecting on still waters at dusk",
      metadata: {
        camera: "Sony Alpha a7 III",
        lens: "Sony FE 16-35mm f/2.8 GM",
        aperture: "f/11",
        shutterSpeed: "1/60s",
        iso: "200",
        location: "Northern Bay",
        date: "July 2024",
      },
    },
    "birch-sunset": {
      title: "Golden Birch",
      description: "Warm evening light illuminating birch trees by the water",
      metadata: {
        camera: "Sony Alpha a7 III",
        lens: "Sony FE 70-200mm f/2.8 GM",
        aperture: "f/4",
        shutterSpeed: "1/250s",
        iso: "100",
        location: "Birch Grove Park",
        date: "August 2024",
      },
    },
  }

  // Get metadata for the current image or use default values
  const currentMetadata = imageMetadata[params.id] || {
    title: params.id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: "A stunning photograph by Mika showcasing exceptional composition and lighting.",
    metadata: {
      camera: "Sony Alpha a7 III",
      lens: "Sony FE 24-70mm f/2.8 GM",
      aperture: "f/8",
      shutterSpeed: "1/125s",
      iso: "100",
      location: "Various",
      date: "2024",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href={`/photography`}>
        <Button variant="ghost" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Gallery
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src={`/images/photography/${params.category}/${params.id}.jpg`}
              alt={currentMetadata.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{currentMetadata.title}</h1>
            <p className="mt-2 text-gray-500">{currentMetadata.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Image Details</h2>
            <div className="grid grid-cols-2 gap-y-2">
              <div className="text-sm font-medium">Camera</div>
              <div className="text-sm text-gray-500">{currentMetadata.metadata.camera}</div>

              <div className="text-sm font-medium">Lens</div>
              <div className="text-sm text-gray-500">{currentMetadata.metadata.lens}</div>

              <div className="text-sm font-medium">Aperture</div>
              <div className="text-sm text-gray-500">{currentMetadata.metadata.aperture}</div>

              <div className="text-sm font-medium">Shutter Speed</div>
              <div className="text-sm text-gray-500">{currentMetadata.metadata.shutterSpeed}</div>

              <div className="text-sm font-medium">ISO</div>
              <div className="text-sm text-gray-500">{currentMetadata.metadata.iso}</div>

              <div className="text-sm font-medium">Location</div>
              <div className="text-sm text-gray-500">{currentMetadata.metadata.location}</div>

              <div className="text-sm font-medium">Date</div>
              <div className="text-sm text-gray-500">{currentMetadata.metadata.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"

export default function PhotographyPage() {
  // Photography categories - removed Portraits and Events
  const categories = [
    { id: "landscapes", name: "Landscapes" },
    { id: "street", name: "Street" },
    { id: "architecture", name: "Architecture" },
  ]

  // Images for each category - using Mika's actual photos and removing placeholders
  const images = {
    landscapes: [
      {
        id: "sunset-dock",
        src: "/images/photography/landscapes/sunset-dock.jpg",
        alt: "Golden sunset view from a wooden dock with reeds",
        title: "Sunset Dock",
        description: "Peaceful evening light captured from a lakeside wooden pier",
      },
      {
        id: "twilight-lake",
        src: "/images/photography/landscapes/twilight-lake.jpg",
        alt: "Vibrant sunset over a calm lake with wooden dock",
        title: "Twilight Reflections",
        description: "Colorful sky reflecting on still waters at dusk",
      },
      {
        id: "birch-sunset",
        src: "/images/photography/landscapes/birch-sunset.jpg",
        alt: "Sunlight filtering through birch trees with yellow-green leaves",
        title: "Golden Birch",
        description: "Warm evening light illuminating birch trees by the water",
      },
      {
        id: "misty-bridge",
        src: "/images/photography/landscapes/misty-bridge.jpg",
        alt: "Suspension bridge emerging from fog with autumn forest",
        title: "Bridge Above the Clouds",
        description: "Morning mist surrounding a bridge with autumn colors on the hillside",
      },
      {
        id: "winding-road",
        src: "/images/photography/landscapes/winding-road.jpg",
        alt: "Curved road leading to a village with morning fog",
        title: "Country Road",
        description: "Winding road through rural landscape with morning mist in the valley",
      },
      {
        id: "golden-tree-field",
        src: "/images/photography/landscapes/golden-tree-field.jpg",
        alt: "Vibrant yellow tree in a field with wooden structure",
        title: "Golden Guardian",
        description: "Majestic autumn tree standing tall in a rural field",
      },
      {
        id: "autumn-tree-road",
        src: "/images/photography/landscapes/autumn-tree-road.jpg",
        alt: "Yellow tree by a country road in autumn",
        title: "Roadside Gold",
        description: "Brilliant autumn foliage alongside a country road",
      },
      {
        id: "autumn-trees-light",
        src: "/images/photography/landscapes/autumn-trees-light.jpg",
        alt: "Golden autumn trees with sunlight streaming through",
        title: "Autumn Glow",
        description: "Morning light filtering through vibrant autumn leaves",
      },
    ],
    street: [
      {
        id: "red-scooter",
        src: "/images/photography/street/red-scooter.jpg",
        alt: "Person riding a red scooter on a European city street",
        title: "City Cruiser",
        description: "Urban life captured on a sunny day in the city center",
      },
      {
        id: "tree-lined-path",
        src: "/images/photography/street/tree-lined-path.jpg",
        alt: "Tree-lined bicycle path with lush green canopy",
        title: "Green Corridor",
        description: "Urban planning at its best - a peaceful green pathway through the city",
      },
    ],
    architecture: [
      {
        id: "wooden-deck",
        src: "/images/photography/architecture/wooden-deck.jpg",
        alt: "Modern architectural structure with wooden ceiling and deck",
        title: "Light and Shadow",
        description: "Interplay of light and shadow in contemporary architecture",
      },
      {
        id: "suspension-bridge",
        src: "/images/photography/architecture/suspension-bridge.jpg",
        alt: "Modern suspension bridge with elegant curves",
        title: "Urban Curves",
        description: "Elegant lines of a modern pedestrian bridge",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mika's Photography</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the world through Mika's lens - capturing moments, emotions, and stories
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="landscapes" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {Object.entries(images).map(([category, categoryImages]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryImages.map((image) => (
                      <div
                        key={image.id}
                        className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
                      >
                        <Link href={`/photography/${category}/${image.id}`}>
                          <div className="relative h-80 w-full overflow-hidden">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity group-hover:bg-opacity-20" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold">{image.title}</h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{image.description}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

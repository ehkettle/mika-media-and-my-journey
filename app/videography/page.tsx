"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function VideographyPage() {
  // Video projects with actual video files and YouTube embeds
  const videoProjects = [
    {
      id: "natural-beauty",
      title: "Natural Beauty",
      description: "Creative short-form video showcasing Finland's incredible nature",
      thumbnail: "/images/photography/street/red-scooter.jpg",
      googleDriveId: "1TOICmAhObApApb-7QqYA7l080pZIpkw-",
      isGoogleDrive: true,
      duration: "0:15",
      date: "July 2025",
    },
    {
      id: "kanonviken",
      title: "Kanonviken",
      description: "Serene coastal views of Kanonviken",
      thumbnail: "/images/photography/landscapes/twilight-lake.jpg",
      googleDriveId: "1zSOb8epFGSqpyuGXdvczY6krRBUqdtwF",
      isGoogleDrive: true,
      duration: "0:38",
      date: "June 2025",
    },
    {
      id: "growing-up-small-town",
      title: "Growing Up In A Small Town",
      description: "A cinematic short film about life in a small town",
      thumbnail: "/images/photography/landscapes/winding-road.jpg",
      youtubeId: "7hWOqniGEwY",
      isYouTube: true,
      duration: "3:42",
      date: "May 2025",
    },
    {
      id: "norway-landscapes",
      title: "Norway Landscapes",
      description: "Breathtaking views of Norway's natural beauty",
      thumbnail: "/images/photography/landscapes/golden-tree-field.jpg",
      googleDriveId: "17C4JgZDgugoqmJVAeW5UXQSepGa1o7rP",
      isGoogleDrive: true,
      duration: "0:30",
      date: "April 2025",
    },
  ]

  // State for the currently playing video
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  // Function to handle video play/pause
  const toggleVideo = (id: string) => {
    setActiveVideo(activeVideo === id ? null : id)
  }

  // Function to toggle mute state
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mika's Videography</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Stunning video productions and editing showcasing Mika's creative vision
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-10">
              {videoProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden">
                    {activeVideo === project.id ? (
                      project.isYouTube ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0`}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full border-0"
                        ></iframe>
                      ) : project.isGoogleDrive ? (
                        <iframe
                          src={`https://drive.google.com/file/d/${project.googleDriveId}/preview`}
                          title={project.title}
                          allow="autoplay"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full border-0"
                        ></iframe>
                      ) : (
                        <div className="relative h-full w-full">
                          <video
                            src={project.videoSrc}
                            poster={project.thumbnail}
                            className="h-full w-full object-cover"
                            autoPlay
                            controls={false}
                            loop
                            muted={isMuted}
                          />
                          <div className="absolute bottom-4 right-4 flex gap-2">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                              onClick={() => toggleVideo(project.id)}
                            >
                              <Pause className="h-5 w-5" />
                              <span className="sr-only">Pause</span>
                            </Button>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                              onClick={toggleMute}
                            >
                              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                              <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
                            </Button>
                          </div>
                        </div>
                      )
                    ) : (
                      <>
                        <Image
                          src={project.thumbnail || "/placeholder.svg?height=720&width=1280"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                          onClick={() => toggleVideo(project.id)}
                        >
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-black">
                            <Play className="h-8 w-8" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                          {project.duration}
                        </div>
                        {project.isYouTube && (
                          <div className="absolute top-2 right-2 rounded bg-red-600 px-2 py-1 text-xs text-white flex items-center">
                            <span>YouTube</span>
                          </div>
                        )}
                        {project.isGoogleDrive && (
                          <div className="absolute top-2 right-2 rounded bg-blue-600 px-2 py-1 text-xs text-white flex items-center">
                            <span>Google Drive</span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">{project.description}</p>
                        <div className="mt-4 text-sm text-gray-500">
                          <span>{project.date}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {project.isYouTube ? (
                          <a
                            href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="flex items-center gap-2">
                              <span>Watch on YouTube</span>
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        ) : project.isGoogleDrive ? (
                          <a
                            href={`https://drive.google.com/file/d/${project.googleDriveId}/view`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="flex items-center gap-2">
                              <span>View in Google Drive</span>
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        ) : (
                          <Link href={`/videography/${project.id}`}>
                            <Button>View Full Project</Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

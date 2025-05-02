"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Play, Pause, Volume2, VolumeX, Maximize, Minimize, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

// Sample video data - in a real app, you would fetch this from a database or API
const videoProjects = [
  {
    id: "natural-beauty",
    title: "Natural Beauty",
    description:
      "Creative short-form video showcasing Finland's incredible nature. This captivating clip highlights the pristine landscapes, serene lakes, and lush forests that make Finland a natural paradise.",
    thumbnail: "/images/photography/street/red-scooter.jpg",
    googleDriveId: "1TOICmAhObApApb-7QqYA7l080pZIpkw-",
    isGoogleDrive: true,
    duration: "0:15",
    date: "July 2025",
    director: "Mika",
    cinematography: "Mika",
    editing: "Mika",
    music: "Original Sound",
    equipment: "iPhone 15 Pro",
    location: "Finland",
    relatedVideos: ["kanonviken", "norway-landscapes"],
  },
  {
    id: "kanonviken",
    title: "Kanonviken",
    description:
      "Serene coastal views of Kanonviken, showcasing the natural beauty and tranquility of this scenic location. The video captures the peaceful atmosphere and stunning landscapes that make this area so special.",
    thumbnail: "/images/photography/landscapes/twilight-lake.jpg",
    googleDriveId: "1zSOb8epFGSqpyuGXdvczY6krRBUqdtwF",
    isGoogleDrive: true,
    duration: "0:38",
    date: "June 2025",
    director: "Mika",
    cinematography: "Mika",
    editing: "Mika",
    music: "Ambient Nature Sounds",
    equipment: "Sony Alpha Camera",
    location: "Kanonviken, Sweden",
    relatedVideos: ["natural-beauty", "norway-landscapes"],
  },
  {
    id: "growing-up-small-town",
    title: "Growing Up In A Small Town",
    description:
      "A cinematic short film about life in a small town. This film explores the unique experiences, challenges, and joys of growing up in a close-knit rural community. Shot with a focus on capturing authentic moments and the distinctive atmosphere of small-town life.",
    thumbnail: "/images/photography/landscapes/winding-road.jpg",
    youtubeId: "7hWOqniGEwY",
    isYouTube: true,
    duration: "3:42",
    date: "May 2025",
    director: "Meeks",
    cinematography: "Meeks",
    editing: "Meeks",
    music: "Original Composition",
    equipment: "Sony Alpha Camera",
    location: "Small Town, USA",
    tags: ["cinematic", "filmmaking", "sony"],
    relatedVideos: ["norway-landscapes", "natural-beauty"],
  },
  {
    id: "norway-landscapes",
    title: "Norway Landscapes",
    description:
      "Breathtaking views of Norway's natural beauty, showcasing majestic fjords, mountains, and scenic vistas. This video captures the essence of Norway's stunning landscapes and serene environments.",
    thumbnail: "/images/photography/landscapes/golden-tree-field.jpg",
    videoSrc: "/videos/norway2.mp4",
    duration: "0:30",
    date: "April 2025",
    director: "Mika",
    cinematography: "Mika",
    editing: "Mika",
    music: "Nordic Ambience by SoundArtist",
    equipment: "Sony A7S III, DJI Mavic 3 Pro",
    location: "Various locations in Norway",
    relatedVideos: ["kanonviken", "natural-beauty"],
  },
  {
    id: "luther-tiktok",
    title: "Natural Beauty",
    description:
      "Creative short-form video showcasing Finland's incredible nature. This captivating clip highlights the pristine landscapes, serene lakes, and lush forests that make Finland a natural paradise.",
    thumbnail: "/images/photography/street/red-scooter.jpg",
    googleDriveId: "1TOICmAhObApApb-7QqYA7l080pZIpkw-",
    isGoogleDrive: true,
    duration: "0:15",
    date: "July 2025",
    director: "Mika",
    cinematography: "Mika",
    editing: "Mika",
    music: "Original Sound",
    equipment: "iPhone 15 Pro",
    location: "Finland",
    relatedVideos: ["kanonviken", "norway-landscapes"],
  },
]

export default function VideoProjectPage({ params }: { params: { id: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Find the current video project
  const project = videoProjects.find((p) => p.id === params.id) || videoProjects[0]

  // Find related videos
  const relatedVideos = project.relatedVideos.map((id) => videoProjects.find((p) => p.id === id)).filter(Boolean)

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Update fullscreen state when it changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/videography">
        <Button variant="ghost" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to All Videos
        </Button>
      </Link>

      <div className="mb-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          {project.isYouTube ? (
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0`}
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
            <>
              <video
                ref={videoRef}
                src={project.videoSrc}
                poster={project.thumbnail}
                className="h-full w-full object-cover"
                controls={false}
                loop
                muted={isMuted}
                onClick={togglePlay}
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
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
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                  <span className="sr-only">{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</span>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

          <h2 className="text-xl font-semibold mb-3">Project Details</h2>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
            <div className="text-sm font-medium">Director</div>
            <div className="text-sm text-gray-500">{project.director}</div>

            <div className="text-sm font-medium">Cinematography</div>
            <div className="text-sm text-gray-500">{project.cinematography}</div>

            <div className="text-sm font-medium">Editing</div>
            <div className="text-sm text-gray-500">{project.editing}</div>

            <div className="text-sm font-medium">Music</div>
            <div className="text-sm text-gray-500">{project.music}</div>

            <div className="text-sm font-medium">Equipment</div>
            <div className="text-sm text-gray-500">{project.equipment}</div>

            <div className="text-sm font-medium">Location</div>
            <div className="text-sm text-gray-500">{project.location}</div>

            <div className="text-sm font-medium">Date</div>
            <div className="text-sm text-gray-500">{project.date}</div>

            <div className="text-sm font-medium">Duration</div>
            <div className="text-sm text-gray-500">{project.duration}</div>

            {project.tags && (
              <>
                <div className="text-sm font-medium">Tags</div>
                <div className="text-sm text-gray-500">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {(project.isYouTube || project.isGoogleDrive) && (
            <div className="mt-6">
              <a
                href={
                  project.isYouTube
                    ? `https://www.youtube.com/watch?v=${project.youtubeId}`
                    : `https://drive.google.com/file/d/${project.googleDriveId}/view`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button className="flex items-center gap-2">
                  <span>{project.isYouTube ? "Watch on YouTube" : "View in Google Drive"}</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
          <div className="space-y-4">
            {relatedVideos.map((video) => (
              <Link key={video?.id} href={`/videography/${video?.id}`}>
                <div className="group relative overflow-hidden rounded-lg">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={video?.thumbnail || "/placeholder.svg"}
                      alt={video?.title || ""}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-80">
                        <Play className="h-5 w-5 text-black" />
                      </div>
                    </div>
                    {video?.isYouTube && (
                      <div className="absolute top-2 right-2 rounded bg-red-600 px-2 py-1 text-xs text-white">
                        YouTube
                      </div>
                    )}
                    {video?.isGoogleDrive && (
                      <div className="absolute top-2 right-2 rounded bg-blue-600 px-2 py-1 text-xs text-white">
                        Google Drive
                      </div>
                    )}
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium">{video?.title}</h3>
                    <p className="text-xs text-gray-500">{video?.duration}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

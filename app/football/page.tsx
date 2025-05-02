"use client"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function FootballPage() {
  // Player profiles
  const players = {
    mika: {
      name: "Mika Kaarre",
      position: "Goalkeeper",
      transfermarktUrl: "https://www.transfermarkt.co.uk/mika-kaarre/profil/spieler/646008",
      highlightVideoUrl: "https://www.youtube.com/embed/OcnH931yOoE",
      youtubeUrl: "https://youtu.be/OcnH931yOoE?si=u6mQBR5pK1W6tXH_",
      bio: "Mika is a talented goalkeeper known for his exceptional shot-stopping abilities. His quick reflexes, positioning, and command of the penalty area make him a formidable last line of defense. Throughout his career, he has demonstrated remarkable agility and decision-making skills between the posts.",
      nationality: "Finnish",
      flag: "🇫🇮",
    },
    elliot: {
      name: "Elliot Kettle",
      position: "Holding Midfielder",
      transfermarktUrl: "https://www.transfermarkt.co.uk/elliot-kettle/profil/spieler/1021516",
      highlightVideoUrl: "https://www.youtube.com/embed/QKFWq9YeSs4",
      youtubeUrl: "https://youtu.be/QKFWq9YeSs4?si=rWsQ-JVI4xHrqyMD",
      bio: "Elliot is a composed holding midfielder with an exceptional ability to control the tempo of the game through his passing range. His vision and distribution allow him to dictate play from deep positions, while his tactical awareness provides crucial defensive cover. His calm presence in the middle of the park helps transition defense into attack seamlessly.",
      nationality: "English and American",
      flag: "🇬🇧 🇺🇸",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Football Journey</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Following Mika and Elliot's paths through football - the highs, lows, and everything in between
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="mika" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="mika">Mika's Profile</TabsTrigger>
                  <TabsTrigger value="elliot">Elliot's Profile</TabsTrigger>
                </TabsList>
              </div>

              {Object.entries(players).map(([playerId, player]) => (
                <TabsContent key={playerId} value={playerId} className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
                        <iframe
                          src={player.highlightVideoUrl}
                          title={`${player.name} Highlights`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full border-0"
                        ></iframe>
                      </div>

                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">{player.name}</h2>
                        <a
                          href={player.transfermarktUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                        >
                          <span>Transfermarkt Profile</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-8">{player.bio}</p>

                      <Card className="mb-8">
                        <CardHeader>
                          <CardTitle>Player Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Position</h3>
                              <p className="text-lg">{player.position}</p>
                            </div>
                            <div>
                              <h3 className="font-medium text-sm text-gray-500">Nationality</h3>
                              <p className="text-lg">
                                <span className="mr-2">{player.nationality}</span>
                                <span className="text-2xl">{player.flag}</span>
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card>
                        <CardHeader>
                          <CardTitle>Player Profile</CardTitle>
                          <CardDescription>
                            {player.name} - {player.position}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="relative aspect-square overflow-hidden rounded-lg">
                            {playerId === "mika" ? (
                              <Image
                                src="/images/football/football-thumbnail.png"
                                alt={player.name}
                                fill
                                className="object-cover"
                              />
                            ) : playerId === "elliot" ? (
                              <Image
                                src="/images/about/elliot-football.jpg"
                                alt={player.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <Image
                                src="/placeholder.svg?height=400&width=400"
                                alt={player.name}
                                fill
                                className="object-cover"
                              />
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            <a href={player.youtubeUrl} target="_blank" rel="noopener noreferrer">
                              <Button className="w-full flex items-center justify-center gap-2">
                                <span>Watch on YouTube</span>
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </a>
                            <a href={player.transfermarktUrl} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                <span>Full Transfermarkt Profile</span>
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
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

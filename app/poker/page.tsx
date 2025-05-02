import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function PokerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Poker Journey</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Exploring the world of online poker - strategies, results, and personal growth
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>Lifetime Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg mb-6">
                      <Image
                        src="/images/poker/graph-total-2025.png"
                        alt="Poker profit graph showing consistent upward trend over nearly 600,000 hands"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-500 text-center">
                      Lifetime graph tracking nearly 600,000 hands of cash game play
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Poker Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 list-disc pl-5">
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Volume:</span> Nearly 600,000 tracked hands played
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Platform:</span> Bet365 Poker
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Stakes:</span> Microstakes (10NL and 20NL)
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Game Type:</span> Exclusively cash games
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Playing Style:</span> 'Hungry Horse' exploitative approach
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Tracking:</span> PokerTracker software for hand analysis and
                        performance tracking
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>About My Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      My poker journey focuses on consistent application of exploitative strategies at the microstakes
                      level. The 'Hungry Horse' style emphasizes identifying and capitalizing on opponents' tendencies
                      rather than playing a purely GTO (Game Theory Optimal) approach.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-4">
                      This graph represents years of dedication to the craft, studying patterns, refining strategies,
                      and maintaining discipline through the inevitable swings of the game.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The story behind MK Media
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Mika</h2>
                <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                  <Image
                    src="/images/about/mika-drone.jpg"
                    alt="Mika holding a drone camera outdoors"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p>
                    Mika is a talented photographer and video editor with a passion for capturing moments that tell
                    compelling stories. With an eye for detail and composition, Mika's work spans various genres from
                    landscape and portrait photography to dynamic video productions.
                  </p>
                  <p>
                    Having worked on numerous projects over the years, Mika has developed a distinctive style that
                    combines technical precision with creative vision. This website showcases a selection of Mika's best
                    work, demonstrating versatility and artistic growth.
                  </p>
                  <div className="pt-4">
                    <Link href="/photography">
                      <Button>View Mika's Work</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">My Journey</h2>
                <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                  <Image
                    src="/images/about/elliot-football.jpg"
                    alt="Elliot playing football in a blue kit"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="space-y-4">
                  <p>
                    Alongside showcasing Mika's incredible media work, this website also documents my personal journey
                    through semi-professional football and online poker. These two passions have shaped my life in
                    profound ways, teaching me discipline, strategic thinking, and perseverance.
                  </p>
                  <p>
                    My football career has taken me through various teams and competitions, with each experience
                    contributing to my growth both as a player and as a person. Similarly, my poker journey represents a
                    fascinating intersection of skill, psychology, and calculated risk-taking.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Link href="/football">
                      <Button variant="outline">Football Journey</Button>
                    </Link>
                    <Link href="/poker">
                      <Button variant="outline">Poker Journey</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Collaboration</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  How our paths crossed and the projects we've worked on together
                </p>
              </div>
              <div className="mx-auto max-w-3xl space-y-4 text-left">
                <p>
                  Our paths crossed on the football pitches of Finland, where we first met as teammates. Both of us have
                  had adventurous football careers that have taken us to various clubs and competitions, creating a
                  shared foundation of experiences and stories.
                </p>
                <p>
                  Mika is a genius of video editing and a truly exceptional photographer. His ability to capture moments
                  and transform them into compelling visual narratives has been the perfect complement to our journey
                  together. Through his lens, ordinary moments become extraordinary memories.
                </p>
                <p>
                  We hope you enjoy exploring our work and stories. Feel free to reach out if you're interested in
                  collaborating or have any questions about what we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

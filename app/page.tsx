"use client"

import Link from "next/link"
import Image from "next/image"
import { Camera, Film, LayoutGrid, CreditCard, ChevronRight, Mail, Youtube, Instagram, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">MK Media</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1 justify-end">
            <Link href="/photography" className="transition-colors hover:text-foreground/80">
              Photography
            </Link>
            <Link href="/videography" className="transition-colors hover:text-foreground/80">
              Videography
            </Link>
            <Link href="/football" className="transition-colors hover:text-foreground/80">
              Football
            </Link>
            <Link href="/poker" className="transition-colors hover:text-foreground/80">
              Poker
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
          </nav>
          <div className="md:hidden flex flex-1 justify-end">
            <div className="relative">
              <select
                onChange={(e) => (window.location.href = e.target.value)}
                className="appearance-none bg-transparent pr-8 py-1 focus:outline-none text-sm font-medium"
                defaultValue=""
              >
                <option value="" disabled>
                  Menu
                </option>
                <option value="/photography">Photography</option>
                <option value="/videography">Videography</option>
                <option value="/football">Football</option>
                <option value="/poker">Poker</option>
                <option value="/about">About</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">MK Media</h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Showcasing Mika's exceptional photography and video editing skills and Elliot's other adventures.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/photography">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                      Explore Mika's Work
                    </Button>
                  </Link>
                  <Link href="/football">
                    <Button
                      variant="outline"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-900 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                      Elliot's Journey
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full max-w-[450px] overflow-hidden rounded-lg sm:h-[450px]">
                  <Image
                    src="/images/photography/landscapes/misty-bridge.jpg"
                    alt="Bridge emerging from fog with autumn forest"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Content</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the highlights of Mika's creative work and my personal journey
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="/photography">
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity group-hover:bg-opacity-20" />
                  <Image
                    src="/images/photography/landscapes/autumn-trees-light.jpg"
                    alt="Golden autumn trees with sunlight"
                    width={300}
                    height={300}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Camera className="h-5 w-5" />
                      <h3 className="font-semibold">Photography</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Mika's stunning photography portfolio
                    </p>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="/videography">
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity group-hover:bg-opacity-20" />
                  <Image
                    src="/images/photography/landscapes/misty-bridge.jpg"
                    alt="Cinematic bridge in fog"
                    width={300}
                    height={300}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <Film className="h-5 w-5" />
                      <h3 className="font-semibold">Videography</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mika's video editing masterpieces</p>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="/football">
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity group-hover:bg-opacity-20" />
                  <Image
                    src="/images/football/football-thumbnail.png"
                    alt="Goalkeeper in green kit kicking a ball"
                    width={300}
                    height={300}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <LayoutGrid className="h-5 w-5" />
                      <h3 className="font-semibold">Football</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our football journey</p>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <Link href="/poker">
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity group-hover:bg-opacity-20" />
                  <Image
                    src="/images/poker/rdp-poker.png"
                    alt="Poker player with sunglasses and a white cap with blue clover"
                    width={300}
                    height={300}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      <h3 className="font-semibold">Poker</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Online Poker Experiences</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Updates</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out the most recent content and stories
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                <Link href="/photography/latest">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src="/images/photography/street/red-scooter.jpg"
                      alt="Person riding a red scooter in a European city"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Urban Photography Series</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      Mika's newest photography series exploring city life and urban landscapes
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span>May 2, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Photography</span>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium">
                      View Collection
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="group relative overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md">
                <Link href="/photography/landscapes">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src="/images/photography/landscapes/winding-road.jpg"
                      alt="Winding road with morning mist in a rural landscape"
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Autumn Landscapes Collection</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      A stunning series capturing the beauty of autumn in rustic landscapes
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span>April 28, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Photography</span>
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium">
                      View Collection
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 MK Media. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm font-medium underline underline-offset-4">
              About
            </Link>
            <a
              href="mailto:mkaaedits@gmail.com"
              className="flex items-center gap-1 text-sm font-medium underline underline-offset-4"
              title="Email"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Contact</span>
            </a>
            <a
              href="https://www.youtube.com/@BigMeeekz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium underline underline-offset-4"
              title="YouTube"
            >
              <Youtube className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">YouTube</span>
            </a>
            <a
              href="https://www.instagram.com/mkaaphotos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium underline underline-offset-4"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@bigmeeekz?_t=ZN-8w1mYjHvgkY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium underline underline-offset-4"
              title="TikTok"
            >
              <Music className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">TikTok</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

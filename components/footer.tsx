import Link from "next/link"
import { Mail, Youtube, Instagram, Music } from "lucide-react"

export function Footer() {
  return (
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
  )
}

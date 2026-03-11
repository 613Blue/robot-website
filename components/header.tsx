"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center">

      <div className="flex w-full max-w-7xl items-center justify-between rounded-full bg-gradient-to-b from-black/30 to-neutral-800/70 px-5 py-2 backdrop-blur-md">

        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/icon.png" className="h-6 w-auto" />
        </Link>


        {/* button */}
        <button className="rounded-full bg-neutral-700 px-5 py-2 text-sm text-white hover:bg-neutral-600">
          联系我们
        </button>

      </div>

    </header>
  )
}

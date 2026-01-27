"use client"

import Link from "next/link";
import { useRef } from "react";
// import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const audioRef = useRef<HTMLAudioElement>(null)
  // const pathname = usePathname()
  // const router = useRouter()

  const playAudio = () => {
    audioRef.current?.play()
  }

  /*
  const hideSidebar =
    pathname.startsWith("/about/") ||
    pathname.startsWith("/projects/") ||
    pathname.startsWith("/essays/") ||
    pathname.startsWith("/favorites/")
  
  if (hideSidebar) {
    return (
      <div>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 text-black/40 cursor-pointer"
          type="button"
        >
          <img className="fill-black/40" src="/undo.svg" width={15} height={15}></img>
          <p>Index</p>
        </button>
      </div>
    )
  }
  */

  return (
    <div className="flex justify-between sm:justify-start flex-col gap-4">
      <div className="flex flex-row sm:flex-col gap-2 sm:gap-0">
        <Link href="/" className="text-right font-medium">Sahl</Link>

        <button
          onClick={playAudio}
          className="flex gap-[0.5px] items-center justify-end text-black/40 cursor-pointer"
          type="button"
        >
          <img src="/microphone.png" width={15} height={15} alt="Play audio" />
          <p>Sah-l</p>

          <audio
            ref={audioRef}
            src="https://esanna.se/arabic/audio/1471.mp3"
            preload="none"
          />
        </button>
        
      </div>
      <div className="flex flex-row sm:flex-col gap-4 sm:gap-1">
        <Link href="/about" className="text-right">About</Link>
        <Link href="/projects" className="text-right">Projects</Link>
        <Link href="/essays"   className="text-right">Writing</Link>
        <Link href="/favorites" className="text-right">Favorites</Link>
      </div>
    </div>
  );
}

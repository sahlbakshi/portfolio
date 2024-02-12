"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")

    return (
        <div className="text-lg my-10 flex gap-6">
          <Link onClick={() => setActive("home")} className={`hover:underline hover:decoration-2 ${active == "home" ? "font-bold" : ""}`} href="/">Home</Link>
          <Link onClick={() => setActive("work")}  className={`hover:underline hover:decoration-2 ${active == "work" ? "font-bold" : ""}`} href="/work">Work</Link>
          <Link onClick={() => setActive("projects")}  className={`hover:underline hover:decoration-2 ${active == "projects" ? "font-bold" : ""}`} href="/projects">Projects</Link>
          <Link onClick={() => setActive("skills")} className={`hover:underline hover:decoration-2 ${active == "skills" ? "font-bold" : ""}`} href="/skills">Skills</Link>
        </div>
    )
}

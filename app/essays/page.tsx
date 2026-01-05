import ParaLink from "@/components/paralink";

const essays = [
  {
    title: "Underdog Founders",
    href: "/essays/underdog-founders",
    date: "Jan 05, 2026",
  },
  {
    title: "Giving Advice is Flawed",
    href: "/essays/giving-advice-is-flawed",
    date: "Jan 04, 2026",
  },
  {
    title: "The Billy Beane Rule",
    href: "/essays/the-billy-beane-rule",
    date: "Dec 29, 2025",
  }
]

export default function Notes() {
  return (
    <div>
      <ul className="flex flex-col gap-1">
        {essays.map((essay, index) => (
          <li key={index} className="flex flex-row gap-2 justify-between">
            <ParaLink link={essay.title} href={essay.href}/>
            <p className="text-[#8A8A8A]">{essay.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

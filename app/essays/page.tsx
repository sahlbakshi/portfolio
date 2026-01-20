import ParaLink from "@/components/paralink";

const essays = [
  {
    title: "Giving Advice is Flawed",
    href: "/essays/giving-advice-is-flawed",
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
            <p className="text-black/40">{essay.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

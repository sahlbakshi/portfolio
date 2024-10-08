import Work from "@/components/Work"
import Project from "@/components/Project"
import ArrowLink from "@/components/ArrowLink"
import * as data from "../data"
import Container from "@/components/Container"
import Link from "next/link"

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-medium">{data.me}</div>
        <p>
          {data.about}
          <Link className="underline decoration-gray-1 hover:decoration-white-1" href={'/reddit'}>app</Link>
          .
        </p>
      </div>

      <div className="flex flex-row gap-4">
        {data.textLinks.map((item, index) => (
          <ArrowLink
            key={index}
            label={item.label}
            link={item.link}
          ></ArrowLink>
        ))}
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="text-xl font-medium text-gray-1 -mb-2">Work</div>
        {data.work.map((item, index) => (
          <Work
            key={index}
            name={item.name}
            date={item.date}
            role={item.role}
            image={item.image}
            made={item.made ? item.made : []}
            stack={item.stack ? item.stack : []}
            prefix={item.prefix ? item.prefix : ''}
          ></Work>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <div className="text-xl font-medium text-gray-1 -mb-2">Projects</div>
        {data.projects.map((item, index) => (
          <Project
            key={index}
            name={item.name}
            desc={item.desc}
            link={item.link}
            demo={item.demo ? item.demo : ''}
          ></Project>
        ))}
      </div>
    </Container>
  )
}

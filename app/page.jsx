import Work from "@/components/Work"
import Project from "@/components/Project"
import ArrowLink from "@/components/ArrowLink"
import * as data from "../data"
import Container from "@/components/Container"

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div className="text-3xl">{data.me}</div>
        <div className="flex flex-col gap-1">
          <p>{data.about}</p>
        </div>
        
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
        <div className="text-xl text-gray-1">Work</div>
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
        <div className="text-xl text-gray-1">Projects</div>
        {data.projects.map((item, index) => (
          <Project
            key={index}
            name={item.name}
            desc={item.desc}
            link={item.link}
          ></Project>
        ))}
      </div>
    </Container>
  )
}

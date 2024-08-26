import Image from "next/image"
import Tag from "./Tag"
import ArrowLink from "./ArrowLink"

const width = 46
const height = 46

function Work({name, role, date, stack = [], made = [], prefix, image}) {
  return (
    <div className="flex flex-row gap-4 items-center">
        <Image className="" src={image} width={width} height={height} alt="company logo"></Image>
        <div className="flex flex-col items-start gap-0.5">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-lg">{name}</div>
            <Tag label={date}></Tag>
          </div>
          <div className="text-gray-1">{role}</div>
          {stack.length > 0 && (
            <div className="flex flex-row gap-2">
              {stack.map((item, index) => (
                <Tag key={index} label={item} />
              ))}
            </div>
          )}
          {made.length > 0 && (
            <div className="flex flex-row gap-2 text-base text-gray-1">
              {prefix}
              {made.map((item, index) => (
                <div key={index} className="flex flex-row text-gray-1">
                  <ArrowLink 
                    label={'this'}
                    link={item}>
                  </ArrowLink>
                </div>
              ))}
            </div>
          )}
        </div>
    </div>
  )
}

export default Work

import ArrowLink from "./ArrowLink"

function Project({name, desc, link}) {
  return (
    <div className="text-lg">
      <ArrowLink
        label={name}
        link={link}
      ></ArrowLink>
      <div className="text-base text-gray-1">{desc}</div>
    </div>
  )
}

export default Project

import ArrowLink from "./ArrowLink"

function Project({name, desc, link, demo = ''}) {
  return (
    <div className="text-lg">
      <ArrowLink
        label={name}
        link={link}
      ></ArrowLink>
      <div className="text-base text-gray-1">{desc}</div>
      {demo &&
        <video className="mt-2 w-full" controls >
          <source src={'/demo/' + demo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      }
    </div>
  )
}

export default Project

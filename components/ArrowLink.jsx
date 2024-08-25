import Link from "next/link"
import Image from "next/image"

const width = 10
const height = 10

function ArrowLink({ label, link }) {
  return (
    <Link 
      href={link}
      className="underline decoration-gray-1 hover:decoration-white-1 flex flex-row gap-1 items-center group">
      {label}
      <Image
        src="/up-right-arrow.png"
        width={width}
        height={height}
        className="transition-transform duration-200 ease-in-out transform group-hover:rotate-45"
        alt="up right arrow"
      />
    </Link>
  )
}

export default ArrowLink

import * as data from '@/data'
import Link from 'next/link'
import Image from 'next/image'
import ArrowLink from './ArrowLink'

function Footer() {
  return (
    <div className="flex border-t border-gray-2 justify-center w-full">
      <div className="flex flex-row text-base px-6 my-2 sm:my-2 sm:w-max w-full justify-between items-center">
        <div className="text-gray-1">
          <ArrowLink
            label={'design from'}
            link={'https://www.peterdpong.com/'}
          ></ArrowLink>
        </div>
        <div className="text-gray-1 -ml-8">2024</div>
        <div className="flex gap-2 items-center">
          {data.iconLinks.map((item, index) => (
            <Link key={index} href={item.link}>
              <Image src={item.src} width={item.width} height={item.height} alt={item.alt}></Image>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer

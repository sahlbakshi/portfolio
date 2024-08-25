import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const me = "Sahl Bakshi"
  const about = "Studing CS at Waterloo. Building stuff on the side."
  
  const Tag = ({ label }) => {
    return (
      <div className="text-gray-1 py-1 px-2 bg-gray-2 text-sm rounded-md">{label}</div>
    )
  }

  const WorkComponent = ({name, role, date, stack = [], made = [], prefix, image}) => {
    return (
      <div className="flex flex-row gap-4 items-center">
          <Image className="rounded-sm" src={image} width={46} height={46} alt="company logo"></Image>
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
                    <LinkComponent 
                      label={'this'}
                      link={item}>
                    </LinkComponent>
                  </div>
                ))}
              </div>
            )}
          </div>
      </div>
    )
  }

  const ProjectComponent = ({name, desc, link}) => {
    return (
      <div className="text-lg">
        <LinkComponent
          label={name}
          link={link}
        ></LinkComponent>
        <div className="text-base text-gray-1">{desc}</div>
      </div>
    )
  }

  const LinkComponent = ({ label, link }) => {
    return (
      <Link 
        href={link}
        className="underline decoration-gray-1 hover:decoration-white-1 flex flex-row gap-1 items-center group">
        {label}
        <Image
          src="/up-right-arrow.png"
          width={10}
          height={10}
          className="transition-transform duration-200 ease-in-out transform group-hover:rotate-45"
          alt="up right arrow"
        />
      </Link>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-6 text-base px-6 my-6 sm:my-10 sm:w-[32rem] w-full">
        <div className="flex flex-col gap-4">
          <div className="text-3xl">{me}</div>
          <div>{about}</div>
        </div>

        <div className="flex flex-row gap-4">
          <LinkComponent label={'GitHub'} link={'https://github.com/sahlbakshi'}></LinkComponent>
          <LinkComponent label={'Twitter'} link={'https://x.com/sahlbakshi'}></LinkComponent>
        </div>

        <div className="flex flex-col gap-6 ">
          <div className="text-xl text-gray-1">Work</div>
          <WorkComponent
            name={'Stealth'}
            role={'Co-Founder'}
            date={'... Present'}
            prefix={'Builing an app because of'}
            made={['']}
            image={'/placeholder.png'}
          ></WorkComponent>
          <WorkComponent
            name={'Some Agency'}
            role={'Co-Founder'}
            prefix={'Built stuff like'}
            date={'Winter 2024'}
            made={['https://www.coldemailhackers.com/', 'https://ustc.sa/', 'https://www.topbot.dev/']}
            image={'/placeholder.png'}
          ></WorkComponent>
          <WorkComponent
            name={'Goeasy'}
            role={'Software Engineer Intern, Backend'}
            date={'Fall 2023'}
            stack={['Java', 'Spring Boot']}
            image={'/goeasy.png'}
          ></WorkComponent>
          <WorkComponent
            name={'Ford'}
            role={'Software Engineer Intern, Platform'}
            date={'Fall 2022'}
            stack={['C++', 'Unit Tests']}
            image={'/ford.png'}
          ></WorkComponent>
          <WorkComponent
            name={'Webook'}
            role={'Software Engineer Intern'}
            date={'Winter 2022'}
            stack={['Javascript', 'React']}
            image={'/webook.jpg'}
          ></WorkComponent>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-xl text-gray-1">Projects</div>
          <ProjectComponent
            name={'Straights'}
            link={'https://github.com/sahlbakshi/straights'}
            desc={'Poker-like game called straights on the CLI'}
          ></ProjectComponent>
          <ProjectComponent
            name={'Recommendation System'}
            link={'https://github.com/sahlbakshi/RecEngine'}
            desc={'Learnt how a recommendation system works'}
          ></ProjectComponent>
        </div>
      </div>

      <div className="flex border-t border-gray-2 justify-center w-full">
        <div className="flex flex-row text-base px-6 my-2 sm:my-2 sm:w-[32rem] w-full justify-between items-center">
          <div className="text-gray-1">
          <LinkComponent
            label={'design by'}
            link={'https://www.peterdpong.com/'}
          >
          </LinkComponent>
          </div>
          <div className="text-gray-1">2024</div>
          <div className="flex gap-2 items-center">
            <Link href={'https://x.com/sahlbakshi'}>
              <Image src={'/twitterx.png'} width={20} height={16} alt="twitter"></Image>
            </Link>
            <Link href={'https://github.com/sahlbakshi'}>
              <Image src={'/github.png'} width={24} height={24} alt="github"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

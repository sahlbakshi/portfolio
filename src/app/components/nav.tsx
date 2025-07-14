import Link from "next/link";

interface NavbarProps {
  page: string;
}

export default function Navbar({ page }: NavbarProps) {

  return (
    <div className="w-full sm:flex justify-between items-start text-[15.5px]">
      <div className="sm:mb-0 mb-4">
        <Link href={'/'} className="text-my_black">Sahl Bakshi</Link>
        <div className={page === "home" ? "text-my_gray_200" : "text-my_gray_200"}>Updated Jun 10, 2025</div>
      </div>

      <div className="flex gap-4">
          <Link className="text-my_gray_200 hover:text-my_black" target="_blank" href={'https://x.com/sahlbakshi'}>X</Link>
          <Link className="text-my_gray_200 hover:text-my_black" target="_blank" href={'https://www.linkedin.com/in/sahl-bakshi/'}>LinkedIn</Link>
          <Link className="text-my_gray_200 hover:text-my_black" target="_blank" href={'https://github.com/sahlbakshi'}>GitHub</Link>
          <Link className="text-my_gray_200 hover:text-my_black" target="_blank" href={'https://cal.com/'}>Cal</Link>
      </div>
      {
        /*
        <div className="flex gap-4">
          <Link href={'/blog'} className={page === "blog" ? "" : "text-my_gray"}>Blog</Link>
          <Link href={'/work'} className={page === "work" ? "" : "text-my_gray"}>Projects</Link>
        </div>
        */
      }
    </div>
  )
}

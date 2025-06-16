import Link from "next/link";

interface NavbarProps {
  page: string;
}

export default function Navbar({ page }: NavbarProps) {

  return (
    <div className="w-full sm:flex justify-between items-start text-[15.5px]">
      <div className="sm:mb-0 mb-4">
        <Link href={'/'} className={page === "home" ? "" : "text-linkGray"}>Sahl Bakshi</Link>
        <div className="text-linkGray">Updated Jun 10, 2025</div>
      </div>

      <div className="flex gap-4">
          <Link className="text-linkBlue underline" href={'https://www.linkedin.com/in/sahl-bakshi/'}>LinkedIn</Link>
          <Link className="text-linkBlue underline" href={'https://github.com/sahlbakshi'}>GitHub</Link>
          <Link className="text-linkBlue underline" href={'https://x.com/sahlbakshi'}>X/Twitter</Link>
      </div>
      {
        /*
        <div className="flex gap-4">
          <Link href={'/blog'} className={page === "blog" ? "" : "text-linkGray"}>Blog</Link>
          <Link href={'/work'} className={page === "work" ? "" : "text-linkGray"}>Projects</Link>
        </div>
        */
      }
    </div>
  )
}

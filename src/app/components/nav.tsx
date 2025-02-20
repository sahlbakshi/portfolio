import Link from "next/link";

interface NavbarProps {
  page: string;
}

export default function Navbar({ page }: NavbarProps) {

  return (
    <div className="w-full flex justify-between">
      <Link href={'/'} className={page === "home" ? "" : "text-linkGray"}>Sahl Bakshi</Link>

      <div className="flex gap-4">
          <Link className="text-linkGray underline" href={'https://www.linkedin.com/in/sahl-bakshi/'}>LinkedIn</Link>
          <Link className="text-linkGray underline" href={'https://github.com/sahlbakshi'}>GitHub</Link>
          <Link className="text-linkGray underline" href={'https://x.com/sahlbakshi'}>Twitter</Link>
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

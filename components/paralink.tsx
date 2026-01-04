import Link from "next/link";

type ParaLinkProps = {
  link: string;
  href: string;
};

export default function ParaLink({ link, href }: ParaLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="underline underline-offset-2 decoration-[#D6D6D6] hover:text-[#0000FF] hover:decoration-[#0000FF]"
    >
      {link}
    </Link>
  );
}

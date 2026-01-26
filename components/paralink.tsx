import Link from "next/link";

interface ParaLinkProps {
  link: string;
  href: string;
  external?: boolean;
}

export default function ParaLink({ link, href, external = false }: ParaLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      className="decoration-[1px] decoration-black/10 underline underline-offset-2 hover:text-[#0000FF] hover:decoration-[#0000FF]"
    >
      {link}
    </Link>
  );
}

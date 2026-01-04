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
      className="underline underline-offset-2 decoration-[#999999] hover:text-[#0000FF] hover:decoration-[#0000FF]"
    >
      {link}
    </Link>
  );
}

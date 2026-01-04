import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-row justify-between sm:justify-start sm:flex-col gap-4">
      <Link href="/" className="text-right font-medium">Sahl</Link>
      <div className="flex flex-row sm:flex-col gap-4 sm:gap-1">
        <Link href="/about" className="text-right">About</Link>
        <Link href="/projects" className="text-right">Projects</Link>
        <Link href="/writings" className="text-right">Writing</Link>
        <Link href="/favorites" className="text-right">Favorites</Link>
      </div>
    </div>
  );
}

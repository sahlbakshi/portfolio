import Link from "next/link";

export default function NotFound() {
  return (
    <div>    
      <p>Page not found</p>
      <Link
        href="/"
        className="underline underline-offset-2 decoration-gray-300 hover:text-[#0000FF] hover:decoration-[#0000FF]"
      >
        Go home 
      </Link>
    </div>
  );
}

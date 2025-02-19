import Navbar from "../../../components/nav";
import Container from "../../../components/container";
import Link from "next/link";

export default function Blog() {
  return (
    <Container>
      <Navbar page="blog"></Navbar>
      <div className="w-full flex flex-col gap-4">
        <ul className="list-disc gap-2 flex flex-col text-md pl-4">
          <li className="pl-2">
            <Link href={'/blog/why-computer-science'} className="text-linkBlue underline text-md">Why Computer Science</Link>
            <p className="text-linkGray text-sm">Feb 19, 2025</p>
          </li>
          <li className="pl-2">
            <Link href={'/blog'} className="text-linkBlue underline text-md">How Coinbase makes money</Link>
            <p className="text-linkGray text-sm">Feb 19, 2025</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}

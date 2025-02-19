import Navbar from "./components/nav";
import Container from "./components/container";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <Navbar page="home"></Navbar>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-md">
          <p>Currently a computer science student at Waterloo. {"I've"} been a 2x SWE intern at Ford, Webook.com and early stage VC backed startup where I worked on product and engineering.</p>
          <p>I also designed and developed a consumer app, getting over 20k downloads and 5k MRR. You can read more about it here.</p>
        </div>

        <div className="flex flex-col gap-0.5 text-md">
          <Link className="text-linkGray underline" href={'https://www.linkedin.com/in/sahl-bakshi/'}>LinkedIn</Link>
          <Link className="text-linkGray underline" href={'https://github.com/sahlbakshi'}>GitHub</Link>
          <Link className="text-linkGray underline" href={'https://x.com/sahlbakshi'}>Twitter</Link>
        </div>
      </div>
    </Container>
  );
}

import Navbar from "./components/nav";
import Container from "./components/container";
import Link from "next/link";
import ModalTrigger from "./components/modal";

export default function Page() {

  const days = Math.ceil((new Date('2025-05-30').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Container>
      <Navbar page="home"></Navbar>
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-md">
          <p>
            Currently a computer science student at the University of Waterloo and will be graduating in exactly {days} days. {" "}
          </p>
          <p>
            {"I've"} been a 2x SWE intern at Ford, Webook.com and pre-seed VC backed startup, NiaHealth where I worked across product and engineering (0→1). {" "}
            Here's a slack {" "}
            <ModalTrigger
              label={{ text: 'message' }}
              modalContent={
                <img 
                  src="/slack-message.png"
                  alt="Slack message"
                  className="max-w-full rounded-md"
                />
              }
            ></ModalTrigger>
            {" "} summarizing my work from the CTO.
          </p>
          <p>
            I also designed and developed a {" "}
            <Link className="text-linkGray underline" href={'https://apps.apple.com/us/app/hairloss-ai-scan-hair-health/id6563141135'}>consumer app</Link>, 
            getting over 25k downloads with 5k MRR (90% profit). Before that I dabbled with some agency work building landing pages and applications for {" "}
            <Link className="text-linkGray underline" href={'https://ustc.sa/en'}>ustc</Link>{" "}and{" "}
            <Link className="text-linkGray underline" href={'https://www.coldemailhackers.com/'}>cold email hackers</Link>.
          </p>
          <p>
           You can reach out to me using any of my links above or by {" "}
           <Link className="text-linkGray underline" href={'mailto:sahl.bakshi@uwaterloo.ca'}>email</Link>.
          </p>
        </div>
        {
          /*
          <div className="flex flex-col gap-0.5 text-md">
          <Link className="text-linkGray underline" href={'https://www.linkedin.com/in/sahl-bakshi/'}>LinkedIn</Link>
          <Link className="text-linkGray underline" href={'https://github.com/sahlbakshi'}>GitHub</Link>
          <Link className="text-linkGray underline" href={'https://x.com/sahlbakshi'}>Twitter</Link>
          </div>
          */
        }
      </div>
    </Container>
  );
}

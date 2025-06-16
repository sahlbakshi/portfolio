"use client"

import Navbar from "./components/nav";
import Container from "./components/container";
import Link from "next/link";
import ModalTrigger from "./components/modal";
import Image from "next/image";

export default function Page() {
  return (
    <Container>
      <Navbar page="home"></Navbar>
      <div className="w-full flex flex-col gap-8 text-[15.5px]">
        <div className="flex flex-col gap-4 text-md">
          <p>
            I just graduated with a computer science degree from the University of Waterloo and am looking for roles in engineering and product.{" "}
          </p>
          <div>
            {"I've"} been a 2x SWE intern at Ford, Webook.com and a VC backed medtech startup, NiaHealth where I worked across product and engineering (0→1). {" "}
            {"Here's"} a slack {" "}
            <ModalTrigger
              label={{ text: 'message' }}
              modalContent={
                <Image
                  src="/slack-message.png"
                  alt="Slack message"
                  className="w-full rounded-none"
                  width={200}
                  height={200}
                />
              }
            ></ModalTrigger>
            {" "} summarizing some of my work from the CTO.
          </div>
          <p>
            I also designed and shipped a {" "}
            <Link className="text-linkBlue underline" href={'https://apps.apple.com/us/app/hairloss-ai-scan-hair-health/id6563141135'}>consumer app</Link> 
            {" "} that was acquired for $90,000 after reaching 40k downloads with 5k MRR (90% profit) {"in <6 months"}.
          </p>
          <p>
           You can reach out to me using any of the links above or by {" "}
           <Link className="text-linkBlue underline" href={'mailto:sahl.bakshi@uwaterloo.ca'}>email</Link>.
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

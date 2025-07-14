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
      <div className="w-full flex flex-col gap-8 text-md text-my_black">
        <div className="flex flex-col gap-4 text-md">
          <p>
            I recently graduated with a computer science degree from the University of Waterloo and am actively seeking full time roles.{" "}
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
            <Link className="text-my_blue underline" href={'https://apps.apple.com/us/app/hairloss-ai-scan-hair-health/id6563141135'}>consumer app</Link> 
            {" "} that was acquired for $90,000 after reaching 40k downloads with 5k MRR (90% profit) {"in <6 months"}.
          </p>
          <p>
            Feel free to reach out using any of the links or at {" "}
            <Link className="text-my_blue underline" href={'mailto:saa2baks@uwaterloo.ca'}>saa2baks@uwaterloo.ca</Link>.
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

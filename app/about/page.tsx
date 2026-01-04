import { Expandable} from "@/components/expandable";
import ParaLink from "@/components/paralink";

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        I'm a recent computer science graduate from the University of Waterloo, actively seeking full-time roles.
      </p>
      <p>
        I've been a 2x SWE intern at Ford, Webook.com, and a VC backed medtech startup
        where I worked across product and engineering (0→1). Here's a slack{" "}
        <Expandable
          label="message"
          suffix={", summarizing some of my work from the CTO."}
        >
          <img className="w-full h-auto" src="/slack.png" alt="Slack"/>
        </Expandable>
      </p>
      <p>
        {`Last year, I co-founded a consumer app that was acquired for $90,000 after reaching 40k downloads and 5k MRR (90% profit) in <6 months.`}
      </p>
      <p>
        Feel free to reach out on <ParaLink link="X" href="https://www.x.com/sahlbakshi"/>, <ParaLink link="LinkedIn" href="https://www.linkedin.com/in/sahl-bakshi/"/>, or <ParaLink link="Email" href="mailto:saa2baks@uwaterloo.ca"/>.
      </p>
    </div>
  );
}

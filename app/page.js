import Link from "next/link"

export default function Home() {
  const me = "Sahl Bakshi"
  const about = "Hi, I'm a Computer Science student at the University of Waterloo - passionate about building great software and products from start to finish."
  
  const workComponent = (name, role, date, stack) => {
    return (
      <div className="grid sm:grid-cols-4 grid-cols-1">
        <div className="col-span-1">{date}</div>
        <div className="col-span-3 whitespace-normal">
          <div className="text-white">{role} - {name}</div>
          <div>{stack}</div>
        </div>
      </div>
    )
  }

  // {projectComponent("BattleShip", "", "The classic game of battleship", "2022", "Kotlin • Gradle • JavaFX", "https://github.com/sahlbakshi/battleship")}

  const projectComponent = (name, image, desc, date, stack, github) => {
    return (
      <div className="grid sm:grid-cols-4 grid-cols-1">
        <div className="col-span-1">{date}</div>
        <div className="col-span-3 flex flex-col gap-1">
          <img className="w-10" src={image}></img>
          <Link href={github} className="text-white underline hover:text-blue-500">{name}</Link>
          <div>{desc}</div>
          <div>{stack}</div>
        </div>
      </div>
    )
  }

  const linkComponent = (name, link, display) => {
    return (
      <div className="grid sm:grid-cols-4 grid-cols-1">
        <div className="col-span-1">{name}</div>
        <Link className="flex gap-4 text-white col-span-3 underline hover:text-blue-500" href={link}>{display}</Link>
      </div>
    )
  }

  const skillsComponent = (name, skills) => {
    return (
      <div className="grid sm:grid-cols-4 grid-cols-1">
        <div className="col-span-1">{name}</div>
        <div className="text-white col-span-3">{skills}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 sm:my-10 text-sm px-4 my-6">
      
      <div className="text-white text-2xl">{me}</div>

      <div className="flex flex-col gap-4 mb-4">
        <div className="text-white">About</div>
        <div>{about}</div>
      </div>

      <div className="flex flex-col gap-8 mb-4">
        <div className="text-white">Work Experience</div>
        {workComponent("Algo Consulting", "Founder, Engineer", "Ongoing", "NextJS • Tailwind CSS • GCP • Supabase • Communication")}
        {workComponent("Goeasy LTD", "Backend Engineer Intern", "Fall 2023", "Java • SQL • Spring • REST APIs")}
        {workComponent("Ford Motor Company", "Software Developer Intern", "Fall 2022", "C++ • Jenkins • Unit Testing")}
        {workComponent("Uxbert Labs", "Software Engineer Intern", "Winter 2022", "React • Node • Javascript • HTML/CSS")}
      </div>

      <div className="flex flex-col gap-8 mb-4">
        <div className="text-white">Projects</div>
        {projectComponent("Straights", "", "Poker like game called straights", "2021", "C++ • UML • Object Oriented Programming", "https://github.com/sahlbakshi/straights")}
        {projectComponent("Hoops", "", "Fullstack NBA statistics web app developed for CS 348 database project", "2023", "TypeScript • Next JS • PotsgreSQL", "https://github.com/KrammyGod/hoops")}
        {projectComponent("RecEngine", "", "Recommedation System for Movies", "2024", "Python • Jupyter Notebook • Pandas • Seaborn", "https://github.com/sahlbakshi/RecEngine")}
        {projectComponent("Human vs AI Audio", "", "Investigating fidelity of generative AI in voice recreation", "Ongoing", "Octave GUI • Audacity", "https://github.com/sahlbakshi/audioanalysis")}
      </div>

      <div className="flex flex-col gap-8 mb-4">
        <div className="text-white">Skills</div>
        {skillsComponent("Languages", "C/C++ • Java • Python • HTML/CSS • JavaScript • TypeScript • Kotlin • SQL • Bash")}
        {skillsComponent("Some Tools", "React • Next JS • Auth.js • Node • Git • GDB • Valgrind • Firebase • Spring Boot • Android Studio • MongoDB • PostgresSQL • Supabase • Tailwind CSS")}
      </div>

      <div className="flex flex-col gap-8 mb-4">
        <div className="text-white">Links</div>
        {linkComponent("GitHub", "https://github.com/sahlbakshi", "github/sahlbakshi")}
        {linkComponent("LinkedIn", "https://www.linkedin.com/in/sahl-bakshi/", "linkedin/sahlbakshi")}
        {linkComponent("Instagram", "https://instagram.com/sahlbakshi", "instagram/sahlbakshi")}
        {linkComponent("Email", "mailto:sahl.bakshi@uwaterloo.ca", "email/saa2baks@uwaterloo.ca")}
      </div>
    </div>
  );
}

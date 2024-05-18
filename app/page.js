import { ToolsCard } from "./components/tools-card";
import { ProjectCard } from "./components/project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <div className=" bg-slate-200 text-center justify-between pt-10" style={{ height: '20rem' }}>
        <p className="text-purple-400 text-shadow text-4xl mb-3 mt-3  sm:text-5xl md:text-6xl" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>mark masoumi</p>
        <p className=" text-purple-500 font-bold text-3xl sm:text-4xl" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>full stack web dev</p>
        {/* Contact icons */}
        <div className="flex flex-row justify-center gap-4 mt-10 md:gap-7">
          <div className="flex flex-col items-center justify-center">
            <a href="/resume.pdf" download="Mark_Masoumi_Resume.pdf">
              <FontAwesomeIcon icon={faFileArrowDown} color='black' className='h-12 w-12 text-slate-500 hover:text-purple-400' />
            </a>
            <a href="/resume.pdf" download="Mark_Masoumi_Resume.pdf">
              <p className="font-bold text-sm text-purple-700">CV</p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href="https://github.com/masoumim">
              <FontAwesomeIcon icon={faGithub} color='black' className='h-12 w-12 text-slate-500 hover:text-purple-400' />
            </Link>
            <Link href="https://github.com/masoumim"><p className="font-bold text-sm text-purple-700">Github</p></Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href="https://www.linkedin.com/in/mark-masoumi/">
              <FontAwesomeIcon icon={faLinkedin} color='black' className='h-12 w-12 text-slate-500 hover:text-purple-400' />
            </Link>
            <Link href="https://www.linkedin.com/in/mark-masoumi/" className="font-bold text-sm text-purple-700">LinkedIn</Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link href="mailto:masoumi.mark@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} color='black' className='h-12 w-12 text-slate-500 hover:text-purple-400' />
            </Link>
            <Link href="mailto:masoumi.mark@gmail.com"><p className="font-bold text-sm text-purple-700">Email</p></Link>
          </div>
        </div>
      </div>
      {/* Tools */}
      <div className="flex flex-wrap justify-center gap-5 py-10 max-w-7xl mx-auto">
        <ToolsCard title="Database" tools={["postgresql", "prisma", "mongodb"]} />
        <ToolsCard title="Backend" tools={["nodejs", "express", "springboot"]} />
        <ToolsCard title="Frontend" tools={["nextjs", "react", "redux"]} />
        <ToolsCard title="Styling" tools={["tailwindcss", "daisyui", "bootstrap"]} />
        <ToolsCard title="Languages" tools={["javascript", "html", "css"]} />
        <ToolsCard title="Testing" tools={["jest", "mocha", "reacttestinglibrary"]} />
        <ToolsCard title="Deployment" tools={["heroku", "vercel", "azure"]} />
        <ToolsCard title="Tools" tools={["figma", "github", "postman"]} />
      </div>
      {/* Add more cards here, they will automatically wrap to the next row after 4 cards */}
      {/* </div> */}
      {/* Projects */}
      {/* <div className="flex flex-wrap justify-center gap-5 py-10 max-w-7xl mx-auto"> */}
      {/* <ProjectCard project={"The Electronics Store"} /> */}
      {/* <ProjectCard project={"The Electronics Store API"} /> */}
      {/* <ProjectCard project={"Reddit Game Posts"} /> */}
      {/* <ProjectCard project={"Jamming App"} /> */}
      {/* <ProjectCard project={"Console Wars"} /> */}
      {/* <ProjectCard project={"Flash Cards"} /> */}
      {/* Add more cards here, they will automatically wrap to the next row after 4 cards */}
      {/* </div> */}
      {/* About / Contact */}
      <div>
        {/* <p>About / Contact</p> */}
      </div>
    </>
  );
}
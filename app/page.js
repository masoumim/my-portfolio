import { ToolsCard } from "./components/tools-card";
import { ProjectCard } from "./components/project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutCard } from "./components/about-card";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <div className=" bg-slate-200 text-center justify-between pt-10" style={{ height: '20rem' }}>
        <p className="text-purple-400 text-shadow text-5xl mb-3 mt-3  sm:text-5xl md:text-6xl" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>mark masoumi</p>
        <p className=" text-purple-500 font-bold text-3xl sm:text-4xl" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}>full stack web dev</p>
        {/* Contact icons */}
        <div className="flex flex-row justify-center gap-4 mt-10 md:gap-7">
          <div className="flex flex-col items-center justify-center">
            <a href="/markmasoumi_resume_webdev.pdf" download="markmasoumi_resume_webdev.pdf">
              <FontAwesomeIcon icon={faFileArrowDown} color='black' className='h-12 w-12 text-slate-500 hover:text-purple-400' />
            </a>
            <a href="/markmasoumi_resume_webdev.pdf" download="markmasoumi_resume_webdev.pdf">
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
      {/* About / Contact */}
      <div className="mb-20">
        <h1 className=" text-2xl font-bold text-purple-500 text-center my-6">About</h1>
        <AboutCard />
      </div>
      {/* Tools */}
      <h1 className=" text-2xl font-bold text-purple-500 text-center mt-10">Tools & Tech</h1>
      <div className="flex flex-wrap justify-center gap-5 py-10 max-w-6xl mx-auto">
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
      {/* Projects */}
      <h1 className=" text-2xl font-bold text-purple-500 text-center mt-9">Projects</h1>
      <div className="flex flex-wrap justify-center gap-5 py-10 max-w-7xl mb-20 mx-auto">
        <ProjectCard project={"The Electronics Store"} />
        <ProjectCard project={"The Electronics Store API"} />
        <ProjectCard project={"Reddit Game Posts"} />
        <ProjectCard project={"Jamming App"} />
        <ProjectCard project={"Console Wars"} />
        <ProjectCard project={"Flash Cards"} />
        {/* Add more cards here, they will automatically wrap to the next row after 4 cards */}
      </div>
    </>
  );
}
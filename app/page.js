import { ToolsCard } from "./components/tools-card";
import { ProjectCard } from "./components/project-card";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <div className=" bg-slate-100 text-center justify-between pt-10" style={{ height: '20rem' }}>
        <p className="text-purple-400 text-8xl">mark masoumi</p>
        <p className=" text-purple-500 font-bold text-7xl">full stack web dev</p>
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
        <ToolsCard title="Tools & Utilities" tools={["figma", "github", "postman"]} />
        {/* Add more cards here, they will automatically wrap to the next row after 4 cards */}
      </div>
      {/* Projects */}
      <div className="flex flex-wrap justify-center gap-5 py-10 max-w-7xl mx-auto">
        <ProjectCard project={"The Electronics Store"} />
        <ProjectCard project={"The Electronics Store API"} />
      </div>
      {/* About / Contact */}
      <div>
        <p>About / Contact</p>
      </div>
    </>
  );
}
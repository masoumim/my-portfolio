import { ToolsCard } from "./components/tools-card";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <div className=" bg-slate-50 text-center pt-10" style={{ height: '20rem' }}>
        <p className="text-purple-400 text-8xl">mark masoumi</p>
        <p className=" text-purple-500 font-bold text-7xl">full stack web dev</p>
      </div>
      {/* Tools */}
      <div className=" bg-slate-100" style={{ height: '40rem' }}>
        <ToolsCard title="Frontend" tools={["react", "tailwindcss", "nextjs"]} />
      </div>
      {/* Projects */}
      <div>
        <p>Projects</p>
      </div>
      {/* About / Contact */}
      <div>
        <p>About / Contact</p>
      </div>
    </>
  );
}

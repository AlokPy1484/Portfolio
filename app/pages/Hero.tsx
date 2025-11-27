"use client";

import { Vortex } from "@/components/ui/vortex";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";


function Hero(){

    return(
    <div className="flex w-screen h-full overflow-x-hidden bg-black">
      <Vortex rangeY={800} className="flex flex-col justify-center p-5 md:p-25 items-start h-screen ">
      <div className="flex flex-row gap-2 md:gap-5 mt-440 md:mt-150 text-7xl text-white text-left">Hi, I'm
        <PointerHighlight rectangleClassName='border-white'>
        <div>Alok</div>
        </PointerHighlight>
        <ContainerTextFlip words={["Developer","Freelancer","Programmer"]} className="hidden md:flex mt-5 justify-center items-center"/></div>
              
      <ContainerTextFlip words={["Full Stack Developer","Website Freelancer","Compitative Programmer"]} className="flex md:hidden mt-5 justify-center items-center"/>
      <div className="w-90 md:w-200 mt-5  md:text-2xl text-zinc-400">
        I design and develop efficient, secure, and scalable full-stack web solutions — blending clean design, modern technology, and reliable performance.
        </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-5 md:gap-30 mt-45 md:mt-20">
       {/* <ProjectCard title="BlogNest" description="A modern, full-stack blogging platform for sharing ideas seamlessly." image={project1} repo="www.google.com"/>
       <ProjectCard title="BlogNest" description="A modern, full-stack blogging platform for sharing ideas seamlessly." image={project1}/>
       <ProjectCard title="BlogNest" description="A modern, full-stack blogging platform for sharing ideas seamlessly." image={project1}/> */}
          <div className="bg-black border-2 rounded-md px-2 border-zinc-900">
            <div className="flex flex-col justify-center items-center w-80 p-2  rounded-md bg-black">
                <div className=" text-2xl  text-white w-full">BlogNest</div>
                <div className="text-sm text-zinc-600 py-2">A modern, full-stack blogging platform for sharing ideas seamlessly.</div>
                <Image src={project1} alt='project1' width={500} className="rounded-xl border border-b-3 border-r-2 py-4 grayscale hover:grayscale-0"/>
                <div className="flex flex-row justify-between items-center py-4 w-full">
                    <Button variant="ghost" className="text-white"><a href="https://github.com/AlokPy1484/BlogNestUI">GitHub</a> </Button>
                    <Button className="bg-white hover:bg-black text-black  hover:text-white"><a href="https://blognest-landing.vercel.app">Live Preview</a></Button>
                </div>
            </div>
            </div>
                      <div className="bg-black border-2 rounded-md px-2 border-zinc-900">
            <div className="flex flex-col justify-center items-center w-80 p-2  rounded-md bg-black">
                <div className=" text-2xl  text-white w-full">Plex Visuals</div>
                <div className="text-sm text-zinc-600 py-2">A sleek, responsive landing page built to convert visitors effectively.</div>
                <Image src={project2} alt='project1' width={500} className="rounded-xl border border-b-3 border-r-2 py-4 grayscale hover:grayscale-0"/>
                <div className="flex flex-row justify-between items-center py-4 w-full">
                    <Button variant="ghost" className="text-white"><a href="https://github.com/AlokPy1484/plexFreelance">GitHub</a> </Button>
                    <Button className="bg-white hover:bg-black text-black  hover:text-white"><a href="https://plex-freelance.vercel.app">Live Preview</a></Button>
                </div>
            </div>
            </div>
                      <div className="bg-black border-2 rounded-md px-2 border-zinc-900">
            <div className="flex flex-col justify-center items-center w-80 p-2  rounded-md bg-black">
                <div className=" text-2xl  text-white w-full">Vibhava</div>
                <div className="text-sm text-zinc-600 py-2">An innovative solution built for Smart India Hackathon to tackle real-world challenges.</div>
                <Image src={project3} alt='project1' width={500} className="rounded-xl border border-b-3 border-r-2 py-4 grayscale hover:grayscale-0"/>
                <div className="flex flex-row justify-between items-center py-4 w-full">
                    <Button variant="ghost" className="text-white"><a href="https://github.com/AlokPy1484/Vibhava-nsa">GitHub</a> </Button>
                    <Button className="bg-white hover:bg-black text-black  hover:text-white"><a href="https://alokpy1484.github.io/Vibhava-nsa/">Live Preview</a></Button>
                </div>
            </div>
            </div>


      </div>
      </Vortex>
      </div>

    )
}

export default Hero
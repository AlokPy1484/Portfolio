"use client";

import { Vortex } from "@/components/ui/vortex";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Image from "next/image";
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"


function Hero(){

    return(
    <div className="flex w-screen h-full overflow-x-hidden bg-black">
      <Vortex rangeY={800} className=" flex flex-col justify-center p-5 md:p-25 items-start h-screen ">
      <div className="flex flex-row gap-2 md:gap-5 mt-500 md:mt-150 text-7xl text-white text-left">Hi, I'm
        <PointerHighlight rectangleClassName='border-white'>
        <div>Alok</div>
        </PointerHighlight>
        <ContainerTextFlip words={["Developer","Freelancer","Programmer"]} className="hidden md:flex mt-5 justify-center items-center"/></div>
              
      <ContainerTextFlip words={["Full Stack Developer","Website Freelancer","Compitative Programmer"]} className="flex md:hidden mt-5 justify-center items-center"/>
      <div className="w-90 md:w-200 mt-5  md:text-2xl text-zinc-400">
        I design and develop efficient, secure, and scalable full-stack web solutions — blending clean design, modern technology, and reliable performance.
        </div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-5 md:gap-30 mt-5 md:mt-20">
        <div>
        <CardContainer className="inter-var w-80 rounded-xl border border-b-3 border-r-3">
          <CardBody className="bg-black  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-zinc-600/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white">
              Blognest
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              A modern, full-stack blogging platform for sharing ideas seamlessly.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image src={project1} alt='project1' width={500} className="rounded-xl border border-b-3 border-r-2 grayscale hover:grayscale-0"/>
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/AlokPy1484/BlogNestUI"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white  dark:text-white"
              >
                Github →
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href="https://blog-nest-ui-98u2.vercel.app"
                className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold">
                Live Preview
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        </div>
             <div>
        <CardContainer className="inter-var w-80 rounded-xl border border-b-3 border-r-3">
          <CardBody className="bg-black  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-zinc-600/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white">
              Plex Visuals
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
    A sleek, responsive landing page built to convert visitors effectively.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image src={project2} alt='project1' width={500} className="rounded-xl border border-b-3 border-r-2 grayscale hover:grayscale-0"/>
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/AlokPy1484/plexFreelance"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white  dark:text-white"
              >
                Github →
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href="https://plex-freelance.vercel.app"
                className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                Live Preview
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        </div>
             <div>
        <CardContainer className="inter-var w-80 rounded-xl border border-b-3 border-r-3">
          <CardBody className="bg-black  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-zinc-600/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white">
              Vibhava
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
             An innovative solution built for Smart India Hackathon to tackle real-world challenges.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image src={project3} alt='project1' width={500} className="rounded-xl border border-b-3 border-r-2 grayscale hover:grayscale-0"/>
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/AlokPy1484/Vibhava-nsa"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white  dark:text-white"
              >
                Github →
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href="https://alokpy1484.github.io/Vibhava-nsa/"
                className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                Live Preview
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        </div>
      </div>
      </Vortex>
      </div>

    )
}

export default Hero
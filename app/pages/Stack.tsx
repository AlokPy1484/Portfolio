import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../components/ui/text-reveal-card";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";
import tech1 from "../../assets/tech1.png"
import tech2 from "../../assets/tech2.png"
import tech3 from "../../assets/tech3.png"
import tech4 from "../../assets/tech4.png"
import tech5 from "../../assets/tech5.png"
import tech6 from "../../assets/tech6.png"
import tech7 from "../../assets/tech7.png"
import tech8 from "../../assets/tech8.png"
import tech9 from "../../assets/tech9.png"

function Stack(){

    return(
        <div className="flex flex-col justify-center items-center gap-20 p-5 w-screen h-full bg-black text-white">
            <div className="text-7xl  text-center">Tech Stack</div>

            <div className="flex flex-wrap justify-center md:justify-between items-center gap-15 w-[90vw] md:w-[65vw] m-5 p-5 bg-zinc-950">
                <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech1} alt="profile image" width={50} height={50} />HTML</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech2} alt="profile image" width={50} height={50} />CSS</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech3} alt="profile image" width={50} height={50} />Javascript</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech4} alt="profile image" width={50} height={50} />Typescript</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech5} alt="profile image" width={50} height={50} />ReactJS</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech6} alt="profile image" width={50} height={50} />NextJS</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech7} alt="profile image" width={50} height={50} />Python</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech8} alt="profile image" width={50} height={50} />Django</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl bg-zinc-800">
                    <Image src={tech9} alt="profile image" width={50} height={50} />Docker</div>
                 <div className="flex flex-col justify-center items-center gap-2 w-30 h-30 rounded-xl text-2xl text-zinc-600 bg-zinc-800">cooking...</div>

                

            </div>
        </div>
    )
}
export default Stack

export const projects = [
    {title:"React Native"},
    {title:"React"},
    {title:"React"},
    {title:"React"},
    {title:"React"},
    {title:"React"},
    {title:"React"},
    {title:"React"},
    {title:"React"},
]
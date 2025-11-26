import { Button } from "@/components/ui/button"
import Image from "next/image"
import project1 from "../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"
import Link from "next/link"


interface Props{
    title: string,
    description: string,
    image: string,
    repo: string,
    live: string
}

function ProjectCard(props:Props){


    return(
            <div className="bg-black border-2 rounded-md px-2 border-zinc-900">
            <div className="flex flex-col justify-center items-center w-80 p-2  rounded-md bg-black">
                <div className=" text-2xl  text-white w-full">{props.title}</div>
                <div className="text-sm text-zinc-600 py-2">{props.description}</div>
                <Image src={props.image} alt='project1' width={500} className="rounded-xl border border-b-3 border-r-2 py-4 grayscale hover:grayscale-0"/>
                <div className="flex flex-row justify-between items-center py-4 w-full">
                    <Button variant="ghost" className="text-white"><Link href={props.repo}></Link> GitHub</Button>
                    <Button className="bg-white hover:bg-black text-black  hover:text-white">Live Preview</Button>
                </div>
            </div>
            </div>
    )
}

export default ProjectCard
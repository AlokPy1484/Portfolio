import { CometCard } from "@/components/ui/comet-card"
import { LampContainer } from "@/components/ui/lamp"
import about1 from "@/assets/about1.webp"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"


function About(){

    return(
        <div className="flex flex-col items-center w-screen h-full pt-10 bg-black">
            <div className="text-7xl text-white">About Me</div>
            <div className="flex flex-col md:flex-row w-[80vw] gap-10 md:gap-40 justify-center items-center">
                <div>
                    <CometCard>
                        <div className="my-10 flex w-80 h-100 flex-col justify-center items-center gap-3 rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4 text-white">
                            <Image src={about1} alt="profile image" width={100} height={100} />
                            <div>
                            <div className="text-5xl text-white font-bold">Alok Pandey</div>
                            <div className="text-white text-center">Full Stack Developer</div>
                            </div>
                            <div className="mt-5  text-left w-full ">
                                <div className="text-2xl font-bold">Contact</div>
                                <div className="flex flex-row items-center gap-3 my-4"><Phone></Phone>+91-6386863310</div>
                                <div className="flex flex-row items-center gap-3 my-4"><Mail></Mail>alokpandey0697@gmail.com</div>
                                <div className="flex flex-row items-center gap-3 my-4"><Linkedin></Linkedin>LinkedIn</div>
                            </div>
                        </div>
                    </CometCard>
                </div>
                <div className="flex flex-col justify-start items-center gap-5 w-70 pb-10 md:w-200">
                    <div className=" text-white text-3xl md:text-5xl">Exploring Technology, Creativity, and Real-World Impact</div>
                    <div className="text-white text-sm md:text-2xl leading-relaxed">I’m a passionate full-stack developer and open-source contributor who loves building scalable, secure, and user-friendly web applications. I enjoy solving real-world problems through clean code, creative design, and continuous learning across modern web and backend technologies.</div>
                </div>
            </div>
        </div>
    )
}
export default About
"use client"

import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils"
import Image from "next/image"
import connect1 from "../../assets/connect1.png"
import connect2 from "../../assets/connect2.png"
import connect3 from "../../assets/connect3.png"
import connect4 from "../../assets/connect4.png"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"




function OSS(){

    return(
    <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <p className="text-center text-4xl mt-2 mb-10 text-zinc-400 relative z-20">
        OSS Contributions
      </p>
            <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      {/* <div className="flex flex-row justify-between items-center w-80 md:w-100 mt-5 z-10">
      <Image src={connect1} alt='connect1' width={40}/> 
      <Image src={connect2} alt='connect1' width={40}/> 
      <Image src={connect3} alt='connect1' width={40}/> 
      <Image src={connect4} alt='connect1' width={40} className="rounded-xl"/> 
      </div> */}
    </div>
    )
}
export default OSS


const testimonials = [
  {
    type:"Pull Request",
    message: "🐛 Bug Fix: Corrected Animation Speed Behavior in Binary Search Visualizations #236",
    status: "merged",
  },
    {
    type:"Pull Request",
    message: "🐛 Bug Fix: fixed speed slider issue in FindFirstAndLastPosition #230",
    status: "merged",
  },
    {
    type:"Issue",
    message: "[BUG] : Profile pictures are not loading uniquely on OpenSox page #134",
    status: "open",
  },
    {
    type:"Pull Request",
    message: "Enhancement: added interactive walkthrough to guide new users #25",
    status: "merged",
  },
  {
    type:"Issue",
    message: "Change of color on hover for traces are missing #1130",
    status: "assigned",
  }

];
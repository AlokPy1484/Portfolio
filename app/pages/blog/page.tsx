"use client"

import Image from "next/image"
import blog1 from "../../../assets/blog1.jpg"
import Navbar from "@/components/ui/Navbar"
import blog2 from "../../../assets/blog2.png"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Compare } from "@/components/ui/compare";
import compare1 from "../../../assets/compare1.png"


function Blog(){

    return(
        <div>
        <Navbar/>
        <div className="flex flex-row justify-start items-start w-screen h-full bg-black">
            <ScrollProgress className="fixed top-20" />
            <div className=" text-white flex flex-col overflow-hidden w-screen md:w-[80vw] px-8 md:px-20 mt-30 md:mt-50">
                <div className="text-3xl md:text-6xl py-6">GitHub for Beginners: Everything You Need to Know to Start Using Version Control</div>
                <div className="text-zinc-400 md:text-2xl">If you’re new to development, one of the best skills you can pick up early is version control, and GitHub makes it incredibly approachable.</div>
                <Image src={blog1} alt="blog" className="w-full mt-8 md:mt-30"/>
                <div className="md:text-[20px] pt-16">If you are new to development, one of the best skills you can pick up early is version control—and there’s no better place to start than GitHub. Whether you’re building your first project or collaborating with others, GitHub gives you a simple, powerful way to track changes, manage code, and work like a professional developer from day one. It not only helps you keep your projects organized, but also teaches you the workflow used by real software teams across the world. Learning GitHub early sets the foundation for smoother collaboration, cleaner code management, and a more confident development journey ahead.
                </div>
                <div className="md:text-[20px] pt-8">I’ve gone through countless “How to GitHub” tutorials, but honestly, the best way to learn GitHub is by actually using it in your workflow. I learned GitHub by doing, breaking things, fixing them, and repeating the cycle. In this post, I’ll share how I learned GitHub practically, and give you a simple guide you can follow. I’ll also cover the best practices most tutorials never mention but every developer should know.
                </div>
                <div className="md:text-[20px] pt-8">For getting started, you can follow “Git and GitHub for Beginners” by freeCodeCamp. Once you complete that tutorial, you’ll be comfortable with the basic Git features, essential commands, and how to create repositories for your projects.
                </div>
                <div className="md:text-[20px] pt-8">After your repo is created and you’ve made your initial commits, here are the steps I personally follow to use GitHub properly :
                </div>
                <div className="flex flex-col justify-center items-center pt-12">
                    <div className="text-2xl">1. Create a new branch for every feature:</div>
                    <div className="pt-2"> Never work directly on main. This helps you stay organised and prevents breaking your stable code. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque similique vel ducimus repellat sint ipsum deserunt illo numquam, asperiores molestiae.</div>
                    <Image src={blog2} alt="blog 2" className="m-4 my-8 rounded-xl"/>
                </div>
                <div className="pt-6">
                    <div className="text-2xl">2. Write meaningful commit messages:</div>
                    <div className="pt-2">Instead of “fix” or “update,” write what you changed and why. It helps a lot when you revisit your code weeks later. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorum alias sit ratione eius similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ullam.</div>
                </div>
                <div className="pt-6">
                    <div className="text-2xl">3. Push frequently:</div>
                    <div className="pt-2">Don’t wait till the end. Small, continuous pushes help you track progress and reduce merge conflicts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto numquam sunt pariatur! Quasi ducimus itaque debitis impedit beatae, quae voluptatibus?</div>
                    <div className="flex flex-col mt-4">
                        <div className="flex flex-row justify-between items-center w-full pl-10 text-[12px] md:text-xl ">
                            <div>Jan</div>
                            <div>Feb</div>
                            <div>Mar</div>
                            <div>Apr</div>
                            <div>May</div>
                            <div>Jun</div>
                            <div>Jul</div>
                            <div>Aug</div>
                            <div>Sep</div>
                            <div>Oct</div>
                            <div>Nov</div>
                            <div>Dec</div>
                        </div>
                    <div className="flex flex-row justify-center items-center" >
                        <div className="flex flex-col justify-between items-center h-[150px]">
                            <div>Mon</div>
                            <div>Wed</div>
                            <div>Sat</div>
                        </div>
                    <div className="bg-black relative flex h-[180px] w-full flex-col items-center justify-center overflow-hidden ">
                        <InteractiveGridPattern
                            width={25}
                            height={25}
                            squares={[52, 7]}
                            squaresClassName="hover:fill-green-500"/>
                    </div>
                    </div>
                    </div>
                <div className="pt-6">
                        <div className="text-2xl">4. Use Issues to track tasks:</div>
                        <div className="pt-2">Whether it’s bugs, ideas, or improvements. Create Issues and link them to commits/PRs. It’s how real teams work.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorum alias sit ratione eius similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ullam.</div>
                </div>
                <div className="pt-6">
                        <div className="text-2xl">5. Open Pull Requests even for your own projects:</div>
                        <div className="pt-2">PRs give you a clean view of what changed and make your workflow more professional. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorum alias sit ratione eius similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ullam.</div>
                </div>
                    <div className="pt-6">
                        <div className="text-2xl">6.  Integrate AI code reviewers (like CodeRabbitAI) using GitHub Actions:</div>
                        <div className="pt-2">Automate review comments, get suggestions, and receive improvement tips on every pull request. This helps you learn clean coding practices faster and ensures you catch issues early even when you’re working solo.</div>
                        <div className="flex flex-row justify-center mt-8 mx-4 border-none">
                        <iframe
                        width="760"
                        height="370"
                        src="https://www.youtube.com/embed/u5KYZLQIuBA?si=yEnDLUFNSRIWB9I6"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        />                    </div>
                <div className="pt-6">
                        <div className="text-2xl">4. Use Issues to track tasks:</div>
                        <div className="pt-2">Whether it’s bugs, ideas, or improvements. Create Issues and link them to commits/PRs. It’s how real teams work.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorum alias sit ratione eius similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ullam.</div>
                </div>
                    <div className="py-6 ">
                        <div className="text-2xl">7. Write a clear and helpful README.md: </div>
                        <div className="pt-2">PRs give you a clean view of what changed and make your workflow more professional. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorum alias sit ratione eius similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, ullam.</div>
                         {/* <div className="w-full h-[80vh] px-1 md:px-2 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
                        <div className="p-1 md:p-2 border rounded-xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4">
                            <Compare
                            firstImage="../../../assets/blog2.png"
                            secondImage="https://assets.aceternity.com/linear-dark.png"
                            firstImageClassName="object-cover object-left-top w-full"
                            secondImageClassname="object-cover object-left-top w-full"
                            className="w-full h-full "
                            slideMode="hover"
                            autoplay={true}
                            />
                        </div>
                        </div> */}
                </div>
                </div>
                </div>
            </div>
            <div className="sticky top-24  hidden md:flex flex-col justify-center items-start gap-2 rounded-md w-[20vw] h[40vh] p-8 mt-60 mx-10 border border-zinc-800 text-zinc-300 bg-[color(srgb_0.09_0.09_0.09)]">
                <div className="text-2xl w-full text-left text-zinc-300 pb-3">On this page</div>
                <div>Introduction</div>
                <div>My Experience with Git and GitHub</div>
                <div>Resource to get started with GitHub in your project workflow</div>
                
            </div>
        </div>
        </div>
    )
}
export default Blog
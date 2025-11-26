import { Cover } from "@/components/ui/cover";


function Navbar(){


    const scrollToContact = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: document.body.scrollTop,
            behavior: "smooth"
        })
    }


    const openResume = () => {
        window.open('/Resume.pdf', '_blank')
    }



    return(
        <div className="fixed top-0 w-screen h-20 flex flex-row justify-center md:justify-between items-center md:px-30 backdrop-blur-xs text-white md:text-2xl z-100">
            <div className="hidden md:block">Portfolio</div>
            <div className="flex flex-row justify-center items-center h-10 gap-10">
                <div onClick={scrollToTop} className="cursor-pointer">Home</div>
                <div>About</div>
                <div onClick={openResume} className="cursor-pointer">Resume</div>
                <div onClick={scrollToContact} className="cursor-pointer"><Cover >Contact</Cover></div>
            </div>
        </div>
    )
}
export default Navbar
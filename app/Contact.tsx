import { Boxes } from "@/components/ui/background-boxes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Contact(){

    return(
        <div className="flex flex-col items-center w-screen h-full pb-40 pt-20 bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_10px)] bg-size-[24px_24px]">
            <div className="flex flex-row justify-start w-[80vw] md:w-200 m-10 mb-2 text-3xl text-left text-white">Get in touch</div>
            <div className="md:w-200 mx-10 text-sm md:text-2xl text-zinc-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nobis voluptas, delectus voluptatum neque alias.</div>
            <div className="md:w-200 mt-10">
            <div className="flex flex-row items-start md:w-100 gap-2 p-2 bg-zinc-700 rounded-md"> <Input type="email" placeholder="Email" className="w-[60vw] md:w-100 border-none"/><Button variant="outline">Send</Button></div>
            </div>
            {/* <Boxes/> */}
        </div>
    )
}
export default Contact
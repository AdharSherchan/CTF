import FirstContent from "./FirstContent"

const Background =() => {
    return(
        <div className="flex flex-col justify-between bg-[#152443] h-screen relative overflow-hidden">
            <FirstContent />
            <div className="w-full h-full relative">
                <div className="absolute h-[810px] w-[810px] bg-white blur-sm rounded-full -bottom-32 left-1/2 transform -translate-x-1/3 animate-pulse"></div>
                <div className="absolute h-[800px] w-[800px] bg-white blur-sm rounded-full -bottom-32 left-1/2 transform -translate-x-1/3 animate-pulse"></div>
                <img src="/Halloween.png" className="absolute h-full w-full z-20" />
            </div>
            <div className=" absolute text-black font-serif top-40 left-1/2 transform -translate-x-1/4 z-40"> 
                <p className="text-[50px] text-center ">TRICK OR TREAT</p>
                <p className="text-[70px] text-center">HALLOWEEN</p>
            </div>
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/3 z-30">
                <img src="/Ghosts.png" className="object-fill h-[350px] w-[400px] " />
            </div>
            
        </div>
    )
}
export default Background
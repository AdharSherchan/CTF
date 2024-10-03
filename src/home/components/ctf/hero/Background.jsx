import FirstContent from "./FirstContent"

const Background =() => {
    return(
        <div className="flex flex-col justify-between bg-[#152443] h-screen relative overflow-hidden">
            <FirstContent />
            <div className="w-full h-full relative">
                <div className="absolute h-[780px] w-[780px] bg-white blur-sm rounded-full bottom-[-190px] left-1/2 transform -translate-x-1/3 animate-pulse"></div>
                <div className="absolute h-[770px] w-[770px] bg-white blur-sm rounded-full bottom-[-190px] left-1/2 transform -translate-x-1/3 animate-pulse"></div>
                <img src="/Halloween.png" className="absolute h-full w-full z-20" />
            </div>
            <div className=" absolute text-black font-serif bottom-96 left-1/2 transform -translate-x-1/4 z-40"> 
                <p className="text-[50px] text-center ">TRICK OR TREAT</p>
                <p className="text-[70px] text-center">HALLOWEEN</p>
            </div>
            <div className="absolute bottom-9 left-1/2 transform -translate-x-1/3 z-30">
                <img src="/pumpkin.png" className="object-fill h-[350px] w-[400px] " />
            </div>
            <div className="absolute inset-0 backdrop-opacity-10 bg-black/30 z-30"></div>
        </div>
    )
}
export default Background
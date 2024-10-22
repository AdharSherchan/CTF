import LoginEntry from "../form/LoginEntry"

const SecondContent =() => {
    return(
        <div className="flex items-center pt-[120px] justify-between relative bg-black">
            <div className="">
                <img src="/skeleton.jpg" className="object-contain w-[1200px] h-[1000px]" />
            </div>
            <div className="absolute inset-0 backdrop-opacity-10 bg-black/30 z-30"></div>
            <LoginEntry />

        </div>
    )
}
export default SecondContent


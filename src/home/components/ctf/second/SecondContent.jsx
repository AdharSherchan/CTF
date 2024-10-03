const SecondContent =() => {
    return(
        <div className="flex items-center pt-[120px] justify-between relative bg-black border border-yellow-500">
            <div className="">
                <img src="/skeleton.jpg" className="object-contain w-[1200px] h-[1000px]" />
            </div>
            <div className="absolute inset-0 backdrop-opacity-10 bg-black/30 z-30"></div>

        </div>
    )
}
export default SecondContent
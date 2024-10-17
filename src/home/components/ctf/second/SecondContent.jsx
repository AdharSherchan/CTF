import LoginEntry from "../form/LoginEntry"

const SecondContent =() => {
    return(
        <div className="flex items-center pt-[120px] relative bg-black border border-yellow-500">
            <div className="border-2 border-red-600">
                <img src="/skeleton.jpg" className="object-contain w-[1200px] h-[1000px]" />
            </div>
            <LoginEntry />

        </div>
    )
}
export default SecondContent
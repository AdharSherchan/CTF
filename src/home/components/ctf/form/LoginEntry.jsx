import { FaGoogle } from "react-icons/fa";
const LoginEntry =() => {
    return(
        <div className="flex flex-col items-center justify-center  p-[150px] font-serif text-white gap-4">
            <p className="text-white text-[48px]">Log In</p>
            <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                <p className="text-white text-[24px]">Username</p>
                <input type="text" className="rounded-lg w-60 h-8" />
                </div>
                <div className="flex flex-col gap-2">
                <p className="text-white text-[24px]">Password</p>
                <input type="text" className="rounded-lg w-60 h-8" />
                </div>
            </form>
            <button className="bg-slate-700 rounded-xl w-60 h-10">
                    <p>Log In</p>
            </button>
            <hr className="border border-white w-full" />
            <FaGoogle className="h-6 w-6" />
        </div>
    )
}
export default LoginEntry
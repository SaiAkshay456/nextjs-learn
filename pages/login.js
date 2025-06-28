import { useRouter } from "next/router"
import { useEffect } from "react";

export default function () {
    const router = useRouter()

    const handleClick = () => {
        console.log("user clicked")
    }
    useEffect(() => {
        window.addEventListener("click", handleClick);
    }, []);
    return <><h1>Login page</h1>
        <button onClick={() => router.replace("/")} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out"
        >Login here </button>
        <button onClick={handleClick} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out">Click me</button>
    </>
}
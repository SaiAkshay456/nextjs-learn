import { useRouter } from "next/router"

export default function () {

    const router = useRouter();
    return <><h1>Hii i am at user/{router.query.username} index.js</h1>
        {/* one way of push */}
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out"
            onClick={() => router.push(`/user/${router.query.username}/settings`)}>click to settings page</button>
        {/* other way of push */}
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out"
            onClick={() => router.push({
                pathname: "/user/[username]/settings",
                query: { username: router.query.username }
            })}>click to go your settings page</button>

        {/* no history route  */}
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out"
            onClick={() => router.replace(`/`)}>click to go your home</button>
    </>
}
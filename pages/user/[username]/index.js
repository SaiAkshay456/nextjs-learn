import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export const fetcher = (url) => fetch(url).then(res => res.json());
export default function () {
    const { query, isReady } = useRouter();
    const [userId, setUserId] = useState();
    const [userDetails, setUserDetails] = useState({})
    useEffect(() => {
        if (!isReady) return;
        fetchUserDetails();
    }, [isReady, query.username])

    const fetchUserDetails = async () => {
        const data = await axios.get(`https://dummyjson.com/users/${query.username}`);
        console.log(data.data);
        setUserDetails(data.data)
    }

    return <><h1>Hii i am at user/{query.username} index.js</h1>
        {/* one way of push */}
        {/* <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out"
            onClick={() => router.push(`/user/${query.username}/settings`)}>click to settings page</button> */}
        {/* other way of push */}
        {/* <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out"
            onClick={() => router.push({
                pathname: "/user/[username]/settings",
                query: { username: routerquery.username }
            })}>click to go your settings page</button>

        {/* no history route  */}
        {/* <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out"
            onClick={() => router.replace(`/`)}>click to go your home</button>

        {router.query.username} */}
        <h1>{userDetails?.firstName}</h1>
        <h1>{userDetails?.lastName}</h1>
        <h1>{userDetails?.age}</h1>
    </>
}
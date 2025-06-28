// export default function () {
//     return (<h1>hii i am at page</h1 >)
// }
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//It is all about client side rendering 
//first your web page loads into client 
//all the links in head will be downloaded js,css bundles all links
//then code is executed js,css all
// So, it has slight delay so google bots cannot index your page and can,t find your page that is the reason
//it,s not seo optimized
// to see with proof open network tab and see api calls are visible 
// that means these are client side rendered.
//simple that means api calls are made at client
//often security problems like api-key leak during api call
//another way to prove open view source page all the data is not visible
export default function mypage() {

    const [users, setUser] = useState([]);

    const router = useRouter();
    useEffect(() => {
        fetchUser();
    }, [])


    const fetchUser = async () => {
        const data = await axios.get("https://dummyjson.com/users");
        console.log(data.data);
        setUser(data.data.users);
    }
    if (!users) return <h1>Loading..........</h1>

    return <>
        <h1>Hii this is about users</h1>
        {users && users.map((user) => <li key={user.id}>{user.firstName} {user.lastName}
            <button onClick={() => router.push(`/user/${user.id}`)}> click to go</button>
        </li>)}
    </>
}
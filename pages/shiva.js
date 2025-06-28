

import useSWR from "swr"
const fetcher = (url) => fetch(url).then(res => res.json());

//swr for caching and not waiting only for data fecthing
//it is hook made by vercel team
export default function () {

    const { data, error, isLoading } = useSWR("https://dummyjson.com/users", fetcher)

    if (isLoading) return <h1>Loading...</h1>

    if (error) return <h1>error...</h1>
    console.log(data.users, data.limit)
    return <><h1>hiii i am at shiva</h1>
        {data && data.users && data.users.map((user) => <li key={user.id}>{user.firstName}
        </li>)}
    </>
}
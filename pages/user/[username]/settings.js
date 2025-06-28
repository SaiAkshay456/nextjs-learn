import { useRouter } from "next/router";

export default function () {
    const router = useRouter();
    const q = router.query;
    console.log(router)
    return <><h1>hi iam at peak {q.username}</h1>
        <button onClick={() => router.push("/user")} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-200 ease-in-out" >Click to go user page</button></>
}

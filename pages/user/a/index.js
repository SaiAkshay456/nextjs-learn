import { useRouter } from "next/router"

export default function () {
    const { query } = useRouter();
    console.log(query)
    return <><h1>Hii am at user/a page</h1></>
}
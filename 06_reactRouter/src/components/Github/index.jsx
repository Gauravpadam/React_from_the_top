// Now, using useEffect is a great practice by itself
// But react-router-dom goes one step ahead and provides the functionality of `loaders`

import { useLoaderData } from "react-router-dom"

// loaders are used to pre-load data into the component before it gets rendered
// This can reduce the frame drops on, for example, heavy fetch requests.

// We define this loadrr in the react router we defined earlier
// This data can be accessed by using `useLoaderData` hook 
// again - by react-router-dom

// Docs: https://reactrouter.com/en/main/route/loader

function Github() {
    // const [data , setData] = useState([]); {/* data will change the state of the app */}
    // useEffect(()=>{
    //     (async () => {
    //     const res = await fetch('https://api.github.com/users/Gauravpadam')
    //     const result = await res.json()
    //     setData(result)
    //     })(); {/* This is an IIFE - Immediately invoked function execution */}
    // }, [])
    const data = useLoaderData(); {/* Now we need only useLoaderData */}
    return(
            <div className='text-center flex flex-wrap justify-center gap-4 m-4 bg-gray-600 text-white p-4 text-3xl'>
                <p className="w-full">Github username: {data.name}</p>
            <img className="my-4"src={data.avatar_url} alt="Git picture" width={300} />
            </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Gauravpadam')
    return res.json()
}


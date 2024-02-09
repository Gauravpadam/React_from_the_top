// A protection mechanism for our routes, elements
// A protected container? can say
// Why to use? Think for yourself

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function AuthLayout({children, authentication = true}){

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authentication === authStatus){
            navigate("/login")
        } else if(!authentication && authentication !== authStatus){
            navigate("/")
        }
        setLoader(false) // Content is loaded
    }, [authStatus, navigate, authentication])

    return (
        loader ? <h1>Loading...</h1> : <>{children}</>
    )
}

export default AuthLayout
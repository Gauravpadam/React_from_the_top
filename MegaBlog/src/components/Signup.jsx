import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from "../appwrite/authService"
import Input from "./Input"
import Button from "./Button"
import Logo from "./Header/Logo"



const Signup = () => {

    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const signup = async (data) => {
        try {
            const userData = await authService.createAccount(data)
            if (userData){
                const UserData = await authService.getCurrentUser()
                if(userData) dispatch(login(UserData))
                useNavigate("/")
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="font-bold text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(signup)}>
                    <div className="space-y-5">
                        <Input
                        type="text"
                        label="Email"
                        placeholder="Enter Email"
                        className="w-full text-black px-4 py-2"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        type="password"
                        label="Password"
                        placeholder="Enter Password"
                        className="w-full text-black px-4 py-2"
                        {...register("password", {
                            required: true,
                            validate: {
                                matchPattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(value) ||
                                "Password must contain at least 1 Captial letter, small case letters and a symbol"
                            }
                        })}
                        />
                        <Button className="py-2 px-4" type="submit">Signup</Button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default React.forwardRef(Signup)
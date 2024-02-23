"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import axios from 'axios'


export default function Login(){

    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const LoginHandle = async() => {
        // console.log(user)

        try{

            setLoading(true)
            const response = await axios.post('/api/users/login', user)

            console.log("login success", response.data)
            toast.success("login successfull")
            router.push('/profile')
            
        }catch(error:any){
            console.log(error)
            toast.error(error)
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="text-center">
            <h1 className='text-3xl m-5 font-bold'>{loading ? "Processing" : "Login"}</h1>

            <div className=''>
                <label className='w-[150px] inline-block' htmlFor="email">email</label>
                <input
                    className="p-2 m-3 rounded text-black"
                    type="email"
                    name='email'
                    value={user.email}
                    placeholder= "email"
                    onChange={(e)=>setUser({...user, email : e.target.value})}
                />
            </div>

            <div>
                <label htmlFor="password" className='w-[150px] inline-block'>password</label>
                <input
                    className="p-2 m-3  rounded text-black"
                    type="password"
                    name='password'
                    value={user.password}
                    placeholder= "password"
                    onChange={(e)=>setUser({...user, password : e.target.value})}
                />
            </div>

            <button 
                className='p-2 px-4 mt-5 bg-blue-500 text-2xl rounded'
                onClick={LoginHandle}
                >
                    Login
            </button>
            
            <div className='mt-4'>
                <Link className='text-blue-400' href="/signup">Not a registered user? SignUp</Link>
            </div>

        </div>
    )
}
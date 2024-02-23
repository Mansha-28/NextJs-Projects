"use client"
import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import axios from 'axios'


export default function SignUp(){

    const [user, setUser] = useState({
        email : "",
        password : "",
        username : ""
    })

    const [loading, setLoading] = useState(false);

    const router = useRouter()

    const signUpHandle = async() => {
        console.log(user)
        try{

            setLoading(true);
            const response = await axios.post('/api/users/signup', user)

            console.log("signup success", response.data)
            router.push('/login')

        }catch(error:any){
            console.log(error)
            toast.error(error.message)
        }finally{
            console.log("finally setloading will be true")
            setLoading(false)
        }
    }

    // useEffect(()=>{
    //     // signUpHandle()\
    //     axios.post('/api/users/signup', user)
    // },[])

    return (
        <div className="text-center">
            <h1 className='text-3xl m-5 font-bold'>{loading? "processing":"SignUp"}</h1>

            <div>
                <label className='w-[150px] inline-block' htmlFor="username">username</label>
                <input
                    className="p-2 m-3 rounded text-black"
                    type="text"
                    name='username'
                    value={user.username}
                    placeholder= "username"
                    onChange={(e)=>setUser({...user, username : e.target.value})}
                />
            </div>

            <div>
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
                <label className='w-[150px] inline-block' htmlFor="password">password</label>
                <input
                    className="p-2 m-3 rounded text-black"
                    type="password"
                    name='password'
                    value={user.password}
                    placeholder= "password"
                    onChange={(e)=>setUser({...user, password : e.target.value})}
                />
            </div>

            <button 
                className='p-2 px-4 mt-5 bg-blue-500 text-2xl rounded'
                onClick={signUpHandle}
                >
                    SignUp
            </button>
            
            <div className='mt-4'>
                <Link  className='text-blue-400' href="/login">Already a user? login</Link>
            </div>

        </div>
    )
}
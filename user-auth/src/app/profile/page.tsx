"use client"

import axios from "axios"
import toast from "react-hot-toast"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function Profile(){
    const router = useRouter()
    const [data, setData] = useState('')

    const handleLogout = async() => {

        try{

            await axios.get('/api/users/logout')
            toast.success("Logout successfull")
            router.push('/login')

        }catch(error: any){
            console.log(error)
            toast.error(error)
        }
    }

    const getUserDetails = async() =>{
        const response = await axios.get('/api/users/me')
        console.log(response.data.data)
        setData(response.data.data._id)
    }

    // useEffect(()=>{
    //     getUserDetails()
    // },[])

    return (
        <div className="text-center mt-10">
            <h1 className="m-5">Profile Page</h1>
            <hr />
                
                <Link className="p-3 m-4 bg-blue-600" href={`/profile/${data}`}>{data}</Link>
            <hr />

            <button className="bg-red-400 rounded m-2 p-2 px-4" onClick={()=>handleLogout()}>Logout</button>
            <hr />
            <button  className="bg-green-400 rounded m-2 p-2 px-4" onClick={()=>getUserDetails()}>get Details</button>

        </div>
    )
}
"use client"
import { useRouter } from "next/navigation"

export default function OrderPlaced(){

    const router = useRouter()

    const handleClick = () => {
        console.log("order placed")
        router.forward('/about')
    }

    return (
        <>
            <p className="">order placed</p>
            <button onClick={handleClick} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                Place Order
            </button>
        </>
    )
}
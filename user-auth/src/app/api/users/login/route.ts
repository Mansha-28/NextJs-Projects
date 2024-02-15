import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcrypt";
import toast from "react-hot-toast";
import jwt from "jsonwebtoken"
// import { sendEmail } from "@/helpers/mailer";


connect()

export async function POST(request:NextRequest){

    try{

        const reqBody = await request.json()

        const { email, password} = reqBody

        console.log(reqBody)


        // check if user exist
        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error:"user not exist please signup"}, {status:400})
        }

        // check if password is correct

        const validPassword = await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error:"Invalid password please enter a correct password"},{status:400})
        }

        // create login token
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // creating token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn:'1d'})

        const response = NextResponse.json({
            message: 'Login successfull',
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response

    }catch(error:any){
        console.log("error in login", error)
        return NextResponse.json({error: error.message}, {status: 500})
    }
}
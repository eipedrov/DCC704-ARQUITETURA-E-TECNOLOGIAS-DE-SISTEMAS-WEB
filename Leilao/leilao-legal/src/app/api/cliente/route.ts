import { NextResponse } from 'next/server'
import client from '../../../../prisma/clientDb'

export async function GET(request: Request) {
    
    const res = await client.user.create({
        data:{
        name:"Pedro",
        email:"pedro@gmail.com",
        },
    })    
    return NextResponse.json({ res })
}
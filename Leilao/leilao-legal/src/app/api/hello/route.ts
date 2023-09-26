import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    
    const res = { "chave": "ok" }
    
    return NextResponse.json({ res })
}
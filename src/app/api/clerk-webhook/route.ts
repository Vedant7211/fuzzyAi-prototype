import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { id, email_addresses, first_name, image_url } = body?.data

       const email = email_addresses[0]?.email_address
       
       if (!email || !id) {
           return new NextResponse('Missing required fields', { status: 400 })
       }
       
       console.log('Clerk webhook received', body)
       
       await db.user.upsert({
        where: {
            clerkId: id
        },
        update: {
          email,
          name: first_name || '',
          profileImage: image_url || '',
        },
        create: {
            clerkId: id,
            email,
            name: first_name || '',
            profileImage: image_url || '',
        }
    })

    return new NextResponse('User created', { status: 200 })
    } catch (error) {
        console.error('Clerk webhook error:', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
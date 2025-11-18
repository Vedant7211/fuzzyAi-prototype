import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { id, email_addresses, first_name, image_url } = body?.data

       const email = email_addresses[0].email_address
       console.log('eifjoisdjfoisejf', body)
       
       await db.user.upsert({
        where: {
            clerkId: id
        },
        update: {
          email,
          name: first_name,
          profileImage: image_url,
        },
        create: {
            clerkId: id,
            email,
            name: first_name,
            profileImage: image_url,
        }
    })

    return new NextResponse('User created', { status: 200 })
    } catch (error) {
        console.error(error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
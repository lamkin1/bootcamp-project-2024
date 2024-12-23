import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import blogSchema from "@/database/blogSchema"
import { IComment } from '@/app/components/comments'
import Blog from '@/database/blogSchema'

type IParams = {
    params: Promise<{
        slug: string;
    }>
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    
    const { slug } = await params;

    try {
        const { user, comment } = await req.json();


        if (!user || !comment){
            return NextResponse.json( {error: "Missing User/Comment Field."}, {status: 400})
        }

        const blog = await Blog.findOne({ slug }).orFail()


        console.log("Blog:",typeof Blog.schema.obj)
        return NextResponse.json(blog);
    } catch (err) {
        return NextResponse.json({ error: 'Error occured commenting.' }, { status: 500 });
    }
}
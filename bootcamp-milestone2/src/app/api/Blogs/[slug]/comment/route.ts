import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import { IComment } from '@/app/components/comments'
import Blog from '@/database/blogSchema'


type IParams = {
    params: Promise<{
        slug: string;
    }>
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();

    const { slug } = await params;  // Access slug from the params object

    //validate body and blog
    const { user, comment } = await req.json();
    console.log("Comment:" , comment)
    const blog = await Blog.findOne({ slug }).orFail();

    const time = new Date();
        
    const newComment: IComment = {
        user: user,
        comment: comment,
        time: time,
    };

    blog.comments.push(newComment);
    console.log(blog.comments)

    
    await blog.save();
    try{ 
    console.log('Update result:', blog);
    return NextResponse.json({blog})
    } catch {
        return NextResponse.json({ success: false, message: "Failed to add comment." }, { status: 500 });
    }
}
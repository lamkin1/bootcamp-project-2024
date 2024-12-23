import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import { IComment } from '@/app/components/comments'
import Project from '@/database/projectSchema'



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
    const project = await Project.findOne({ slug }).orFail();

    const time = new Date();
        
    const newComment: IComment = {
        user: user,
        comment: comment,
        time: time,
    };

    project.comments.push(newComment);
    console.log(project.comments)

    
    await project.save();
    try{ 
    console.log('Update result:', project);
    return NextResponse.json({project})
    } catch  {
        return NextResponse.json({ success: false, message: "Failed to add comment." }, { status: 500 });
    }
}
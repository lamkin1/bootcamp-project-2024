import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import projectSchema from "@/database/projectSchema"

type IParams = {
		params: {
			slug: string
		}
}

export async function GET (req: NextRequest, { params }: { params: Promise<{ slug: string }> })  {
    await connectDB() 

		try{
		const slug = (await params).slug;

		const project = await projectSchema.findOne({ slug }).orFail()

	        return NextResponse.json(project)
	    } catch {
	        return NextResponse.json('Project not found.', { status: 404 })
	    }
}
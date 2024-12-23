import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import projectSchema from "@/database/projectSchema"


export async function GET(req: NextRequest) {
    await connectDB() 
		try{

		const projects = await projectSchema.find(); // No filter for all projects

	        return NextResponse.json(projects)
	    } catch {
	        return NextResponse.json('Projects not found.', { status: 400 })
	    }
}
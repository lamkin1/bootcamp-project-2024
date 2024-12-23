import mongoose, { Schema } from "mongoose";
// import { IComment } from "@/app/components/comments";

type IComment = {
	user: string;
	comment: string;
	time: Date;
}

// typescript type (can also be an interface)
type Blog = {
	title: string;
	date: Date;
	description: string;
	image: string;
	imageAlt: string;
  slug: string; 
  content: string;
  comments: IComment[];
};

// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
		date: { type: Date, required: false, default: new Date()},
		description: { type: String, required: true },
		image: { type: String, required: true },
		imageAlt: { type: String, required: true },
		slug: { type: String, required: true },
		content: { type: String, required: true },
		comments: [{
			user: {type: String, required: true}, 
			comment: {type : String, required : true},
			time : { type: Date, required: true, default: new Date()}
		}]
		
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blog;
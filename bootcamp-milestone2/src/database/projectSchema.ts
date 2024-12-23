import mongoose, { Schema } from "mongoose";
import { IComment } from "@/app/components/comments";

type Project = {
  name: string;
  description: string; 
  image: string; 
  imageAlt: string; 
  slug: string; 
  content: string;
  comments: IComment[];
};

const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
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
});

const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
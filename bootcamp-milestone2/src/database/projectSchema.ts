import mongoose, { Schema } from "mongoose";

type Project = {
  name: string;
  description: string; 
  image: string; 
  imageAlt: string; 
};

const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
});


const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
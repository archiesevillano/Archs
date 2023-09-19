import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { ProjectSchema } from "../../../../schemas";

export async function POST() {
    try {
        const dbConnectionString: string = process.env.NEXT_PUBLIC_MONGODB_URI === undefined ? "" : process.env.NEXT_PUBLIC_MONGODB_URI;

        await mongoose.connect(dbConnectionString, { serverSelectionTimeoutMS: 60000 });
        const schema = new mongoose.Schema(ProjectSchema);
        const projects = mongoose.models.Project || mongoose.model('Project', schema, 'projects');

        // get the list of projects
        const list = await projects.find();

        return NextResponse.json({ data: list });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ data: error });
    }
}
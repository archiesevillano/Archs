import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { WorkExpSchema } from "../../../../schemas";

export async function POST() {
    try {
        const dbConnectionString: string = process.env.NEXT_PUBLIC_MONGODB_URI === undefined ? "" : process.env.NEXT_PUBLIC_MONGODB_URI;

        await mongoose.connect(dbConnectionString);
        const schema = new mongoose.Schema(WorkExpSchema);
        const experiences = mongoose.models.Experience || mongoose.model("Experience", schema, "experiences");

        // get the list of Work Experiences
        const list = await experiences.find();

        return NextResponse.json({ data: list });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ data: error });
    }
}
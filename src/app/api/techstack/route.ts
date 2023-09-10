import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { CertificateSchema, TechstackSchema } from "../../../../schemas";

export async function POST() {
    try {
        const dbConnectionString: string = process.env.NEXT_PUBLIC_MONGODB_URI === undefined ? "" : process.env.NEXT_PUBLIC_MONGODB_URI;

        await mongoose.connect(dbConnectionString);
        const schema = new mongoose.Schema(TechstackSchema);
        const techstack = mongoose.models.Techstack || mongoose.model('Techstack', schema, 'techstacks');

        // get the list of techstacks
        let list = await techstack.find();

        return NextResponse.json({ data: list });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ data: "May error pakshet!" });
    }
}
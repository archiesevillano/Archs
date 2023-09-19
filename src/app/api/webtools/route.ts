import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { WebToolSchema } from "../../../../schemas";

export async function POST() {
    try {
        const dbConnectionString: string = process.env.NEXT_PUBLIC_MONGODB_URI === undefined ? "" : process.env.NEXT_PUBLIC_MONGODB_URI;

        await mongoose.connect(dbConnectionString);
        const schema = new mongoose.Schema(WebToolSchema);
        const webtool = mongoose.models.WebTool || mongoose.model("WebTool", schema, "webtools");

        // get the list of webtools
        const list = await webtool.find();

        return NextResponse.json({ data: list });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ data: error });
    }
}
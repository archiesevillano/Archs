import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { CertificateSchema } from "../../../../schemas";

export async function POST() {
    try {
        const dbConnectionString: string = process.env.NEXT_PUBLIC_MONGODB_URI === undefined ? "" : process.env.NEXT_PUBLIC_MONGODB_URI;

        await mongoose.connect(dbConnectionString);
        const schema = new mongoose.Schema(CertificateSchema);
        const certificates = mongoose.models.Certificate || mongoose.model('Certificate', schema, 'certificates');

        // get the list of certificates
        const list = await certificates.find();

        return NextResponse.json({ data: list });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ data: error });
    }
}
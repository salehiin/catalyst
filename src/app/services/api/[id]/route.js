import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const servicesCollection = db.collection("services");
    try {
        // Convert the id to ObjectId
        const service = await servicesCollection.findOne({ _id: new ObjectId(params.id) });
        // if (!service) {
            // return NextResponse.json({ message: "Service not found" }, { status: 404 });
            // }
            return NextResponse.json({ service });
        return NextResponse.json({ service });
    } catch (error) {
        return NextResponse.json({ message: "No Data Found"});
    }
};
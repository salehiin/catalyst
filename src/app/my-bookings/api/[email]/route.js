import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
    try {
        // Convert the id to ObjectId
        const myBookings = await bookingsCollection.find({ email: params.email }).toArray();
        // if (!service) {
        //     return Response.json({ message: "Service not found" }, { status: 404 });
        // }
        // return Response.json({ service }, { status: 200 });
        return NextResponse.json({ myBookings });
    } catch (error) {
        console.error(error);
        // return Response.json({ message: "Something went wrong", error }, { status: 500 });
    }
};
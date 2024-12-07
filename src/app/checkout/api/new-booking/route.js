import { connectDB } from "@/lib/connectDB";
// import { NextResponse } from "next/server";

export const POST = async (request) => {
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    try {
        const res = await bookingsCollection.insertOne(newBooking)
        return Response.json({message : "Booking Successful"}, {status : 200})
    } catch (error) {
        return Response.json({message : "Something Went Wrong"}, {status : 400})
    }
}
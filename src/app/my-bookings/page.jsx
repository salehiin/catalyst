"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const session = useSession();
    const [bookings, setBookings] = useState([]);
    const loadData = async () => {
        const resp = await fetch(`process.env.NEXT_PUBLIC_BASE_URL/my-bookings/api/${session?.data.user?.email}`);
        // await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`);
        const data = await resp.json();
        setBookings(data?.myBookings)
    };

    const handleDelete = async (id) =>{
        const deleted = await fetch(`process.env.NEXT_PUBLIC_BASE_URL/my-bookings/api/booking/${id}`, {
            method : "DELETE",
        });
        const resp = await deleted.json();
        if(resp?.response?.deletedCount > 0){
            loadData();
        }
    };

    useEffect(() => {
        loadData();
    }, [session]);

    return (
        <div className='container'>
            <div className="relative w-[90%] mx-auto  h-72">
                <Image
                    className="absolute h-72 w-full left-0 top-0 object-cover"
                    src={'/assets/images/checkout/checkout.jpg'}
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                        My Bookings
                    </h1>
                </div>
            </div>
            <div className='mt-12'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Name</th>
                                <th>Booking Date</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(({ _id, serviceTitle, date, price }) => (
                                    <tr key={_id}>
                                        <th>1</th>
                                        <td>{serviceTitle}</td>
                                        <td>{date}</td>
                                        <td>{price}</td>
                                        <td>
                                            <div className='flex items-center space-x-3'>
                                                <Link href={`/my-bookings/update/${_id}`}><button className='btn btn-primary'>Edit</button></Link>
                                                <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* row 1 end */}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;
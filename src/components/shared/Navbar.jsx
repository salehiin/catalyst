"use client"

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { FaSearchDollar } from "react-icons/fa";

const Navbar = () => {

    const session = useSession();
    console.log(session);

    return (
        <div className='bg-black'>
            <div className="navbar bg-[#141414] container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Image src="/catalyst.png" height={30} width={30} alt='Catalyst' />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navItems.map((item) => (
                                    <Link href={item.path} key={item.path}>{item.title}</Link>
                                ))
                            }
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost text-xl flex">
                        <Image src="/catalyst.png" width={20} height={20} alt="Catalyst" />
                        <p className='text-xl text-[#0018f9]'>Catalyst</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-6'>
                        {
                            navItems.map((item) => (
                                <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{item.title}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center '>
                        <BiSolidBriefcaseAlt2 className='text-xl' />
                        <FaSearchDollar className='text-xl' />

                        <Link href={'/'} className="btn btn-outline text-[#0018f9] hover:bg-[#0018f9] hover:text-white">Appointment</Link>


                        {session?.status === 'loading' &&
                            <h6>Loading...</h6>
                        }

                        {session?.status === 'unauthenticated' &&
                            <Link href={'/login'} className="btn text-[#efe8ce] bg-[#0018f9] hover:outline hover:outline-none">Login</Link>
                        }
                        {session?.status === 'authenticated' &&
                        <div className='flex '>
                            <button className="btn text-[#efe8ce] bg-[#0018f9] hover:outline hover:outline-none" onClick={() => signOut()}>Logout</button>
                            <Image className='rounded-full ml-2' width={40} height={20} alt={session?.data?.user?.name} src={session?.data?.user?.image} />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

const navItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About Us",
        path: "/about"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "MyBookings",
        path: "/my-bookings"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contacts",
        path: "/contact"
    },
]

export default Navbar;
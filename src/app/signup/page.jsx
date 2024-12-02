"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {

    const handleSignup = async (event) => {
        event.preventDefault();
        const newUser = {
            name : event.target.name.value,
            email : event.target.email.value,
            password : event.target.password.value,
        };
        const resp = await fetch("http://localhost:3000/signup/api", {
            method : "POST",
            body : JSON.stringify(newUser),
            headers : {
                "content-type" : "application/json"
            }
        })
        console.log(resp);
        if(resp.status === 200){
            event.target.reset()
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-2 items-center gap-12">
                <div className="mx-auto border-r">
                    <Image alt="login" src="/assets/images/login/signup.png" width="600" height="540" />
                </div>
                <div className=" py-7 px-16">
                    <h6 className="text-3xl font-semibold text-accent text-center mb-12">Sign Up!</h6>
                    <form onSubmit={handleSignup} action="">
                        <label htmlFor="name">Name</label> <br />
                        <input name="name" type="text" placeholder="Your name here" className="mt-2 input input-bordered w-full " />
                        <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input name="email" type="email" placeholder="Your email" className="mt-2 input input-bordered w-full " />
                        <br /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input name="password" type="password" placeholder="Your password" className="mt-2 input input-bordered w-full " />
                        <br />
                        <button type="submit" className="btn btn-accent btn-block mt-10">Sign Up</button>
                    </form>
                    <div>
                        <h6 className="my-8 text-center">or sign in with</h6>
                        <div className="flex items-center justify-center gap-4">
                            <button className="btn rounded-full flex items-center justify-center text-accent"><FaFacebook /></button>
                            <button className="btn rounded-full flex items-center justify-center text-accent"><FaGoogle /></button>
                            <button className="btn rounded-full flex items-center justify-center text-accent"><FaGithub /></button>
                        </div>
                        <h6 className="my-8 text-center">Already have account?<Link className="text-accent font-semibold" href={'/login'}> Login</Link> </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
"use client"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";


const Page = () => {

    const router = useRouter()
    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn('credentials', {
            email, 
            password, 
            redirect : false
        });
        if(resp.status === 200){
            router.push('/')
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-2 items-center gap-12">
                <div className="mx-auto border-r">
                    <Image alt="login" src="/assets/images/login/login.png" width="740" height="540" />
                </div>
                <div className=" py-7 px-16">
                    <h6 className="text-3xl font-semibold text-accent text-center mb-12">Sign In!</h6>
                    <form onSubmit={handleLogin} action="">
                        <label htmlFor="email">Email</label> <br />
                        <input name="email" type="email" placeholder="Your email" className="mt-2 input input-bordered w-full " />
                        <br /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input name="password" type="password" placeholder="Your password" className="mt-2 input input-bordered w-full " />
                        <br />
                        <button type="submit" className="btn btn-accent btn-block mt-10">Sign In</button>
                    </form>
                    <div>
                        <h6 className="my-8 text-center">or sign in with</h6>
                        <div className="flex items-center justify-center gap-4">
                            <button className="btn rounded-full flex items-center justify-center text-accent"><FaFacebookF /></button>
                            <button className="btn rounded-full flex items-center justify-center text-accent"><FaGoogle /></button>
                            <button className="btn rounded-full flex items-center justify-center text-accent"><FaGithub /></button>
                        </div>
                        <h6 className="my-8 text-center">Don't have account?<Link className="text-accent font-semibold" href={'/signup'}> Sign Up</Link> </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
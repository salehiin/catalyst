import Image from "next/image";
import React from "react";


const ServiceCard = ({ service }) => {

    const { title, price, img } = service || {};

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl mx-auto">
            <figure className="w-full h-[200px]">
                <Image className="w-full h-auto object-cover" src={img} alt={title} width={0} height={0} sizes="100vw" />
                {/* <Image height={120} width={385} src={img} alt={title} /> */}
                {/* <Image
                    width={120}
                    height={120}
                    src={src || "https://i.ibb.co/27pmQJD/pexels-ksenia-chernaya-4450334.jpg"}
                    alt={title || "Default Title"}
                    onError={() => setSrc("https://i.ibb.co/27pmQJD/pexels-ksenia-chernaya-4450334.jpg")}
                /> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <h6 className="text-primary font-semibold">Price : ${price}</h6>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
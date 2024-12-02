import next from "next";


const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-full rounded-xl h-[calc(100vh-68px*2)] mt-12">
                {
                    banners.map((banner, index) => (
                        <div
                            style={{
                                backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
                            }}
                            key={index} id={`slide${index + 1}`} className="carousel-item relative w-full bg-no-repeat bg-cover">
                            <div className="h-full w-full flex items-center pl-36">
                                <div className="space-y-6">
                                    <h1 className="text-5xl font-bold">{banner.title}</h1>
                                    <p>{banner.description}</p>
                                    <button className="btn btn-warning mr-4">Discover More</button>
                                    <button className="btn btn-warning btn-outline">Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute flex transform justify-between bottom-12 right-12">
                                <a href={banner.prev} className="btn btn-circle mr-6">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const banners = [
    {
        title: "Accelerating Your Path to Success",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus. Sed ut perspiciatis unde omnis iste natus.",
        prev: "#slide4",
        next: "#slide2",
    },
    {
        title: "Accelerating Your Path to Success",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus. Sed ut perspiciatis unde omnis iste natus.",
        prev: "#slide1",
        next: "#slide3",
    },
    {
        title: "Accelerating Your Path to Success",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus. Sed ut perspiciatis unde omnis iste natus.",
        prev: "#slide2",
        next: "#slide4",
    },
    {
        title: "Accelerating Your Path to Success",
        description: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus. Sed ut perspiciatis unde omnis iste natus.",
        prev: "#slide3",
        next: "#slide1",
    },
]

export default Banner;
import { getServices } from '@/services/getServices';
import ServiceCard from '../cards/ServiceCard';

const Services = async () => {
    const {services} = await getServices()
    // console.log(data.services);
    return (
        <div className="text-[#0018f9] min-h-screen">
            <div className="text-center container">
                <h3 className="text-2xl font-bold text-warning">Our Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum veniam impedit ab explicabo, vitae accusantium!</p>
            </div>
            <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    services?.length > 0 && services?.map((service) => (
                        <ServiceCard service={service} key={service.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
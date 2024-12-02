import {services} from '../../lib/services'
import ServiceCard from '../cards/ServiceCard';

const Services = () => {
    // console.log(services);
    return (
        <div className="text-warning min-h-screen">
            <div className="text-center container">
                <h3 className="text-2xl font-bold text-warning">Our Services</h3>
                <h2 className="text-5xl">Our ServicesArea</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum veniam impedit ab explicabo, vitae accusantium!</p>
            </div>
            <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    services.map((service) => (
                        <ServiceCard service={service} key={service.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
import { useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaPeopleLine } from "react-icons/fa6";

const TouristSpotsDetails = () => {
    const spotDetails = useLoaderData();
    const {image,tourist_spot_name,country_name,location,average_cost,user_name ,short_description,seasonality,travel_time,totalVisitorsPerYear} = spotDetails;
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-14 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg  xl:max-w-lg lg:text-left">
                        <div className="flex justify-between">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">{tourist_spot_name} 
                        </h1>
                        <h2 className="text-2xl text-red-600 font-semibold">{average_cost}<span>/per person</span></h2>
                        </div>
                        <div className="flex items-center space-x-2 mt-3 mb-4 text-lg">
                            <IoLocationOutline/>
                           <p>{location}, {country_name}</p>
                    
                        </div>
                        <hr />
                        <div className="flex gap-5 mb-3">
                            <div className="flex gap-4">
                                <IoMdTime/>
                                <p>{travel_time}</p>
                            </div>
                            <div className="flex gap-4">
                                <SlCalender/>
                                <p>{seasonality}</p>

                            </div>
                            <div className="flex gap-4">
                                <FaPeopleLine/>
                                <p>{totalVisitorsPerYear} visitors per year</p>

                            </div>
                        </div>
                        <h1 className="text-4xl font-semibold text-[#063970]">Overview</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">{short_description}
                        </p>
                        <div className="text-[#FFA801]">
                            <p>Credit: {user_name}</p>

                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TouristSpotsDetails;
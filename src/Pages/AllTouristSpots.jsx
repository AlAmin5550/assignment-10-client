import {  useLoaderData, useNavigate } from "react-router-dom";
import "../Components/styles.css";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaPeopleLine } from "react-icons/fa6";

const AllTouristSpots = () => {
    const spots = useLoaderData();
    const navigate = useNavigate();
    const handleReadMore = _id => {
        navigate(`spotsDetails/${_id}`)
    }
    return (
        <div className="mt-6">
            {
                spots.map(spot => <div key={spot._id} className="bg-gray-100 text-gray-900">
                    <div className="container grid grid-cols-12 mx-auto mb-5 bg-gray-50">
                        <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full allSpots lg:col-span-4" style={{ backgroundImage: `url(${spot.image})` }}></div>
                        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 space-y-3">
                            <div className="flex justify-start">
                                <span className="px-2 py-1 text-xs rounded-full bg-default-600 text-gray-50">Label</span>
                            </div>
                            <h1 className="text-3xl font-semibold" >{spot.tourist_spot_name}</h1>
                            <hr />
                            <div className="flex gap-5 mb-3">
                                <div className="flex gap-4">
                                    <IoMdTime />
                                    <p>{spot.travel_time}</p>
                                </div>
                                <div className="flex gap-4">
                                    <SlCalender />
                                    <p>{spot.seasonality}</p>

                                </div>
                                <div className="flex gap-4">
                                    <FaPeopleLine />
                                    <p>{spot.totalVisitorsPerYear} visitors per year</p>

                                </div>
                            </div>
                            <button onClick={()=> handleReadMore(spot._id)} className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-default-600">
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-600">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="self-center text-sm">{spot.user_name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AllTouristSpots;
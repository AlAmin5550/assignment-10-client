import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const TouristSpotsCard = ({ touristSpots }) => {
    const {image,tourist_spot_name,country_name,location,average_cost,user_name ,_id} = touristSpots;
    
    return (
        <div>
            <div className="rounded-md shadow-md sm:w-96 bg-gray-50 text-gray-800">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{user_name}</h2>
                            <span className="inline-block text-xs leading-none text-gray-600">{country_name}</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>
                <img src={image} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                <div className="p-3">
                    
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2">
                            <IoLocationOutline/>
                           <p>{location}</p>
                    
                        </div>
                    </div>
                    <div className="space-y-3 text-start  ">
                        <p className="text-base  ">
                            <span className="text-base font-bold text-[#063970]">{tourist_spot_name}</span>
                        </p>
                        <p className='text-sm text-red-600 font-semibold'>{average_cost}<span className='text-xs text-gray-300'>/per person</span></p>
                        <hr />
                        <Link to={`spotsDetails/${_id}`}><button className='text-[#FFA801] btn'>More Details</button></Link>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TouristSpotsCard;

TouristSpotsCard.propTypes={
    touristSpots:PropTypes.object,
}
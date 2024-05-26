import { useContext} from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Routes/AuthProvider";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaPeopleLine } from "react-icons/fa6";
import "../Components/styles.css";
import Swal from "sweetalert2";


const MyList = () => {
    const allSpots = useLoaderData();
    const navigate = useNavigate();
    const { user , loading } = useContext(AuthContext);
    if(loading){
        return  <span className="loading loading-spinner loading-lg items-center"></span>;
    }
    
    const name = user.displayName;
    const email = user.email;
    const spots = allSpots.filter(spot => spot.user_name == name || spot.user_email == email);
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/touristSpots/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // reload
                            window.location.reload(false)
                

                        }
                    })
            }
        });
    }
    const handleUpdate = _id => {
        navigate(`/updateCoffee/${_id}`)
        
    }
    return (
        <div>
            {spots && spots.length > 0 ? (
                spots.map(spot => (
                    <div key={spot._id} className="bg-gray-100 text-gray-900 mt-4 mb-3">
                        <div className="container grid grid-cols-12 mx-auto mb-5 bg-gray-50">
                            <div className="bg-no-repeat bg-cover bg-gray-700 col-span-full allSpots lg:col-span-4" style={{ backgroundImage: `url(${spot.image})` }}></div>
                            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10 space-y-3">
                                <div className="flex justify-start">
                                    <span className="px-2 py-1 text-xs rounded-full bg-default-600 text-gray-50">Label</span>
                                </div>
                                <h1 className="text-3xl font-semibold">{spot.tourist_spot_name}</h1>
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
                                <div className=" ">
                                    <button onClick={() => handleDelete(spot._id)} className="btn btn-outline btn-error btn-sm mr-5">
                                        Delete

                                    </button>
                                    <button onClick={() => handleUpdate(spot._id)} className="btn btn-outline btn-sm btn-primary ">
                                        Update

                                    </button>
                                </div>
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
                    </div>
                ))
            ) : (
                <div className="container mx-auto">
                    <h1 className="text-5xl text-red-500">You haven&apos;t uploaded anything yet!</h1>
                    <p className="text-3xl text-blue-500">Go to Add Tourist Spot page</p>
                </div>
            )}
        </div>
    );
};

export default MyList;
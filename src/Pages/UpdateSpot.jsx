import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";


const UpdateSpot = () => {
    const spot = useLoaderData();
    const navigate = useNavigate();
    const {image,tourist_spot_name,country_name,location,average_cost,user_name,user_email ,short_description,seasonality,travel_time,totalVisitorsPerYear,_id} = spot;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.photo.value;
        const tourist_spot_name = form.spotName.value;
        const country_name = form.country.value;
        const location = form.location.value;
        const short_description = form.description.value;
        const average_cost = form.cost.value;
        const seasonality = form.season.value;
        const travel_time = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitor.value;
        const user_email = form.email.value;
        const user_name = form.name.value;
        const details = {image,tourist_spot_name,country_name,location,short_description,average_cost,seasonality,travel_time,totalVisitorsPerYear,user_email,user_name};
        fetch(`https://voyage-vista-server-nu.vercel.app/touristSpots/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                toast.success('Updated Successfully');
                navigate(`/allSpots/spotsDetails/${_id}`)
            }
        })
    }

    return (
        <div>
            <section className="p-6 bg-gray-100 text-gray-900">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal and Spot Information</p>
                            <p className="text-xs">Previous information are given in the boxes, if you want to update delete them and insert new infos. <br /> <span className="text-red-500">! Don&apos;t leave any blank fields.</span></p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input id="name" type="text" placeholder="Name" defaultValue={user_name} name="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" defaultValue={user_email} name="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Tourist Spot Name</label>
                                <input id="address" type="text" placeholder="" defaultValue={tourist_spot_name} name="spotName" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Location</label>
                                <input id="city" type="text" name="location" defaultValue={location} placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Country</label>
                                <input id="state" type="text" name="country" defaultValue={country_name} placeholder="Country" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"/>
                            </div>
                           
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Tourist Spot Details</p>
                            <p className="text-xs">Previous information are given in the boxes, if you want to update delete them and insert new infos. <br /> <span className="text-red-500">! Don&apos;t leave any blank fields.</span> </p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Seasonality</label>
                                <input id="username" type="text" name="season" defaultValue={seasonality} placeholder="Summer/Winter" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Travel Time</label>
                                <input id="website" type="text" name="travelTime" defaultValue={travel_time} placeholder="7 days" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="zip" className="text-sm">Cost/per person</label>
                                <input  type="text" placeholder="$25" name="cost" defaultValue={average_cost} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="zip" className="text-sm">Total Visitor/year</label>
                                <input  type="text" placeholder="10000" defaultValue={totalVisitorsPerYear} name="totalVisitor" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Description</label>
                                <textarea id="bio" placeholder="" name="description" defaultValue={short_description} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                <input  type="text" placeholder="http//" defaultValue={image} name="photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Update"  className="px-4 py-2 border rounded-md text-white bg-[#FFA801]" />

                </form>
            </section>
            <Toaster/>
        </div>
    );
};


export default UpdateSpot;
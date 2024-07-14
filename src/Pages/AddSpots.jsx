import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Routes/AuthProvider";


const AddSpots = () => {
    const {user} = useContext(AuthContext);
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
        console.log(details);
        fetch(' https://voyage-vista-server-nu.vercel.app/touristSpots',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.insertedId){
                toast.success('Uploaded successfully');
                form.reset();
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
                            <p className="text-xs">Fill out the form correctly. All fields are Required!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input id="name" defaultValue={user.displayName} type="text" placeholder="Name" name="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" placeholder="Email" defaultValue={user.email} name="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Tourist Spot Name</label>
                                <input id="address" type="text" placeholder="" name="spotName" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="city" className="text-sm">Location</label>
                                <input id="city" type="text" name="location" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"/>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="state" className="text-sm">Country</label>
                                <input id="state" type="text" name="country" placeholder="Country" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"/>
                            </div>
                           
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Tourist Spot Details</p>
                            <p className="text-xs">Fill out the form correctly. All fields are Required!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Seasonality</label>
                                <input id="username" type="text" name="season" placeholder="Summer/Winter" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Travel Time</label>
                                <input id="website" type="text" name="travelTime" placeholder="7 days" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="zip" className="text-sm">Cost/per person</label>
                                <input  type="text" placeholder="$25" name="cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="zip" className="text-sm">Total Visitor/year</label>
                                <input  type="text" placeholder="10000" name="totalVisitor" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Description</label>
                                <textarea id="bio" placeholder="" name="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Photo</label>
                                <div className="flex items-center space-x-2">
                                <input  type="text" placeholder="http//" name="photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-600 border-gray-300"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Upload"  className="px-4 py-2 border rounded-md text-white bg-[#FFA801]" />

                </form>
            </section>
            <Toaster/>
        </div>
    );
};

export default AddSpots;
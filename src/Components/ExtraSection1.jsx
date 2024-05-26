

const ExtraSection1 = () => {
    return (
        <div className=" bg-base-200 md:mt-14 text-center p-7 ">
            <div className="mb-6 ">
                <p className="text-[#FFA801]">Suggested</p>
                <h1 className="text-[#063970] text-4xl font-semibold ">Travel advisor and agencies</h1>
            </div>
            <div className="flex flex-col container mx-auto md:flex-row justify-center gap-8">
                <div className="w-36 h-40 bg-white">
                    <img src="https://i.ibb.co/2Nhyx7h/Trip-Advisor-Icon.png" alt="Trip-Advisor-Icon" className="object-cover object-center  rounded-t-md  "></img>
                    <h1 className="text-sm text-gray-300">Trip Advisor</h1>

                </div>
                <div className="w-36 h-40 bg-white">
                    <img src="https://i.ibb.co/G58nzsc/Airbnb.jpg" alt="Trip-Advisor-Icon" className="object-cover object-center  rounded-t-md  "></img>
                    <h1 className="text-sm text-gray-300">Airbnb</h1>

                </div>

                <div className="w-36 h-40 bg-white">
                    <img src="https://i.ibb.co/r7kkLRX/Ryanair.png" alt="Trip-Advisor-Icon" className="object-cover object-center  rounded-t-md  "></img>
                    <h1 className="text-sm text-gray-300">Ryan Air</h1>

                </div>
                <div className="w-36 h-40 bg-white">
                    <img src="https://i.ibb.co/1Rx3J0T/Vrbo.png" alt="Trip-Advisor-Icon" className="object-cover object-center  rounded-t-md  "></img>
                    <h1 className="text-sm text-gray-300">Vrbo</h1>

                </div>
                <div className="w-36 h-40 bg-white">
                    <img src="https://i.ibb.co/SfGxDhL/Expedia-New-2023.png" alt="Trip-Advisor-Icon" className="object-cover object-center  rounded-t-md  "></img>
                    <h1 className="text-sm text-gray-300">Expedia</h1>

                </div>

            </div>
        </div>
    );
};

export default ExtraSection1;
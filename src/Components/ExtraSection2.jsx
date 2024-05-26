

const ExtraSection2 = () => {
    return (
        <div className=" bg-base-200 flex flex-col md:mt-14 text-center p-7  md:flex-row ">
            <div>
                <p className="text-[#FFA801]">Suggested</p>
                <h1 className="text-[#063970] text-4xl font-semibold ">Travel Books</h1>
                <p>The best way to know a new place is by researching about. Weather you travel or not this is the best way to know about it&apos;s culture.</p>

            </div>
            <div className="relative flex items-center justify-center w-full text-gray-900">
                
                <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://m.media-amazon.com/images/I/817s5xAWMLL._SL1500_.jpg" alt="Image 1" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://images-na.ssl-images-amazon.com/images/I/91AhFcNtd2L._AC_UL600_SR600,600_.jpg" alt="Image 2" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://images-na.ssl-images-amazon.com/images/I/81J9QtZlVpL._AC_UL600_SR600,600_.jpg" alt="Image 3" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://m.media-amazon.com/images/I/81fKYoSkXsL._AC_UF1000,1000_QL80_.jpg" alt="Image 4" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5wEEQgkpLjoU3Xhg-RnSeQObXgqUt5zHne3QxkTc8g&s" alt="Image 5" />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ExtraSection2;
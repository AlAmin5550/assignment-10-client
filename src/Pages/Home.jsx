
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Countries from "../Components/Countries";
import ExtraSection1 from "../Components/ExtraSection1";
import TouristSpotsCard from "../Components/TouristSpotsCard";
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import "../Components/styles.css";
import ExtraSection2 from "../Components/ExtraSection2";


const Home = () => {
    const spots = useLoaderData()
    return (
        <div className="space-y-8 md:space-y-16 ">
            <Banner></Banner>
            <Countries></Countries>
            <ExtraSection1></ExtraSection1>
            <div className="container mx-auto ">
                <div className="mb-6 text-centre">
                    <p className="text-[#FFA801]">Checkout Featured</p>
                    <h1 className="text-[#063970] text-4xl font-semibold ">Top Destination</h1>
                </div>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        400:{
                          slidesPerView:2,
                        },
                        639: {
                          slidesPerView: 3,
                        },}}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        spots.map(spot => <SwiperSlide key={spot._id}><TouristSpotsCard touristSpots={spot}></TouristSpotsCard></SwiperSlide>)

                    }

                </Swiper>
            </div>
            <ExtraSection2></ExtraSection2>

        </div>
    );
};

export default Home;
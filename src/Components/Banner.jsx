
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import "./styles.css";
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1640002503811-62f6909513fa?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-7xl font-bold satisfy-regular text-[#FFA801]">Explore Europe</h1>
                                <p className="mb-5">The continent of history and culture. And Italy being the mirror of ancient civilization with its marvelous buildings.</p>
                                <Link to="/register"><button className="btn glass">Get Started</button></Link>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1687383553459-7ec9ea326196?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-white">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-7xl font-bold satisfy-regular text-[#FFA801]">Explore Europe</h1>
                                <p className="mb-5">Sign up now to learn more about Europe and the Places to visit for your next trip.</p>
                                <Link to="/register"><button className="btn glass">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-7xl font-bold satisfy-regular text-[#FFA801]">Explore Europe</h1>
                                <p className="mb-5">Also share with us your valuable insights as blogs in our site about the places you have visited!</p>
                                <Link to="/register"><button className="btn glass">Get Started</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
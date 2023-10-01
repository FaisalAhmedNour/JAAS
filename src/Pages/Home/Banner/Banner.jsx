import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function Banner() {
    return (
        <div className='w-full h-80 overflow-hidden z-10'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                    // clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0JhgWcX/pexels-pixabay-459203.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
}

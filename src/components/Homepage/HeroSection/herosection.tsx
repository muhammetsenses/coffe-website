import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./herosection.css";
import coffeeOut from "../../../assets/cafe-outt.png";
import iceLatte from "../../../assets/ice-latte-in.jpeg";
import iceLatteWoman from "../../../assets/woman.png";
import mangofresh from "../../../assets/mango-fresh.png"

const slider = [
  {
    src: coffeeOut,
    title: "Ferahlatıcı ve Keyifli Anlar",
    text: "ESPRESSOLOVE'da ferahlık ve huzur bulmaya hazır mısın?",
    alt:"espressolove"
  },
   {
     src: iceLatte,
     title: "Mükemmel lezzet, keyifli bir tat!",
     text: "ESPRESSOLOVE'da her yudumda eşsiz bir deneyime hazır mısın?",
     alt:"espressolovecoffee"
   },
   {
     src: mangofresh,
     title: "Keyif Veren Lezzetler ",
     text: "ESPRESSOLOVE serinleten eşsiz lezzetlerle yeni güne hazır mısın?",
     alt:"espressolove"
   },
   {
     src: iceLatteWoman,
     title: "Her Yudum Farklı Aşk",
     text: "ESPRESSOLOVE'da Kahvenizin tadında, ruhunuzu okşayan kısa bir molaya var mısın?",
     alt:"espressolovecoffee"
   },
];
const HeroSection = () => {
  return (
    <section className="hero-wrap pt-5">
      <div className="container">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <div className="container">
          {slider.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="row py-5 gx-5 hero-row align-items-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="hero-img">
                    <img src={slide.src} alt={slide.alt}/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-12">
                  <div className="hero-content" data-aos="fade-up">
                    <h1>{slide.title}</h1>
                    <p>{slide.text}</p>
                    <Link
                      to="/menu"
                      className="btn btn-danger p-3"
                      data-aos="fade-up"
                    >
                      Tüm Ürünler
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;

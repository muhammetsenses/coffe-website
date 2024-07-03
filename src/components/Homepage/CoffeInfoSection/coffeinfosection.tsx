import {Link } from "react-router-dom";
import "./coffeinfosection.css"
import cateringImg  from "../../../assets/catering.png";

const CoffeeInfoSection = () => (
  <section className="py-4 pt-lg-5">
    <div className="container">
      <div className="position-relative">
        <img className="img-fluid coffe-info-img position-absolute-lg position-relative-md" src={cateringImg} alt="cake" />
      </div>
      <div className="row">
        <div className="col-12 col-lg-7 offset-xl-6 col-xl-6">
          <div className="card coffee-info-card shadow pb-0 rounded-4">
            <div className="card-body p-5" >
              <h2>ESPRESSOLOVE</h2>
              <h4 className="cursive mb-3 lead">Kaliteli & Özgün Tatlar</h4>
              <p>ESPRESSOLOVE Coffee olarak, sadece kahve sunmakla kalmıyor, aynı zamanda kahve kültürünü de yaşatıyoruz. Baristalarımız, misafirlerinizin damak zevkine hitap eden özel tarifler ve kişiye özel kahve seçenekleri sunarak etkinliklerinizi daha da özel hale getiriyor. Kaliteye olan tutkumuz ve detaylara verdiğimiz önem sayesinde, ESPRESSOLOVE ile her etkinlik, lezzet dolu anılarla taçlanıyor.</p>
              <p>
                <Link className="btn btn-danger p-3" to="/menu#top">
                  Tüm Ürünler
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
);

export default CoffeeInfoSection;
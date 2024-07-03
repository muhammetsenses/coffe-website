import React from 'react';
import logo from '../../../assets/logo.png';
import serviceimg from '../../../assets/serviceimg.png';
import { FaHeartCircleCheck, FaLeaf, FaClock, FaRankingStar } from 'react-icons/fa6';
import ServiceIcon from "../../IconComp/iconCompanent.tsx"
import { IconType } from 'react-icons';
import "./servicesection.css"

interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
    aos: string;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description,aos }) => (
    <div className="service-card" data-aos={aos}>
      <div className="service-info">
        <div className="service-icon">
        <ServiceIcon icon={icon} />
        </div>
        <div className="service-body">
          
          <h3>{title}</h3>
          <p>{description}</p>
          
        </div>
      </div>
    </div>
  );

  const services: { icon: IconType; title: string; description: string; aos:string; }[] = [
    { icon: FaHeartCircleCheck, title: "Rahat Hissederim", description: "İçtikçe rahatlatan lezzetleri sizde keşfedin" ,aos: "fade-right"},
    { icon: FaRankingStar, title: "Kaliteli Hizmet", description: "En yüksek kalite standartlarına bağlı kalarak hizmet veriyoruz" ,aos: "fade-left"},
    { icon: FaHeartCircleCheck, title: "Sağlıklı Seçenekler", description: "Sağlığınızı düşünerek hazırlanmış lezzetler" ,aos: "fade-right"},
    { icon: FaLeaf, title: "Doğa Dostu", description: "Çevreye duyarlı üretim ve paketleme" ,aos: "fade-left"},
    { icon: FaClock, title: "Hızlı Servis", description: "Siparişleriniz en kısa sürede size ulaşır",aos: "fade-right" },
    { icon: FaRankingStar, title: "Ferah Ortam", description: "Rahat ve konforlu oturma alanlarımızla keyifli vakit geçirin" ,aos: "fade-left"}
  ];
  
  const ServiceSection: React.FC = () => (
    <section className="service">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="section-title style1 text-center mb-5">
              <span>
                <img style={{ width: "150px" }} src={logo} alt="logo" />
              </span>
              <h1 className="service-title">Kaliteli Kahve</h1>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4 pt-3">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} aos={service.aos} />
            ))}
          </div>
          <div className="col-lg-4 service-img-content" data-aos="fade-up">
            <div className="service-img">
              <img className='img-fluid' src={serviceimg} alt="service" />
            </div>
          </div>
          <div className="col-lg-4 pt-3">
            {services.slice(3).map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} aos={service.aos} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

export default ServiceSection;


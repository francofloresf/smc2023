import "./ContactUsStyles.css"
import logo from "../assets/logo-simcor.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reveal from 'react-reveal/Slide';

library.add(faPhone, faEnvelope, faMapMarker);
const ContactUs = () =>{
    return (
      
        <div className="contact-info-container">
      <Reveal effect="fadeInUp">
      <div className="contact-item">
      
        <FontAwesomeIcon icon="phone" />
        <p>+54 9 3515 29-1902</p>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon="envelope" />
        <p>gabysimcor@hotmail.com</p>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon="map-marker" />
        <p>Virgilio Moyano 1266</p>
      </div>
      
      <div className="logo">
      <img src={logo} alt="Logo Simcor"/>
      
      </div> 
      </Reveal>
      
    </div>
    
  );
};

export default ContactUs;
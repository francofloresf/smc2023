import "./ContactUsStyles.css"
import logo from "../assets/logo-simcor.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from "react-awesome-reveal";

library.add(faPhone, faEnvelope, faMapMarker);
const ContactUs = () =>{
    return (
      
        <div className="contact-info-container">
      <Fade cascade>
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
      
      <div className="logo-simcor">
      <img src={logo} alt="Logo Simcor"/>
      
      </div> 
      </Fade>
      
    </div>
    
  );
};

export default ContactUs;
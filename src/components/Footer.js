import "./FooterStyles.css";
import logo from "../assets/logo-simcor.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="top">
      <div className="logo">
        <img src={logo} alt="Logo Simcor" />
      </div>
      <div className="powered-by">
        Powered by{" "}
        <Link to="https://metacode.com.ar" target="_blank">
          Metacode
        </Link>
      </div>
      <div className="copy-r">
        <p>&copy; 2023 Derechos de autor. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
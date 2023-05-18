import "./FooterStyles.css"
import logo from "../assets/logo-simcor.png"


const Footer = () =>{
    return (
        <div classname="footer">
        <div className="top">
            <div className="logo">
                <img src={logo} alt="Logo Simcor"/>
                <div className="ilumina">
                    <i>Ilumina tu vida</i>
                </div>
            </div>
            <div className="instagram">
                <a href="/https://www.instagram.com/fraguflores/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
            </div>
        </div>
        </div>
    )
}


export default Footer
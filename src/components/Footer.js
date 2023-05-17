import "./FooterStyles.css"
import logo from "../assets/logo-simcor.png"


const Footer = () =>{
    return (
        <div classname="footer">
        <div className="top">
            <div className="logo">
                <img src={logo} alt="Logo Simcor"/>
                <i>Ilumina tu vida</i>
            </div>
            <div className="instagram">
                <a href="/https://www.instagram.com/fraguflores/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h2>Gente que confia en nuestros trabajos:</h2>
                <h4>Estancia Q2 country</h4>
                <h4>Estancia El Terron country</h4>
                <h4>Las delicias country</h4>
                <h4>Planta Reno</h4>
                <h4>-</h4>
                <h4>-</h4>
                <h4>-</h4>
                <h4>-</h4>
            </div>
            <div>
                <h4>Ministerio de educacion: Plan 100 escuelas</h4>
                <h4>Planta YPF</h4>
                <h4>asd</h4>
                <h4>asd</h4>
                <h4>-</h4>
                <h4>-</h4>
                <h4>-</h4>
                <h4>-</h4>
                <h4>-</h4>

            </div>
            <div>
                <h4>-</h4>
                <h4>-</h4>
                <h4>asdasdasdas</h4>
                <h4>asdasdasdasdsadasdasasdas   </h4>
                <h4>-</h4>
                <h4>-</h4>
                <h4>-</h4>
                <h4>-</h4>
            </div>

        </div>
        </div>

    )
}


export default Footer
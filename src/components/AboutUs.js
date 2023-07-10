import "./AboutUsStyles.css"
import Fade from 'react-reveal/Slide';

function AboutUs (){
    return(
        <Fade left cascade>
        <div className="about-container">
            <h1>Nuestra Historia</h1>
            <p>Somos una empresa ubicada en Córdoba, Argentina con una vasta experiencia en instalaciones eléctricas con más de 30 años de trabajos y obras en el rubro eléctrico.</p>
            <p>Contamos con un grupo de profesionales, infraestructuras y materiales de primeras marcas que nos permiten desarrollar proyectos confiables y de calidad, con flexibilidad para adaptarse a los requerimentos de cada uno de nuestros clientes. A su vez, la capacitación constante a nuestra mano de obra, nos permite mantener la competitividad de nuestros servicios.
            Abordando las tareas con capacidad operativa, preparación tecnica y avanzadas herramientas tecnológicas, ofrecemos amplio abanico de respuestas para cada problemática que se presente en el desarrollo de los proyectos afrontados
            </p>
            <h1>Nuestra Mision</h1>
            <p>La calidad de nuestro producto final nos ha permitido ser recomendados por distintas empresas, siendo esta recomendacion nuestro principal contacto con nuestros clientes.
            Todo esto apunta a un solo objetivo, que es la satisfacción de todas las empresas y particulares que se acercan a nosotros para seguir creciendo y prosperando en todos sus emprendimientos.
            </p>
        </div>
        </Fade>
    )
}

export default AboutUs;
import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import img5 from "../assets/img5.jpeg"
import Footer from "../components/Footer";
function Home() {
  return (
    <>
    <Navbar/>
    
    <Hero
      cName="hero"
      heroImg={img5}
      title="SOMOS SIMCOR"
      text="SERVICIO INTEGRAL DE MANTENIMIENTO ELÉCTRICO DE EMPRESAS"
      buttonText="Ver Más"
      url="/about"
      btnClass="show"
      
    />
      <Footer/>
     
    </>   
  );
}



export default Home;
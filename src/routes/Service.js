import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image11 from "../assets/img11.jpeg"
import Footer from "../components/Footer";
import Services from "../components/Services";

function Service (){
  return(
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={Image11}
        title="SERVICIOS"
        btnClass="hide"
      />
      <Services/>
      <Footer/>

    </>
  );
};

export default Service;
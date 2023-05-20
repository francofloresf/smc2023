import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image11 from "../assets/img11.jpeg"
import Footer from "../components/Footer";

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
      <Footer/>

    </>
  );
};

export default Service;
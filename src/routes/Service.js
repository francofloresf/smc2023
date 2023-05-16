import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image11 from "../assets/img11.jpeg"

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
     
    </>
  );
};

export default Service;
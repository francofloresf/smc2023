import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Image1 from "../assets/img1.jpeg"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"


function About (){
  return(
  <>
    <Navbar/>
    <Hero
      cName="hero-mid"
      heroImg={Image1}
      title="QUIENES SOMOS"
      btnClass="hide"
    />
    <AboutUs/>
    <Footer/>
     
  </>   
  );
};


export default About;
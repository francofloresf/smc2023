import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Image1 from "../assets/img1.jpeg"

function About (){
  return(
  <>
    <Navbar/>
    <Hero
      cName="hero-mid"
      heroImg={Image1}
      title="SOBRE NOSOTROS"
      btnClass="hide"
    />
     
  </>   
  );
};



export default About;
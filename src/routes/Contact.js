import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Image6 from "../assets/img6.jpeg"

function Contact (){
  return(
    <>
      <Navbar/>
        <Hero
          cName="hero-mid"
          heroImg={Image6}
          title="Contacto"
          btnClass="hide"
        />
    </>
  )
}



export default Contact;
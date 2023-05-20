import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Image6 from "../assets/img6.jpeg"
import ContactUs from "../components/ContactUs";



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
      <ContactUs/>
    </>
  )
}



export default Contact;
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import abotImage from "../assets/13.jpg";
function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        img={abotImage}
        title="Связаться с нами"
        btnClass="hide"
      />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Contact;

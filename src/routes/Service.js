import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import ServiceU from "../Components/ServiceU";
import abotImage from "../assets/3.jpg";

function Services() {
  return (
    <>
      <Hero cName="hero-mid" img={abotImage} title="Услуги" btnClass="hide" />
      <ServiceU/>
      <Footer />
    </>
  );
}
export default Services;

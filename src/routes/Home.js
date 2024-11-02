import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Share from "../Components/Share";
import HomeImg from "../assets/12.jpg";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        img={HomeImg}
        title="Пейзажи Якутии"
        text="нажми кнопку чтобы посмотреть достопримечательности Якутии"
        buttonText="Посмотреть"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Share />
      <Footer />
    </>
  );
}
export default Home;

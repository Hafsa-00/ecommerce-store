
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/herosec";
import AboutUs from "./components/aboutus";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      {/* <Food_carigery/>  */}
      <Footer/>

    </div>
  );
}

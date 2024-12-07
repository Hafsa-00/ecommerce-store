import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Herosection from "./components/herosection";
import Productslist from "./components/productslist";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
    <Herosection/>
    <Productslist/>
      <Footer/>
    </div>
  );
}

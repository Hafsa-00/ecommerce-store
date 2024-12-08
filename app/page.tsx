import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  );
}

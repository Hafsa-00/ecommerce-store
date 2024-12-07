import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

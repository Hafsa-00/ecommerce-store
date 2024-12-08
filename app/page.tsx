
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/herosec";
import FoodCategory from "./components/foodcategry";
import MeetShef from "./components/meetshef";
import MenuCom from "./components/menuitems";


export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <FoodCategory/>
      <MenuCom/>
      <MeetShef/>
      <Footer/>

    </div>
  );
}

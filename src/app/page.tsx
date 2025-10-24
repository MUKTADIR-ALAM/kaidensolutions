
import HeroSection from "./components/AboutUs";
import Card from "./components/Card";
import ContactSection from "./components/ContactUs";
import Footer from "./components/Footer";
import { AuroraBackgroundDemo } from "./components/Hero";
import { NavbarDemo } from "./components/Navbar";

export default function Home() {
  return (
    <div>
   <NavbarDemo></NavbarDemo>
   <AuroraBackgroundDemo></AuroraBackgroundDemo>


   <div className="m-5 my-20">
    <h1 className="my-9 text-center text-4xl font-bold"> Our services </h1>
    <div className="grid grid-cols-4 justify-center items-center gap-10 ">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
   </div>
   </div>



   <HeroSection></HeroSection>
   <ContactSection></ContactSection>
   <Footer></Footer>
   </div>
  );
}

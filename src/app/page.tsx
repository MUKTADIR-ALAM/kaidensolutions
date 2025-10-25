"use client";

import HeroSection from "./components/AboutUs";
import Card from "./components/Card";
import ContactSection from "./components/ContactUs";
import Footer from "./components/Footer";
import { AuroraBackgroundDemo } from "./components/Hero";
import { NavbarDemo } from "./components/Navbar";

export default function Home() {
  const services: {
    id: number;
    title: string;
    image: string;
    description: string;
  }[] = [
    {
      id: 1,
      title: "Customer Support",
      image:
        "https://images.pexels.com/photos/8867374/pexels-photo-8867374.jpeg?_gl=1*1dodnde*_ga*MTcwNTAzNDU1OS4xNzYxMzE1MjI0*_ga_8JE65Q40S6*czE3NjEzOTc0NzQkbzQkZzEkdDE3NjEzOTc0OTckajM3JGwwJGgw",
      description:
        "Provide seamless customer support through voice, chat, and email to ensure satisfaction and loyalty.",
    },
    {
      id: 2,
      title: "Sales & Lead Generation",
      image:
        "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?_gl=1*1tvq8fm*_ga*MTcwNTAzNDU1OS4xNzYxMzE1MjI0*_ga_8JE65Q40S6*czE3NjEzNzExMDEkbzIkZzEkdDE3NjEzNzE4MzUkajQ3JGwwJGgw",
      description:
        "Boost conversions and appointments by connecting with potential clients and driving qualified leads.",
    },
    {
      id: 3,
      title: "Virtual Assistance",
      image:
        "https://images.pexels.com/photos/7709252/pexels-photo-7709252.jpeg?_gl=1*wk0o0g*_ga*MTcwNTAzNDU1OS4xNzYxMzE1MjI0*_ga_8JE65Q40S6*czE3NjEzOTc0NzQkbzQkZzEkdDE3NjEzOTc1NjkkajMyJGwwJGgw",
      description:
        "Delegate your administrative, scheduling, and data entry tasks to skilled virtual assistants.",
    },
    {
      id: 4,
      title: "Office & Data Manage",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      description:
        "Streamline your CRM, invoicing, and reporting processes with efficient back-office support.",
    },
    {
      id: 5,
      title: "Digital Marketing Support",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      description:
        "Enhance your online presence with expert support in social media, SEO, and content marketing.",
    },
    {
      id: 6,
      title: "Technical & IT Support",
      image:
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?_gl=1*fma5mv*_ga*MTcwNTAzNDU1OS4xNzYxMzE1MjI0*_ga_8JE65Q40S6*czE3NjEzNzExMDEkbzIkZzEkdDE3NjEzNzE3NjYkajM0JGwwJGgw",
      description:
        "Get reliable helpdesk, troubleshooting, and tech support services to keep your business running smoothly.",
    },
  ];

  return (
    <div>
      <NavbarDemo></NavbarDemo>
      <AuroraBackgroundDemo></AuroraBackgroundDemo>

      <div className="m-5 my-20" id="services">
        <h1 className="my-9 text-center text-4xl font-bold"> Our services </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10">
          {services.map((service) => {
            return (
              <Card
                key={service?.id}
                title={service.title}
                description={service.description}
                image={service.image}
              ></Card>
            );
          })}
        </div>
      </div>

      <HeroSection></HeroSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
      <div className="bg-[#000000] h-10">
        <div className="text-lg text-gray-500 text-center ">
              © 2025, Site. All Rights Reserved. powered by <a className="text-[#95ff53] text-md font-bold" href="https://framiomotion.vercel.app/" target="_blank">Framio Motion</a>
            </div>
      </div>
    </div>
  );
}

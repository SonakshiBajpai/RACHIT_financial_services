import Image from "next/image";
import localFont from "next/font/local";
import Carousel from "@/components/Caraousel";
import ServiceCards from "@/components/ServiceCards";
import HomePanel from "@/components/HomePanel";
import Testimonials from "@/components/Testimonials";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <Carousel/>
    <ServiceCards/>
    <HomePanel/>
    <Testimonials/>
    </>
  )
}

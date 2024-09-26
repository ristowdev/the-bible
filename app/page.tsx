import Footer from "@/components/footer";
import Header from "@/components/header";
import Contact from "@/components/home/Contact";
import FAQs from "@/components/home/FAQs";
import Guarantee from "@/components/home/Guarantee";
import HeroSection from "@/components/home/HeroSection";
import Products from "@/components/home/Products";
import TheBible from "@/components/home/TheBible";

export default function Home() {
  return (
     <>
        <Header />
        <HeroSection />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="max-w-[1350px] w-[93%]">
            <TheBible />
            <Products />
            <Guarantee />
          </div>
        </div>
        <FAQs />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="max-w-[1350px]  w-[93%]">
            <Contact />
          </div>
        </div>
        <Footer />
     </>
  );
}

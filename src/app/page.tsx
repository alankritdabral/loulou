import Hero from "@/components/Hero";
import About from "@/components/About";
import Specials from "@/components/Specials";
import MenuSection from "@/components/MenuSection";
import Reservation from "@/components/Reservation";
import CustomerReviews from "@/components/CustomerReviews";
import InstagramFeed from "@/components/InstagramFeed";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Specials />
      <Gallery />
      <MenuSection />
      <CustomerReviews />
      <Team />
      <Reservation />
      <InstagramFeed />
    </main>
  );
}

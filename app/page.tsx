import MossitosHero from "@/components/home/MossitosHero";
import PopularItems from "@/components/home/PopularItems";
import EventsSection from "@/components/home/EventsSection";
import ReservationSection from "@/components/home/ReservationSection";

export default function Home() {
  return (
    <>
      <MossitosHero />
      <PopularItems />
      <EventsSection />
      <ReservationSection />
    </>
  );
}

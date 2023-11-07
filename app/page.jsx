import Hero from "@/app/ui/sections/Hero";
import SectionTitle from "@/app/ui/SectionTitle";
import About from "@/app/ui/sections/About";
import Services from "@/app/ui/sections/Services";
import Testimonials from "@/app/ui/sections/Testimonials";
import Cta from "@/app/ui/sections/Cta";
import Disclaimer from "@/app/ui/sections/Disclaimer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionTitle title="Qui suis-je ? 🤔" />
      <About />
      <SectionTitle title="Les services 🤩" />
      <Services />
      <SectionTitle title="Vos témoignages 🥰" />
      <Testimonials />
      <SectionTitle title="Convaincu ? 🤗" />
      <Cta />
      <Disclaimer />
    </main>
  );
}

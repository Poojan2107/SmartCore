import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import WhyUs from "@/components/WhyUs";
import PricingTable from "@/components/PricingTable";
import ProcessSection from "@/components/ProcessSection";
import TechnologySection from "@/components/TechnologySection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LogoIntro from "@/components/LogoIntro";

export default function Home() {
  return (
    <>
      <LogoIntro />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesGrid />
        <WhyUs />
        <ProcessSection />
        <PricingTable />
        <TechnologySection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}


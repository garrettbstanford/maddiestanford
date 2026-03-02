import Navigation from "./components/Navigation";
import IntroHeroSection from "./components/IntroHeroSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkSection from "./components/WorkSection";
import JournalSection from "./components/JournalSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";
import { navLinks } from "./data/siteContent";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-50 text-stone-900 selection:bg-pomegranate selection:text-white">
      <Navigation navLinks={navLinks} />
      <main>
        <IntroHeroSection />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <JournalSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

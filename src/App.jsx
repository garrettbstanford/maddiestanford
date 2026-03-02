import Navigation from "./components/Navigation";
import IntroHeroSection from "./components/IntroHeroSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioPageSection from "./components/PortfolioPageSection";
import SiteFooter from "./components/SiteFooter";
import { navLinks, portfolioPages } from "./data/siteContent";
import useScrollReveal from "./hooks/useScrollReveal";

function HomePage() {
  return (
    <>
      <IntroHeroSection />
      <HeroSection />
      <AboutSection />
    </>
  );
}

export default function App() {
  useScrollReveal();
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const portfolioPage = portfolioPages[pathname];

  return (
    <div className="min-h-screen overflow-x-hidden bg-stone-50 text-stone-900 selection:bg-pomegranate selection:text-white">
      <Navigation navLinks={navLinks} />
      <main>
        {portfolioPage ? <PortfolioPageSection page={portfolioPage} /> : <HomePage />}
      </main>
      <SiteFooter />
    </div>
  );
}

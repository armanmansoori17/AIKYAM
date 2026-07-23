import CollegeHeader from "@/components/CollegeHeader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import QuoteSection from "@/components/QuoteSection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AboutCollegeSection from "@/components/AboutCollegeSection";

export default function HomePage() {
  return (
    <main>
      {/* Top college identity strip */}
      <CollegeHeader />

      {/* Sticky navigation — sits just below college header */}
      <Navbar />

      {/* ① Cinematic Hero — college + event title + image placeholder */}
      <HeroSection />

      {/* ② Tagline + Stats + About */}
      <TaglineSection />

      {/* About College */}
      <AboutCollegeSection />

      {/* ③ Vision Quote Section */}
      <QuoteSection />

      {/* ④ Events — Tech/Creative/Adventure + RANARANGA Gaming Zone */}
      <EventsSection />

      {/* ⑥ Newsletter + College Badge CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

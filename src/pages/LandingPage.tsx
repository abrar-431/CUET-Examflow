import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { NewsSection } from '../components/NewsSection';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <NewsSection />
      <Footer></Footer>
    </div>
  );
}
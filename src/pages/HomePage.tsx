import Hero from '../components/Hero';
import Company from '../components/Company';
import About from '../components/About';
import Services from '../components/Services';
import ProjectsPreview from '../components/ProjectsPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeNotices from '../components/HomeNotices';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Company />
      <About />
      <Services />
      <ProjectsPreview />
      <WhyChooseUs />
      <HomeNotices />
      <Contact />
    </>
  );
}

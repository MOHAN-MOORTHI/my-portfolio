import { BrowserRouter } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Education,
  Certifications,
  Footer,
  StarsCanvas,
  ScrollToTop,
  CustomCursor,
  Preloader,
  SocialSidebar
} from "./components";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <Preloader />
      <SocialSidebar />
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#915eff] origin-left z-50"
        style={{ scaleX }}
      />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;

import About from './components/About';
import Contact from './components/Contact';
// import Experience from "./components/Experience";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Technology from './components/Technology';
import spinningGif from './assets/rotate.gif';
import { useEffect, useState } from 'react';
import { Atom } from 'react-loading-indicators';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      {isLoading ? (
        // <Loading/>
        <div className="flex items-center justify-center h-screen w-screen size-full ">
          <div className="scale-[1.5]">
            <Atom color="#318ecc" size="large" text="" textColor="#cd2c2c" />
          </div>
        </div>
      ) : (
        <>
          <p className="fixed right-4 bottom-4">
            <a
              href="https://flowcv.com/resume/q5671gtm0u"
              target="_blank"
              title="Resume"
            >
              <img src={spinningGif} alt="Resume" className="w-16 h-16" />
            </a>
          </p>

          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Technology />
            {/* <Experience /> */}
            <Project />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

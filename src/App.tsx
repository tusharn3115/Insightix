/**
 * @copyright 2024 tushxr05
 * @license Apache-2.0
 */

// lenis
import { ReactLenis } from "lenis/react";

// imports components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Process from "./components/Process";
import Overview from "./components/Overview";
import Review from "./components/Review";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Banner />
          <Features />
          <Process />
          <Overview />
          <Review />
          <Blog />
          <Cta />
        </main>
      </div>
      <Footer />
    </ReactLenis>
  );
};
  
export default App;

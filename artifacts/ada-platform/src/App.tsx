import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyAda from "@/components/WhyAda";
import Quote from "@/components/Quote";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <WhyAda />
        <Quote />
        <Courses />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

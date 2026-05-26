import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <About />
        <PracticeAreas />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

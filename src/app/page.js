"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollNavigator from "@/components/ScrollNavigator";

import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen onFinish={() => setLoaded(true)} />

      {loaded && (
        <>
          <Header />

          <PageTransition>
            <Hero />
            <Profile />
            <About />
            <PracticeAreas />
            <Articles />
            <Contact />
            <Footer />
          </PageTransition>

          <ScrollNavigator />
          <ScrollProgress />
          <CustomCursor />
        </>
      )}
    </>
  );
}

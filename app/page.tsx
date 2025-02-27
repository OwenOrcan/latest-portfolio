"use client";
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Script from "next/script"
import { useEffect } from "react"

const GA_TRACKING_ID = "G-HD28Q1REEY";

export default function Home() {
  useEffect(() => {
    const trackPageView = () => {
      if (typeof window !== "undefined") {
        const url = window.location.pathname + window.location.hash;
        (window as any).gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    // Track initial page load
    trackPageView();

    // Track hash (#) navigation
    window.addEventListener("hashchange", trackPageView);

    return () => {
      window.removeEventListener("hashchange", trackPageView);
    };
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>

      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

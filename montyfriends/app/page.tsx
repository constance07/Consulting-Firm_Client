'use client';
import {useEffect} from "react";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import CompanyAbout from "./components/companyAbout";
import Footer from "./components/footer";

export default function HomePage() {
  /*Currently Not Working */
  return (
    useEffect(() => {
      window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }}, []),

  <>
    <Navigation/>
    <Hero/>
    <CompanyAbout/>
    <Footer/>
  </>
  )
}

'use client';
import {useEffect} from "react";
import Image from "next/image";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import CompanyAbout from "./components/companyAbout";

export default function Home() {
  /*Currently Not Working */
  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []),

  <>
    <Navigation/>
    <Hero/>
    <CompanyAbout/>
  </>
  )
}

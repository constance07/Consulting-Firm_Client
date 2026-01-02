'use client';
import {useEffect} from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Contact from './contact';

export default function ContactPage() {
  /*Currently Not Working */
  return (
    useEffect(() => {
      window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }}, []),

  <>
    <Navigation/>
    <Contact/>
    <Footer/>
  </>
  )
}

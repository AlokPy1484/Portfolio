"use client";
import Hero from "./pages/Hero";
import Navbar from "@/components/ui/Navbar";
import About from "./pages/About";
import Stack from "./pages/Stack";
import OSS from "./pages/OpenSource";
import './style.css'
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Stack/>
    <OSS/>
    <Contact/>
    </div>
  );
}

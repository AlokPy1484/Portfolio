"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Vortex } from "@/components/ui/vortex";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
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

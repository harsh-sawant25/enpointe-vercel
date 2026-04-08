"use client";
import React from "react";
// import Hero from "@/components/Hero";
import UseCase from "@/components/Use-Cases";
import Hero from "@/components/Hero";
import Visionary from "@/components/Visionary";
import Citex from "@/components/Citex";
import Clients from "@/components/Clients";
import Process from "@/components/Processes";
import OurService from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import Mobile from "@/components/mobile-app";
import Integration from "@/components/Integration";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Snapshot from "@/components/Snapshot";
import Founder from "@/components/Founder";

export default function Home() {
  return (
    <div>
      <Hero />
      <Visionary />
      <Founder />
      <Stats />
      <Snapshot />
      <Services />
      <CaseStudy />
      <Integration />
    </div>
  );
}

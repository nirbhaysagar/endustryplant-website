import React from "react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import ClientsBar from "@/components/ClientsBar";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import FAQSection from "@/components/FAQSection";
import StickyCTASection from "@/components/StickyCTASection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ClientsBar />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <FAQSection />
      <StickyCTASection />
    </PageLayout>
  );
};

export default Index;

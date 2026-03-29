import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import ClientsBar from "@/components/ClientsBar";
import BeliefSection from "@/components/BeliefSection";
import DifferenceSection from "@/components/DifferenceSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import FilterSection from "@/components/FilterSection";
import ConfidenceSection from "@/components/ConfidenceSection";
import StickyCTASection from "@/components/StickyCTASection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ClientsBar />
      <BeliefSection />
      <DifferenceSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <FilterSection />
      <ConfidenceSection />
      <StickyCTASection />
    </PageLayout>
  );
};

export default Index;

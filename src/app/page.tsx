import HeroSection from "@/components/home/HeroSection";
import ImpactDashboard from "@/components/home/ImpactDashboard";
import ProjectsExplorer from "@/components/home/ProjectsExplorer";
import MapSection from "@/components/home/MapSection";
import DonationSection from "@/components/home/DonationSection";
import StoriesSection from "@/components/home/StoriesSection";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactDashboard />
      <ProjectsExplorer />
      <MapSection />
      <StoriesSection />
      <DonationSection />
      <PartnersSection />
      <NewsletterSection />
    </>
  );
}

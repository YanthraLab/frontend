import { NavigationBar } from "@/components/molecules/NavigationBar/NavigationBar";
import { 
  HeroSection, 
  WhyChooseSection, 
  PopularPathsSection, 
  FooterSection 
} from "@/components/organisms";

export default function Home() {
  return (
    <main className="min-h-screen  bg-white dark:bg-[#0B1120] text-slate-800 dark:text-slate-200 font-sans selection:bg-cyan-500/30">
      <NavigationBar />
      <HeroSection />
      <WhyChooseSection />
      <PopularPathsSection />
      <FooterSection />
    </main>
  );
}

import { Cpu } from "lucide-react";
import { FooterColumn } from "@/components/molecules/FooterColumn/FooterColumn";

const FooterLinks = () => {
  const platformLinks = [
    { label: "Learning", href: "#" },
    { label: "Marketplace", href: "#" },
    { label: "Innovation Hub", href: "#" },
  ];

  const resourcesLinks = [
    { label: "Documentation", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Community", href: "#" },
  ];

  const accessLinks = [
    { label: "Student Login", href: "#" },
    { label: "Admin Portal", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="">
      <footer className="bg-slate-100 dark:bg-[#050914] pt-16 pb-8 border-t border-slate-200 dark:border-slate-900">
        <div className="container mx-auto px-4 w-[85%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-lg">
                <Cpu className="text-cyan-600 dark:text-cyan-400" />
                <span>Yanthra</span>
              </div>
              <p className="text-slate-600 dark:text-slate-500 text-xs leading-relaxed">
                Empowering the next generation of IoT innovators
              </p>
            </div>

            <FooterColumn title="Platform" links={platformLinks} />
            <FooterColumn title="Resources" links={resourcesLinks} />
            <FooterColumn title="Access" links={accessLinks} />
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-600 text-sm">
            <p>&copy; 2026 Yanthra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export { FooterLinks };

import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="py-20 bg-linear-to-b from-slate-50 to-blue-50 dark:from-[#0B1120] dark:to-blue-950/40 border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Ready to Start Your IoT Journey?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto text-xs">
          Join thousands of students learning IoT development with Yanthra
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-md shadow-md"
        >
          Create Free Account
        </Button>
      </div>
    </div>
  );
};
export { CTASection };

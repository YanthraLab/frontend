"use client";

import { Button } from "@/components/ui/button";
import { Cpu } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-[#0B1120] dark:to-blue-950/40 border-t border-slate-200 dark:border-slate-900">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Ready to Start Your IoT Journey?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                Join thousands of students learning IoT development with Yanthra
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-md shadow-md">
                Create Free Account
            </Button>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-slate-100 dark:bg-[#050914] pt-16 pb-8 border-t border-slate-200 dark:border-slate-900">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-xl">
                        <Cpu className="text-cyan-600 dark:text-cyan-400" />
                        <span>Yanthra</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-500 text-sm leading-relaxed">
                        Empowering the next generation of IoT innovators
                    </p>
                </div>

                <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-cyan-600 dark:text-cyan-500">Platform</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Learning</Link></li>
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Marketplace</Link></li>
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Innovation Hub</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-cyan-600 dark:text-cyan-500">Resources</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</Link></li>
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tutorials</Link></li>
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Community</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-slate-900 dark:text-white font-semibold mb-4 text-cyan-600 dark:text-cyan-500">Access</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Student Login</Link></li>
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Admin Portal</Link></li>
                        <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-600 text-sm">
                <p>&copy; 2026 Yanthra. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </>
  );
};

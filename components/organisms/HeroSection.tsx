"use client";

import { Button } from "@/components/ui/button";
import { Cpu, Wifi, Activity, Cloud, Play } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center w-full h-screen bg-slate-50 dark:bg-slate-950 pt-20 pb-16 overflow-hidden">
      {/* Background gradients/effects could go here */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[100px]" />

      <div className="container w-[75%] flex justify-center items-center px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 text-sm font-medium shadow-sm dark:shadow-none">
              <Cpu className="w-4 h-4" />
              <span>IoT Self-Learning Platform</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Master IoT <br />
              Development with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                Yanthra
              </span>
            </h1>

            <p className="text-md text-slate-600 dark:text-slate-400 max-w-lg">
              Learn, Build, and Innovate with structured courses, hands-on
              projects, and a thriving community of IoT enthusiasts. From
              Arduino to advanced robotics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 shadow-md"
              >
                Start Learning Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white dark:bg-transparent border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md px-8 gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Demo
              </Button>
            </div>
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-0 border-t border-slate-200 dark:border-slate-800/50">
              {[
                { icon: Cpu, label: "Microcontrollers" },
                { icon: Wifi, label: "Connectivity" },
                { icon: Activity, label: "Sensors" },
                { icon: Cloud, label: "Cloud IoT" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 text-center group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-200 dark:group-hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-600 text-xs dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Image Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-2xl relative">
              <div className="absolute -right-4 -top-4 z-20">
                <div className="bg-cyan-500 rounded-lg p-3 shadow-lg flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="text-xs font-medium opacity-90">
                      Certificate Ready
                    </div>
                    <div className="text-xs opacity-75">
                      Get industry-recognized certs
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-600">
                {/* This would be the image */}
                <div className="text-center p-8">
                  <Cpu className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Interactive Learning Environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

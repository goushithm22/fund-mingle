
import React from "react";
import AnimatedIllustration from "./AnimatedIllustration";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return <section className="min-h-screen pt-24 px-6 md:pt-32 md:px-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <div className="text-left max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-gray-800 opacity-0 animate-fade-in relative">
              <span className="relative inline-block">
                Idea<span className="text-[#ff4141]">Sync</span>
                <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#ff4141]"></div>
              </span>
            </h1>
            
            <div className="space-y-6 mt-6 opacity-0 animate-fade-in-slow">
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed">Discover the easiest way to connect with the right investors or founders. No noise, just real opportunities.</p>
              
              
              <div className="pt-4">
                <Button className="button-hover rounded-md text-base font-medium px-6 py-5 bg-[#ff4141] hover:bg-[#ff4141]/90 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <AnimatedIllustration />
        </div>
      </div>
    </section>;
};

export default Hero;

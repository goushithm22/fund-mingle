
import React from "react";
import { Link } from "react-router-dom";
import AnimatedIllustration from "./AnimatedIllustration";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 px-6 md:pt-32 md:px-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <div className="text-left max-w-xl">
            <div className="mb-2">
              <span className="text-[#ff4141] bg-[#ff4141]/5 px-4 py-1.5 rounded-full text-sm font-medium">
                Beta Access
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-gray-800 opacity-0 animate-fade-in relative">
              <span className="relative inline-block">
                Idea<span className="text-[#ff4141]">Sync</span>
                <div className="absolute -bottom-1 left-0 w-1/3 h-1 bg-[#ff4141]"></div>
              </span>
            </h1>
            
            <div className="space-y-6 mt-6 opacity-0 animate-fade-in-slow">
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed">
                Discover the easiest way to connect with the right investors or founders. No noise, just real opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#ff4141]/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#ff4141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Smart Matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#ff4141]/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#ff4141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Verified Profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#ff4141]/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#ff4141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Direct Communication</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#ff4141]/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#ff4141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">No Commission Fees</span>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button className="button-hover rounded-md text-base font-medium px-6 py-5 bg-[#ff4141] hover:bg-[#ff4141]/90 text-white">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                
                <Link to="/investor-dashboard">
                  <Button variant="outline" className="rounded-md text-base font-medium px-6 py-5 border-gray-200 text-gray-800 hover:bg-gray-50 w-full sm:w-auto">
                    Investor Dashboard
                  </Button>
                </Link>
              </div>
              
              <div className="pt-4 flex items-center gap-2 text-sm text-gray-500">
                <span>Trusted by 1000+ startups and investors</span>
                <div className="flex -space-x-2 overflow-hidden">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-6 w-6 rounded-full bg-gray-200 border border-white" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <AnimatedIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ease-in-out", scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-medium font-display tracking-tight opacity-90 hover:opacity-100 transition-opacity">
          IdeaSync
        </a>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" className="link-underline font-medium text-foreground/80 hover:text-foreground hover:bg-transparent transition-colors" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="button-hover font-medium rounded-md px-4 py-2 text-sm transition-all text-white text-justify bg-[#ff4141]">
            Register
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;
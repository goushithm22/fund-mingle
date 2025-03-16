
import React, { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const AnimatedIllustration = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // This effect could be used to add more complex animations with libraries
    // like GSAP if needed in the future
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center animate-float">
      <svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="w-full h-full max-w-[520px] max-h-[520px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large circle */}
        <circle
          cx="400"
          cy="300"
          r="180"
          fill="none"
          stroke="hsl(var(--primary) / 0.05)"
          strokeWidth="2"
          className="animate-pulse-subtle"
        />
        
        {/* Middle circle */}
        <circle
          cx="400"
          cy="300"
          r="140"
          fill="none"
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="2"
          className="animate-pulse-subtle"
          style={{ animationDelay: "0.5s" }}
        />
        
        {/* Inner circle */}
        <circle
          cx="400"
          cy="300"
          r="100"
          fill="none"
          stroke="hsl(var(--primary) / 0.2)"
          strokeWidth="2"
          className="animate-pulse-subtle"
          style={{ animationDelay: "1s" }}
        />
        
        {/* Connection lines */}
        <path
          d="M 400 120 L 400 200"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw"
          style={{ animationDelay: "0.2s" }}
        />
        
        <path
          d="M 220 300 L 300 300"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw"
          style={{ animationDelay: "0.4s" }}
        />
        
        <path
          d="M 500 300 L 580 300"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw"
          style={{ animationDelay: "0.6s" }}
        />
        
        <path
          d="M 400 400 L 400 480"
          stroke="hsl(var(--primary) / 0.5)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw"
          style={{ animationDelay: "0.8s" }}
        />
        
        {/* Nodes */}
        <circle
          cx="400"
          cy="120"
          r="12"
          fill="hsl(var(--primary) / 0.1)"
          stroke="hsl(var(--primary) / 0.8)"
          strokeWidth="2"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        />
        
        <circle
          cx="220"
          cy="300"
          r="12"
          fill="hsl(var(--primary) / 0.1)"
          stroke="hsl(var(--primary) / 0.8)"
          strokeWidth="2"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        />
        
        <circle
          cx="580"
          cy="300"
          r="12"
          fill="hsl(var(--primary) / 0.1)"
          stroke="hsl(var(--primary) / 0.8)"
          strokeWidth="2"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.4s" }}
        />
        
        <circle
          cx="400"
          cy="480"
          r="12"
          fill="hsl(var(--primary) / 0.1)"
          stroke="hsl(var(--primary) / 0.8)"
          strokeWidth="2"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.6s" }}
        />
        
        {/* Central node */}
        <circle
          cx="400"
          cy="300"
          r="30"
          fill="hsl(var(--primary) / 0.2)"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1.8s" }}
        />
        
        {/* Rotating ring */}
        <circle
          cx="400"
          cy="300"
          r="60"
          fill="none"
          stroke="hsl(var(--primary) / 0.4)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="animate-rotate"
        />
        
        {/* Dollar symbol */}
        <text
          x="400"
          y="300"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="24"
          fill="hsl(var(--primary))"
          fontWeight="bold"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "2s" }}
        >
          $
        </text>
        
        {/* Small texts */}
        <text
          x="400"
          y="120"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"
          fill="hsl(var(--primary))"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "2.2s" }}
        >
          IDEA
        </text>
        
        <text
          x="220"
          y="300"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"
          fill="hsl(var(--primary))"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "2.4s" }}
        >
          FOUNDERS
        </text>
        
        <text
          x="580"
          y="300"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"
          fill="hsl(var(--primary))"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "2.6s" }}
        >
          INVESTORS
        </text>
        
        <text
          x="400"
          y="480"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"
          fill="hsl(var(--primary))"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "2.8s" }}
        >
          GROWTH
        </text>
      </svg>
    </div>
  );
};

export default AnimatedIllustration;

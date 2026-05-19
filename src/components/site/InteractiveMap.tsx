import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin } from "lucide-react";

const locations = [
  { id: "delhi", name: "New Delhi", x: 30, y: 30, members: 450, chapter: "Active" },
  { id: "mumbai", name: "Mumbai", x: 25, y: 60, members: 620, chapter: "Active" },
  { id: "blr", name: "Bengaluru", x: 35, y: 80, members: 890, chapter: "Active" },
  { id: "hyd", name: "Hyderabad", x: 42, y: 65, members: 510, chapter: "Active" },
  { id: "chennai", name: "Chennai", x: 45, y: 82, members: 380, chapter: "Active" },
  { id: "pune", name: "Pune", x: 28, y: 62, members: 290, chapter: "Active" },
  { id: "kolkata", name: "Kolkata", x: 70, y: 45, members: 310, chapter: "Active" },
  { id: "ahmedabad", name: "Ahmedabad", x: 18, y: 48, members: 150, chapter: "Growing" },
  { id: "jaipur", name: "Jaipur", x: 26, y: 36, members: 120, chapter: "Growing" },
];

export function InteractiveMap() {
  const [hoveredNode, setHoveredNode] = useState<typeof locations[0] | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-square md:aspect-[4/3] bg-card rounded-[2.5rem] border border-border/50 shadow-soft overflow-hidden p-6 flex flex-col items-center justify-center">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Map Content Container */}
      <div className="relative w-full h-full max-w-md mx-auto">
        {/* Placeholder SVG India Map Outline for aesthetics */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-primary/10 fill-current drop-shadow-md">
          {/* Rough abstract map shape for visual context (can be replaced with accurate SVG path) */}
          <path d="M40,10 L30,20 L25,35 L15,45 L15,55 L25,65 L30,85 L40,95 L50,90 L60,80 L80,50 L85,45 L75,35 L60,30 L55,20 Z" />
        </svg>

        {locations.map((loc, i) => (
          <div
            key={loc.id}
            className="absolute z-10 group"
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            onMouseEnter={() => setHoveredNode(loc)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            {/* Ping effect */}
            <div className="absolute -inset-2 bg-primary rounded-full opacity-30 animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.2}s` }} />
            
            {/* Node */}
            <div className="relative w-3 h-3 bg-primary rounded-full shadow-glow cursor-pointer transition-transform group-hover:scale-150" />
            
            {/* Tooltip */}
            <AnimatePresence>
              {hoveredNode?.id === loc.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lavender border border-white z-50 pointer-events-none"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span className="font-semibold text-sm text-foreground">{loc.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">
                    <strong className="text-foreground">{loc.members}</strong> members
                  </div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider">
                    {loc.chapter} Chapter
                  </div>
                  
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      {/* Decorative Gradient overlays */}
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/20 blur-3xl rounded-full pointer-events-none mix-blend-multiply" />
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/20 blur-3xl rounded-full pointer-events-none mix-blend-multiply" />
    </div>
  );
}

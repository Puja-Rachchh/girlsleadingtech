import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlassCard } from "./GlassCard";
import { ExternalLink, ChevronDown } from "lucide-react";
import type { Resource } from "@/data/types";

export function RoadmapVisualizer({ items }: { items: Resource[] }) {
  // Group items by category (domain)
  const domains = Array.from(new Set(items.map((i) => i.category)));
  const [activeDomain, setActiveDomain] = useState<string>(domains[0] || "");

  const activeItems = items.filter((i) => i.category === activeDomain);

  return (
    <div className="w-full">
      {/* Domain Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {domains.map((domain) => (
          <button
            key={domain}
            onClick={() => setActiveDomain(domain)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              activeDomain === domain
                ? "bg-foreground text-background shadow-soft"
                : "bg-white/10 text-foreground/80 hover:bg-white/20 backdrop-blur-md ring-1 ring-border/50"
            }`}
          >
            {domain}
          </button>
        ))}
      </div>

      {/* Roadmap Path */}
      <div className="relative pl-8 md:pl-12 border-l-2 border-primary/20 space-y-10">
        <AnimatePresence mode="popLayout">
          {activeItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative"
            >
              {/* Step Marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-6 h-6 w-6 rounded-full bg-background border-4 border-primary shadow-soft flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <GlassCard className="group relative overflow-hidden p-6 hover:shadow-lavender transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block mb-3 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                      Step {idx + 1}
                    </span>
                    <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
                    {item.author && (
                      <p className="mt-1 text-xs font-medium text-secondary">by {item.author}</p>
                    )}
                    {item.description && (
                      <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                  
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      View Resource
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { Linkedin, Github, Twitter } from "lucide-react";

export interface SpeakerCardProps {
  name: string;
  designation?: string;
  company?: string;
  image?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  delay?: number;
}

export function SpeakerCard({ name, designation, company, image, linkedin, github, twitter, delay = 0 }: SpeakerCardProps) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <article
      className="group relative animate-fade-up overflow-hidden rounded-3xl bg-card ring-1 ring-border/60 shadow-soft transition-all duration-700 hover:-translate-y-2 hover:shadow-lavender"
      style={{ animationDelay: `${(delay % 12) * 0.05}s` }}
    >
      {/* Portrait */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-muted via-pink-soft/10 to-lavender/10">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:rotate-1"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-6xl text-primary/40">
            {initials}
          </div>
        )}

        {/* Gradient veil at bottom for legibility on hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Social pills — top right */}
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#0A66C2] backdrop-blur-md ring-1 ring-white/70 transition hover:bg-[#0A66C2] hover:text-white"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on GitHub`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-foreground backdrop-blur-md ring-1 ring-white/70 transition hover:bg-foreground hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on Twitter`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#1DA1F2] backdrop-blur-md ring-1 ring-white/70 transition hover:bg-[#1DA1F2] hover:text-white"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Caption */}
      <div className="relative px-5 pb-5 pt-4 bg-card/80 backdrop-blur-md">
        <h3 className="font-display text-lg leading-tight tracking-tight">{name}</h3>
        {designation && (
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
            {designation}
          </p>
        )}
        {company && (
          <p className="mt-0.5 text-[11px] text-muted-foreground line-clamp-1">{company}</p>
        )}
      </div>
    </article>
  );
}

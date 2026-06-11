import { useState, useMemo } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import MemberProfileCard from "@/components/site/MemberProfileCard";
import type { TeamMember } from "@/data/types";
import washiTapeSticker from "@/assets/stickers/washi-tape.png";

interface TeamShowcaseProps {
  filteredTeam: TeamMember[];
}

const CARDS_PER_PAGE = 6;

export default function TeamShowcase({ filteredTeam }: TeamShowcaseProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(filteredTeam.length / CARDS_PER_PAGE));
  const currentPage = Math.min(page, totalPages - 1);

  const visibleMembers = useMemo(() => {
    const start = currentPage * CARDS_PER_PAGE;
    return filteredTeam.slice(start, start + CARDS_PER_PAGE);
  }, [filteredTeam, currentPage]);

  const canGoUp = currentPage > 0;
  const canGoDown = currentPage < totalPages - 1;

  return (
    <div className="w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        @import url('https://fonts.cdnfonts.com/css/satoshi');
      `}</style>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        {/* LEFT COLUMN — MEET THE TEAM Header + Description */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-32 flex flex-col justify-center pt-4">
          {/* MEET text block */}
          <div className="relative inline-block mb-8">
            <h2
              className="
                font-['Anton']
                uppercase
                text-black
                leading-[0.85]
                tracking-[-0.03em]
                select-none
                pointer-events-none
                text-[5.5rem]
                sm:text-[7rem]
                md:text-[8.5rem]
                lg:text-[9rem]
                relative
                z-0
              "
            >
              MEET
            </h2>

            {/* THE TEAM pink label — positioned to overlap bottom-right of MEET */}
            <div
              className="
                absolute
                z-10
                bottom-[2%]
                right-[-5%]
                sm:right-[-8%]
                md:right-[-10%]
                lg:right-[-12%]
                rotate-[-8deg]
                bg-[#d955a4]
                px-4
                sm:px-5
                md:px-6
                py-1.5
                shadow-lg
                whitespace-nowrap
              "
            >
              <span
                className="
                  font-['Anton']
                  uppercase
                  text-black
                  leading-none
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  lg:text-[1.7rem]
                "
              >
                THE TEAM
              </span>
            </div>

            {/* Washi tape decorative sticker */}
            <img
              src={washiTapeSticker}
              alt=""
              className="absolute -top-4 -right-2 w-12 h-12 object-contain rotate-[15deg] pointer-events-none select-none z-20 hidden md:block"
            />
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-sm"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            The builders, designers, and community leaders powering Girls Leading Tech every day.
          </p>
        </div>

        {/* RIGHT COLUMN — Paginated Cards Grid + Navigation */}
        <div className="w-full lg:w-[65%] flex items-start gap-4">
          {/* Cards Grid — 2 columns, same card size as speakers section */}
          <div className="flex-1 min-h-0">
            {filteredTeam.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-12">
                No matches. Try a different search.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {visibleMembers.map((member, index) => (
                  <MemberProfileCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    location={member.city && member.state ? `${member.city}, ${member.state}` : member.city || member.state}
                    locationType="location"
                    delay={index}
                    linkedin={member.linkedin}
                    image={member.image}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          {filteredTeam.length > CARDS_PER_PAGE && (
            <div className="flex flex-col items-center gap-3 pt-16 sticky top-1/3">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={!canGoUp}
                className={`
                  h-10 w-10 flex items-center justify-center rounded-full border-2 transition-all duration-200
                  ${canGoUp
                    ? "border-[#d955a4] text-[#d955a4] hover:bg-[#d955a4] hover:text-white cursor-pointer shadow-sm"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                  }
                `}
                aria-label="Previous page"
              >
                <ChevronUp className="h-5 w-5" />
              </button>

              {/* Page dots */}
              <div className="flex flex-col items-center gap-1.5 py-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <div
                    key={i}
                    className={`
                      h-2 w-2 rounded-full transition-all duration-300
                      ${i === currentPage
                        ? "bg-[#d955a4] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                      }
                    `}
                  />
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={!canGoDown}
                className={`
                  h-10 w-10 flex items-center justify-center rounded-full border-2 transition-all duration-200
                  ${canGoDown
                    ? "border-[#d955a4] text-[#d955a4] hover:bg-[#d955a4] hover:text-white cursor-pointer shadow-sm"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                  }
                `}
                aria-label="Next page"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

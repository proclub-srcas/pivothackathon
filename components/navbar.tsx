"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  House,
  Image as ImageIcon,
  Handshake,
  Trophy,
  Calendar,
  Users,
  Info,
  Phone,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    activeIcon: "/Home.svg",
    icon: House,
    href: "#",
  },
  {
    id: "about",
    label: "About",
    activeIcon: "/About.svg",
    icon: Info,
    href: "#about",
  },
  {
    id: "problems",
    label: "Problems",
    activeIcon: "/Sponsor.svg",
    icon: Handshake,
    href: "#problems",
  },
  {
    id: "guidelines",
    label: "Guidelines",
    activeIcon: "/Prizes.svg",
    icon: Trophy,
    href: "#guidelines",
  },
  {
    id: "timeline",
    label: "Timeline",
    activeIcon: "/Calendar.svg",
    icon: Calendar,
    href: "#timeline",
  },
  {
    id: "faq",
    label: "FAQs",
    activeIcon: "/About.svg",
    icon: Info,
    href: "#faq",
  },
  {
    id: "contact",
    label: "Contact",
    activeIcon: "/Contact.svg",
    icon: Phone,
    href: "#contact",
  },
];

// Desktop Navbar
const DesktopNavBar: React.FC = () => {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <div className="fixed hidden sm:block top-8 left-10 z-50 perspective-[1000px]">
      <div className="relative group">
        <div />
        <nav
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
                        relative
                        flex items-center gap-2 px-4 py-[3]
                        rounded-full
                        bg-white 
                        backdrop-blur-[20px] 
                        backdrop-saturate-150
                        border border-[#E2E8F0]
                        shadow-md
                        overflow-hidden
                        transition-all duration-300 ease-out
                        hover:border-[#005CAA]/30 
                        hover:shadow-lg
                    "
        >
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `
                                radial-gradient(
                                    150px circle at ${mousePos.x}px ${mousePos.y}px, 
                                    rgba(0,92,170,0.15), 
                                    transparent 60%
                                )
                            `,
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1px",
            }}
          />

          <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#005CAA]/20 to-transparent opacity-50" />
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#005CAA]/5 to-transparent opacity-30 pointer-events-none rounded-t-full" />

          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredTab === item.id;
            const LucideIcon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className="
                                    relative
                                    group/item
                                    flex items-center justify-center
                                    w-12 h-12 md:w-18 md:h-12
                                    rounded-full
                                    transition-all duration-300 ease-out
                                    focus:outline-none
                                "
              >
                <div
                  className={`
                                        relative z-10 
                                        transition-all duration-500 ease-out
                                        ${isActive
                      ? "text-[#005CAA]"
                      : "text-[#003366]/60 hover:text-[#005CAA]"
                    }
                                        ${isActive && mounted
                      ? "scale-150 -rotate-12"
                      : "scale-100 rotate-0"
                    }
                                    `}
                >
                  {isActive ? (
                    <Image
                      src={item.activeIcon}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <LucideIcon size={22} strokeWidth={2} />
                  )}
                </div>

                <span
                  className={`
										absolute -top-10 
										px-2 py-1 
										bg-[#005CAA] backdrop-blur-md 
										border border-[#003366]/30 
										rounded-md 
										text-[10px] font-medium tracking-wide uppercase text-white
										transition-all duration-300
										${isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                    }
								`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

// Mobile Navbar
const MobileNavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (isOpen) {
      // Close: first hide labels, then collapse
      setShowLabels(false);
      setTimeout(() => setIsOpen(false), 200);
    } else {
      // Open: first expand vertically, then show labels
      setIsOpen(true);
      setTimeout(() => setShowLabels(true), 300);
    }
  };

  const handleLinkClick = () => {
    setShowLabels(false);
    setTimeout(() => setIsOpen(false), 200);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setShowLabels(false);
          setTimeout(() => setIsOpen(false), 200);
        }
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed sm:hidden bottom-24 right-4 z-50">
      {/* Single Unified Menu Container */}
      <div
        ref={menuRef}
        className={`
					relative
					flex flex-col
					rounded-3xl
					bg-white
					backdrop-blur-[20px]
					border border-[#E2E8F0]
					shadow-lg
					transition-all duration-300 ease-out
					overflow-hidden
					${isOpen ? "p-3 gap-2" : "p-0"}
					${showLabels ? "w-48" : isOpen ? "w-16" : "w-14"}
			`}
      >
        {/* Partial Border Effect */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <rect
            x="0"
            y="0"
            width="calc(100% + 0.3px)"
            height="calc(100% + 0.3px)"
            rx="24"
            fill="none"
            stroke="rgba(0, 92, 170, 0.3)"
            strokeWidth="0.6"
            strokeDasharray="90% 80%"
            strokeDashoffset="20%"
            className="transition-all duration-300"
          />
        </svg>

        {/* Nav Items */}
        <div
          className={`
                        flex flex-col-reverse gap-1
                        transition-all duration-300 ease-out
                        overflow-hidden
                        ${isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
            }
                    `}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const LucideIcon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className={`
                                    flex items-center gap-4
                                    h-10 px-2
                                    rounded-xl
                                    transition-all duration-300 ease-out
                                    focus:outline-none
                                    hover:bg-[#005CAA]/10
                                `}
              >
                <div
                  className={`
                                        flex-shrink-0
                                        flex items-center justify-center
                                        w-6 h-6
                                        transition-all duration-300
                                        ${isActive
                      ? "text-[#005CAA]"
                      : "text-[#003366]/60"
                    }
                                    `}
                >
                  {isActive ? (
                    <Image
                      src={item.activeIcon}
                      alt={item.label}
                      width={24}
                      height={24}
                    />
                  ) : (
                    <LucideIcon size={24} strokeWidth={1.5} />
                  )}
                </div>
                <span
                  className={`
                                        text-base font-medium whitespace-nowrap
                                        transition-all duration-300
                                        ${isActive
                      ? "text-[#005CAA] font-semibold"
                      : "text-[#003366]/80"
                    }
                                        ${showLabels
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4 pointer-events-none"
                    }
                                    `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger / Close Button */}
        <button
          onClick={handleToggle}
          className={`
                        flex items-center justify-center
                        flex-shrink-0
                        rounded-2xl
                        bg-[#005CAA]
                        transition-all duration-300 ease-out
                        active:scale-95
                        ${isOpen ? "w-10 h-10 self-end" : "w-14 h-14"}
                    `}
        >
          {isOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

// Combined Navbar
const GlassNavBar: React.FC = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  );
};

export default GlassNavBar;

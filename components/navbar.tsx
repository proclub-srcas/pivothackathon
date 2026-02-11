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
    href: "/",
  },
  {
    id: "Users",
    label: "About",
    activeIcon: "/Users.svg",
    icon: Users,
    href: "/about",
  },
  {
    id: "problems",
    label: "Problems",
    activeIcon: "/problem-icon.png",
    icon: Handshake, // Fallback, but we'll override with custom image
    customIcon: "/problem-icon.png",
    href: "/#problems",
  },
  {
    id: "prizes",
    label: "Prizes",
    activeIcon: "/Prizes.svg",
    icon: Trophy,
    href: "/#prizes",
  },
  {
    id: "timeline",
    label: "Timeline",
    activeIcon: "/Calendar.svg",
    icon: Calendar,
    href: "/#timeline",
  },
  {
    id: "faq",
    label: "FAQs",
    activeIcon: "/About.svg",
    icon: Info,
    href: "/#faq",
  },
  {
    id: "contact",
    label: "Contact",
    activeIcon: "/Contact.svg",
    icon: Phone,
    href: "/#contact",
  },
];

// Desktop Navbar
const DesktopNavBar: React.FC = () => {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
    );

    NAV_ITEMS.forEach((item) => {
      if (item.href.startsWith("/#")) {
        const id = item.href.replace("/#", "");
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      }
    });

    // Special case for Home/Top
    const handleScroll = () => {
      if (window.scrollY < 100) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div className="fixed hidden sm:block top-8 left-10 z-50">
      <nav className="flex flex-col gap-4">
        {NAV_ITEMS.map((item) => {
          const isHomeItem = item.href === "/";
          const isHashLink = item.href.startsWith("/#");
          const sectionId = isHashLink ? item.href.replace("/#", "") : "home";

          let isActive = false;

          if (pathname === "/") {
            if (isHashLink) {
              isActive = activeSection === sectionId;
            } else if (isHomeItem) {
              isActive = activeSection === "home" || activeSection === "";
            }
          } else {
            isActive = pathname === item.href;
          }

          const isHovered = hoveredTab === item.id;
          const LucideIcon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`
                relative
                flex items-center
                h-12
                rounded-full
                transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
                overflow-hidden
                backdrop-blur-xl
                border
                ${isActive
                  ? "bg-[#005CAA] text-white border-[#005CAA] shadow-lg shadow-blue-900/20"
                  : "bg-white/70 text-gray-600 border-white/40 hover:bg-white/90 hover:border-white/60 shadow-sm"
                }
              `}
              style={{
                width: isHovered || isActive ? "auto" : "48px",
                paddingRight: isHovered || isActive ? "20px" : "0",
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                {isActive || (item as { customIcon?: string }).customIcon ? (
                  <Image
                    src={(item as { customIcon?: string }).customIcon || item.activeIcon}
                    alt={item.label}
                    width={22}
                    height={22}
                    className={`transition-all duration-300 ${isActive ? "brightness-0 invert" : "opacity-70 group-hover:opacity-100"}`}
                  />
                ) : (
                  <LucideIcon size={22} strokeWidth={2} />
                )}
              </div>

              <span
                className={`
                  whitespace-nowrap font-medium text-sm
                  transition-all duration-300
                  ${isHovered || isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 w-0"}
                `}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
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
    <div className="fixed sm:hidden top-8 right-4 z-50">
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

        {/* Nav Items */}
        <div
          className={`
                        flex flex-col gap-1
                        transition-all duration-300 ease-out
                        overflow-hidden
                        ${isOpen
              ? "max-h-[500px] opacity-100 pt-2"
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
                  {isActive || (item as { customIcon?: string }).customIcon ? (
                    <Image
                      src={(item as { customIcon?: string }).customIcon || item.activeIcon}
                      alt={item.label}
                      width={24}
                      height={24}
                      className={isActive ? "" : "opacity-60"}
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

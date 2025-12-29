"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ScrollingBackgroundProps {
  imageUrl: string;
  direction?: "left" | "right" | "diagonal"; // Added some spicy options
  speed?: number; // Duration in seconds
}

export const ScrollingBackground = ({
  imageUrl,
  direction = "diagonal",
  speed = 60,
}: ScrollingBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgSize, setBgSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      setBgSize({ w: img.naturalWidth, h: img.naturalHeight });
    };
  }, [imageUrl]);

  useEffect(() => {
    if (!containerRef.current || !bgSize) return;

    let xEnd = 0;
    let yEnd = 0;

    if (direction === "diagonal") {
      xEnd = bgSize.w;
      yEnd = bgSize.h;
    } else if (direction === "left") {
      xEnd = bgSize.w;
    } else if (direction === "right") {
      xEnd = -bgSize.w;
    }

    const ctx = gsap.context(() => {
      gsap.to(containerRef.current, {
        backgroundPosition: `${xEnd}px ${yEnd}px`,
        ease: "none",
        repeat: -1,
        duration: speed,
        overwrite: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [bgSize, direction, speed]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto", 
        opacity: 0.3,
      }}
    />
  );
};
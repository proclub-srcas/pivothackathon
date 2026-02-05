"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface JumpingTextProps {
    text: string;
    className?: string;
    jumpHeight?: number;
    duration?: number;
    defaultColor?: string;
    hoverColor?: string;
}

export default function JumpingText({
    text,
    className = "",
    jumpHeight = 12,
    duration = 0.3,
    defaultColor = "inherit",
    hoverColor = "#005CAA",
}: JumpingTextProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Split text into characters, preserving spaces
    const characters = text.split("");

    return (
        <span className={`inline ${className}`}>
            {characters.map((char, index) => {
                // Check if this character or nearby characters are hovered
                const isHovered = hoveredIndex !== null && Math.abs(hoveredIndex - index) <= 1;
                const isDirectlyHovered = hoveredIndex === index;

                // Calculate jump height based on proximity to hovered character
                const getJumpAmount = () => {
                    if (isDirectlyHovered) return -jumpHeight;
                    if (isHovered) return -jumpHeight * 0.5;
                    return 0;
                };

                return (
                    <motion.span
                        key={index}
                        className="inline-block cursor-default"
                        style={{
                            color: isHovered ? hoverColor : defaultColor,
                            whiteSpace: char === " " ? "pre" : "normal",
                        }}
                        animate={{
                            y: getJumpAmount(),
                            scale: isDirectlyHovered ? 1.1 : 1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 15,
                            duration: duration,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                );
            })}
        </span>
    );
}

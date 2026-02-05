"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    hue: number;
}

interface MousePosition {
    x: number;
    y: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef<MousePosition>({ x: -1000, y: -1000 });
    const animationRef = useRef<number>(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // Initialize particles
        const initParticles = () => {
            const particles: Particle[] = [];
            const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));

            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 5 + 3,
                    speedX: (Math.random() - 0.5) * 0.4,
                    speedY: (Math.random() - 0.5) * 0.4,
                    opacity: Math.random() * 0.6 + 0.3,
                    hue: Math.random() * 30 + 200, // Blue range (200-230)
                });
            }
            particlesRef.current = particles;
        };

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        // Mouse leave handler
        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const interactionRadius = 200;

            particles.forEach((particle, index) => {
                // Calculate distance from mouse
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Mouse interaction - particles are attracted/repelled
                if (distance < interactionRadius && mouse.x > 0) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    const angle = Math.atan2(dy, dx);

                    // Gentle push away from mouse
                    particle.x -= Math.cos(angle) * force * 3;
                    particle.y -= Math.sin(angle) * force * 3;
                } else {
                    // Return to base position slowly
                    particle.x += (particle.baseX - particle.x) * 0.02;
                    particle.y += (particle.baseY - particle.y) * 0.02;
                }

                // Add slight floating movement
                particle.baseX += particle.speedX;
                particle.baseY += particle.speedY;

                // Bounce off edges
                if (particle.baseX < 0 || particle.baseX > canvas.width) {
                    particle.speedX *= -1;
                }
                if (particle.baseY < 0 || particle.baseY > canvas.height) {
                    particle.speedY *= -1;
                }

                // Keep base position within bounds
                particle.baseX = Math.max(0, Math.min(canvas.width, particle.baseX));
                particle.baseY = Math.max(0, Math.min(canvas.height, particle.baseY));

                // Draw particle with gradient
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.size * 2
                );
                gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 50%, ${particle.opacity})`);
                gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 50%, ${particle.opacity * 0.5})`);
                gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 50%, 0)`);

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Draw connections between nearby particles
                for (let j = index + 1; j < particles.length; j++) {
                    const otherParticle = particles[j];
                    const distX = particle.x - otherParticle.x;
                    const distY = particle.y - otherParticle.y;
                    const dist = Math.sqrt(distX * distX + distY * distY);

                    if (dist < 180) {
                        const lineOpacity = (1 - dist / 180) * 0.2;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `hsla(210, 80%, 50%, ${lineOpacity})`;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                }
            });

            // Draw mouse glow effect
            if (mouse.x > 0 && mouse.y > 0) {
                const mouseGradient = ctx.createRadialGradient(
                    mouse.x,
                    mouse.y,
                    0,
                    mouse.x,
                    mouse.y,
                    150
                );
                mouseGradient.addColorStop(0, "hsla(210, 100%, 60%, 0.15)");
                mouseGradient.addColorStop(0.5, "hsla(210, 100%, 60%, 0.05)");
                mouseGradient.addColorStop(1, "hsla(210, 100%, 60%, 0)");

                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
                ctx.fillStyle = mouseGradient;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        // Visibility change handler for performance
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        // Initialize
        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        if (isVisible) {
            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            cancelAnimationFrame(animationRef.current);
        };
    }, [isVisible]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                background: "transparent",
            }}
            aria-hidden="true"
        />
    );
}

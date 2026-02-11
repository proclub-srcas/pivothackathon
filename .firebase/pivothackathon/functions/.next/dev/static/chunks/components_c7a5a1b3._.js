(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/SmoothScroll/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnchorScrolling() {
    _s();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnchorScrolling.useEffect": ()=>{
            if (!lenis) return;
            const handleClick = {
                "AnchorScrolling.useEffect.handleClick": (e)=>{
                    const target = e.target;
                    const anchor = target.closest("a");
                    if (anchor && anchor.hash && anchor.hash.length > 1) {
                        // Check if the link is local to the current page
                        const isCurrentPage = anchor.origin === window.location.origin && anchor.pathname === window.location.pathname;
                        if (isCurrentPage) {
                            e.preventDefault();
                            lenis.scrollTo(anchor.hash, {
                                offset: -100,
                                duration: 1.5,
                                easing: {
                                    "AnchorScrolling.useEffect.handleClick": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                                }["AnchorScrolling.useEffect.handleClick"]
                            });
                            // Optional: Update URL without jumping
                            window.history.pushState(null, "", anchor.hash);
                        }
                    }
                }
            }["AnchorScrolling.useEffect.handleClick"];
            document.addEventListener("click", handleClick);
            return ({
                "AnchorScrolling.useEffect": ()=>document.removeEventListener("click", handleClick)
            })["AnchorScrolling.useEffect"];
        }
    }["AnchorScrolling.useEffect"], [
        lenis
    ]);
    return null;
}
_s(AnchorScrolling, "bmMhC/Jg10Kg3cTG/8BlQOWhN9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c = AnchorScrolling;
function SmoothScroll({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            duration: 1.5,
            smoothWheel: true,
            wheelMultiplier: 1.2,
            touchMultiplier: 2,
            infinite: false
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnchorScrolling, {}, void 0, false, {
                fileName: "[project]/components/SmoothScroll/index.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/SmoothScroll/index.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c1 = SmoothScroll;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnchorScrolling");
__turbopack_context__.k.register(_c1, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/InteractiveBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractiveBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function InteractiveBackground() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000
    });
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            // Set canvas size
            const updateCanvasSize = {
                "InteractiveBackground.useEffect.updateCanvasSize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    initParticles();
                }
            }["InteractiveBackground.useEffect.updateCanvasSize"];
            // Initialize particles
            const initParticles = {
                "InteractiveBackground.useEffect.initParticles": ()=>{
                    const particles = [];
                    const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
                    for(let i = 0; i < particleCount; i++){
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
                            hue: Math.random() * 30 + 200
                        });
                    }
                    particlesRef.current = particles;
                }
            }["InteractiveBackground.useEffect.initParticles"];
            // Mouse move handler
            const handleMouseMove = {
                "InteractiveBackground.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["InteractiveBackground.useEffect.handleMouseMove"];
            // Mouse leave handler
            const handleMouseLeave = {
                "InteractiveBackground.useEffect.handleMouseLeave": ()=>{
                    mouseRef.current = {
                        x: -1000,
                        y: -1000
                    };
                }
            }["InteractiveBackground.useEffect.handleMouseLeave"];
            // Animation loop
            const animate = {
                "InteractiveBackground.useEffect.animate": ()=>{
                    if (!ctx || !canvas) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    const particles = particlesRef.current;
                    const mouse = mouseRef.current;
                    const interactionRadius = 200;
                    particles.forEach({
                        "InteractiveBackground.useEffect.animate": (particle, index)=>{
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
                            const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
                            gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 50%, ${particle.opacity})`);
                            gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 50%, ${particle.opacity * 0.5})`);
                            gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 50%, 0)`);
                            ctx.beginPath();
                            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                            ctx.fillStyle = gradient;
                            ctx.fill();
                            // Draw connections between nearby particles
                            for(let j = index + 1; j < particles.length; j++){
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
                        }
                    }["InteractiveBackground.useEffect.animate"]);
                    // Draw mouse glow effect
                    if (mouse.x > 0 && mouse.y > 0) {
                        const mouseGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
                        mouseGradient.addColorStop(0, "hsla(210, 100%, 60%, 0.15)");
                        mouseGradient.addColorStop(0.5, "hsla(210, 100%, 60%, 0.05)");
                        mouseGradient.addColorStop(1, "hsla(210, 100%, 60%, 0)");
                        ctx.beginPath();
                        ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2);
                        ctx.fillStyle = mouseGradient;
                        ctx.fill();
                    }
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["InteractiveBackground.useEffect.animate"];
            // Visibility change handler for performance
            const handleVisibilityChange = {
                "InteractiveBackground.useEffect.handleVisibilityChange": ()=>{
                    setIsVisible(!document.hidden);
                }
            }["InteractiveBackground.useEffect.handleVisibilityChange"];
            // Initialize
            updateCanvasSize();
            window.addEventListener("resize", updateCanvasSize);
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseleave", handleMouseLeave);
            document.addEventListener("visibilitychange", handleVisibilityChange);
            if (isVisible) {
                animationRef.current = requestAnimationFrame(animate);
            }
            return ({
                "InteractiveBackground.useEffect": ()=>{
                    window.removeEventListener("resize", updateCanvasSize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseleave", handleMouseLeave);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    cancelAnimationFrame(animationRef.current);
                }
            })["InteractiveBackground.useEffect"];
        }
    }["InteractiveBackground.useEffect"], [
        isVisible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none z-0",
        style: {
            background: "transparent"
        },
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/InteractiveBackground.tsx",
        lineNumber: 208,
        columnNumber: 9
    }, this);
}
_s(InteractiveBackground, "6snVcLgFFy/yw3fxCxfKPFQ/Be4=");
_c = InteractiveBackground;
var _c;
__turbopack_context__.k.register(_c, "InteractiveBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ScrollToTop = ()=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Toggle visibility based on scroll position
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            const toggleVisibility = {
                "ScrollToTop.useEffect.toggleVisibility": ()=>{
                    if (window.scrollY > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["ScrollToTop.useEffect.toggleVisibility"];
            window.addEventListener('scroll', toggleVisibility);
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener('scroll', toggleVisibility)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    // Scroll to top smoothly
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            initial: {
                opacity: 0,
                scale: 0.5
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.5
            },
            onClick: scrollToTop,
            className: "fixed bottom-8 right-8 z-50 p-3 bg-[#005CAA] text-white rounded-full shadow-lg hover:bg-[#004a8f] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005CAA]",
            "aria-label": "Scroll to top",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/ScrollToTop.tsx",
                lineNumber: 44,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ScrollToTop.tsx",
            lineNumber: 36,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ScrollToTop.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollToTop, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = ScrollToTop;
const __TURBOPACK__default__export__ = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_c7a5a1b3._.js.map
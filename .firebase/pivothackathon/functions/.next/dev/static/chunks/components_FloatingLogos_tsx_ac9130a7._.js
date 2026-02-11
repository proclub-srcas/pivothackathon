(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/FloatingLogos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingLogos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FloatingLogos({ hideInHero = false }) {
    _s();
    const [showLogos, setShowLogos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!hideInHero);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingLogos.useEffect": ()=>{
            if (!hideInHero) {
                setShowLogos(true);
                return;
            }
            const handleScroll = {
                "FloatingLogos.useEffect.handleScroll": ()=>{
                    // Show logos after scrolling past 100vh (hero section)
                    const scrollPosition = window.scrollY;
                    const heroHeight = window.innerHeight;
                    setShowLogos(scrollPosition > heroHeight * 0.8);
                }
            }["FloatingLogos.useEffect.handleScroll"];
            handleScroll(); // Check initial position
            window.addEventListener("scroll", handleScroll);
            return ({
                "FloatingLogos.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["FloatingLogos.useEffect"];
        }
    }["FloatingLogos.useEffect"], [
        hideInHero
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: showLogos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: 100,
                scale: 0.8
            },
            animate: {
                opacity: 1,
                x: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                x: 100,
                scale: 0.8
            },
            transition: {
                duration: 0.6,
                ease: [
                    0.25,
                    0.46,
                    0.45,
                    0.94
                ],
                opacity: {
                    duration: 0.4
                },
                scale: {
                    duration: 0.5
                }
            },
            className: "fixed top-32 right-10 hidden 2xl:flex flex-col gap-6 p-6 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl z-50 hover:scale-105 transition-transform duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/srcas.png",
                        alt: "SRCAS",
                        width: 140,
                        height: 60,
                        className: "h-12 w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingLogos.tsx",
                        lineNumber: 57,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingLogos.tsx",
                        lineNumber: 64,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/programming-club-1-logo.png",
                        alt: "Programming Club",
                        width: 80,
                        height: 80,
                        className: "h-16 w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingLogos.tsx",
                        lineNumber: 65,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingLogos.tsx",
                        lineNumber: 72,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/L&Ts-logo.png",
                        alt: "Larsen & Toubro Limited",
                        width: 80,
                        height: 80,
                        className: "h-14 w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/components/FloatingLogos.tsx",
                        lineNumber: 73,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FloatingLogos.tsx",
                lineNumber: 56,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/FloatingLogos.tsx",
            lineNumber: 36,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FloatingLogos.tsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(FloatingLogos, "+sGQ1rVNCUMo5AjJowOMkTEM6qw=");
_c = FloatingLogos;
var _c;
__turbopack_context__.k.register(_c, "FloatingLogos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloatingLogos.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/FloatingLogos.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_FloatingLogos_tsx_ac9130a7._.js.map
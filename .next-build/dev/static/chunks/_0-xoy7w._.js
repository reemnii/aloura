(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/Components/Home/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "e80c14ed81d17c31ae28f973111c1606d9c6bbf5b0d97b5c4bbf408158e73c39") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e80c14ed81d17c31ae28f973111c1606d9c6bbf5b0d97b5c4bbf408158e73c39";
    }
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navLinks = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Collections",
            href: "#featured-collections"
        },
        {
            label: "Testimonials",
            href: "#testimonials"
        },
        {
            label: "Contact",
            href: "#contact-us"
        }
    ];
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navbar[useEffect()]": ()=>{
                const handleScroll = {
                    "Navbar[useEffect() > handleScroll]": ()=>setScrolled(window.scrollY > 20)
                }["Navbar[useEffect() > handleScroll]"];
                handleScroll();
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navbar[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Navbar[scrollToSection]": (href)=>{
                const section = document.querySelector(href);
                if (section) {
                    const top = section.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({
                        top,
                        behavior: "smooth"
                    });
                    setMobileMenuOpen(false);
                }
            }
        })["Navbar[scrollToSection]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const scrollToSection = t2;
    const t3 = `sticky top-0 z-50 transition-all duration-500 ease-out ${scrolled ? "bg-[#fef6e9]/96 backdrop-blur-sm border-b border-[#ac795a]/15 shadow-[0_10px_30px_rgba(92,64,50,0.05)]" : "bg-[#fef6e9]/90 backdrop-blur-sm border-b border-transparent shadow-none"}`;
    const t4 = "max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20";
    const t5 = `font-serif text-3xl font-light italic tracking-widest transition-colors duration-500 ${scrolled ? "text-[#8f6348]" : "text-[#a47454]"}`;
    let t6;
    if ($[4] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t5,
            children: "Aloura"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-1.5 h-1.5 rounded-full bg-[#ac795a]"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    const t9 = "hidden md:flex items-center gap-10";
    const t10 = navLinks.map({
        "Navbar[navLinks.map()]": (link)=>link.href.startsWith("#") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link.href,
                onClick: {
                    "Navbar[navLinks.map() > <a>.onClick]": (e)=>{
                        e.preventDefault();
                        scrollToSection(link.href);
                    }
                }["Navbar[navLinks.map() > <a>.onClick]"],
                className: "group relative font-sans text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-[#8f6348]",
                children: link.label
            }, link.label, false, {
                fileName: "[project]/src/Components/Home/Navbar.jsx",
                lineNumber: 103,
                columnNumber: 67
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: link.href,
                className: "group relative font-sans text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-[#8f6348]",
                children: link.label
            }, link.label, false, {
                fileName: "[project]/src/Components/Home/Navbar.jsx",
                lineNumber: 108,
                columnNumber: 216
            }, this)
    }["Navbar[navLinks.map()]"]);
    let t11;
    if ($[9] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[9] = t10;
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] !== scrollToSection) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "Navbar[<button>.onClick]": ()=>scrollToSection("#featured-collections")
            }["Navbar[<button>.onClick]"],
            className: "hidden md:inline-flex cursor-pointer bg-[#ac795a] hover:bg-[#8f6348] text-[#fef6e9] text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300",
            children: "Shop Now"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[11] = scrollToSection;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] !== mobileMenuOpen) {
        t13 = ({
            "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(!mobileMenuOpen)
        })["Navbar[<button>.onClick]"];
        $[13] = mobileMenuOpen;
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    let t16;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-6 h-px bg-current"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-4 h-px bg-current"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-6 h-px bg-current"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[15] = t14;
        $[16] = t15;
        $[17] = t16;
    } else {
        t14 = $[15];
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] !== t13) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: "md:hidden flex flex-col gap-1.5 text-[#ac795a]",
            children: [
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[18] = t13;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== t11 || $[21] !== t12 || $[22] !== t17 || $[23] !== t8) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t8,
                t11,
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
        $[22] = t17;
        $[23] = t8;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    const t19 = `md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#fef6e9]/95 backdrop-blur-sm border-t border-[#ac795a]/10 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`;
    const t20 = navLinks.map({
        "Navbar[navLinks.map()]": (link_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link_0.href,
                onClick: {
                    "Navbar[navLinks.map() > <a>.onClick]": (e_0)=>{
                        e_0.preventDefault();
                        scrollToSection(link_0.href);
                    }
                }["Navbar[navLinks.map() > <a>.onClick]"],
                className: "group relative font-sans text-[11px] tracking-[0.22em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:text-[#8f6348] px-6 py-4 hover:translate-x-1",
                children: link_0.label
            }, link_0.label, false, {
                fileName: "[project]/src/Components/Home/Navbar.jsx",
                lineNumber: 174,
                columnNumber: 41
            }, this)
    }["Navbar[navLinks.map()]"]);
    let t21;
    if ($[25] !== scrollToSection) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 pt-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: {
                    "Navbar[<button>.onClick]": ()=>scrollToSection("#featured-collections")
                }["Navbar[<button>.onClick]"],
                className: "w-full bg-[#ac795a] hover:bg-[#8f6348] text-[#fef6e9] text-xs tracking-widest uppercase px-5 py-3 rounded-full",
                children: "Shop Now"
            }, void 0, false, {
                fileName: "[project]/src/Components/Home/Navbar.jsx",
                lineNumber: 183,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[25] = scrollToSection;
        $[26] = t21;
    } else {
        t21 = $[26];
    }
    let t22;
    if ($[27] !== t20 || $[28] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col py-4",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[27] = t20;
        $[28] = t21;
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== t19 || $[31] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t19,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[30] = t19;
        $[31] = t22;
        $[32] = t23;
    } else {
        t23 = $[32];
    }
    let t24;
    if ($[33] !== t18 || $[34] !== t23 || $[35] !== t3) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t3,
            children: [
                t18,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/Navbar.jsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[33] = t18;
        $[34] = t23;
        $[35] = t3;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    return t24;
}
_s(Navbar, "NqmbluxoEaGq8zA44dCGrohDScQ=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Components/Home/SearchBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SearchBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "86e77b167f9ab4e2783c6b3711acf7b77d686cab78570d63a52213468ff347f7") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "86e77b167f9ab4e2783c6b3711acf7b77d686cab78570d63a52213468ff347f7";
    }
    const { value, onChange, placeholder: t1, actionLabel: t2, onAction } = t0;
    const placeholder = t1 === undefined ? "Search mirrors, styles, sizes..." : t1;
    const actionLabel = t2 === undefined ? "Explore" : t2;
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isControlled = value !== undefined && typeof onChange === "function";
    const query = isControlled ? value : internalValue;
    const setQuery = isControlled ? onChange : setInternalValue;
    const t3 = `relative flex items-center w-full max-w-xl transition-all duration-300 ${focused ? "scale-[1.02]" : "scale-100"}`;
    const t4 = `w-full flex items-center gap-3 px-5 py-4 rounded-2xl border backdrop-blur-md transition-all duration-300 ${focused ? "bg-[#fef6e9]/85 border-[#ac795a]/60 shadow-[0_8px_40px_rgba(172,121,90,0.28)]" : "bg-[#fef6e9]/70 border-[#ac795a]/30 shadow-[0_4px_24px_rgba(172,121,90,0.12)]"}`;
    const t5 = `w-4 h-4 flex-shrink-0 transition-colors duration-200 ${focused ? "text-[#ac795a]" : "text-[#ac795a]/70"}`;
    let t6;
    let t7;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "11",
            cy: "11",
            r: "8"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21 21l-4.35-4.35"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[1] = t6;
        $[2] = t7;
    } else {
        t6 = $[1];
        t7 = $[2];
    }
    let t8;
    if ($[3] !== t5) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: t5,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            viewBox: "0 0 24 24",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[3] = t5;
        $[4] = t8;
    } else {
        t8 = $[4];
    }
    let t9;
    if ($[5] !== setQuery) {
        t9 = ({
            "SearchBar[<input>.onChange]": (event)=>setQuery(event.target.value)
        })["SearchBar[<input>.onChange]"];
        $[5] = setQuery;
        $[6] = t9;
    } else {
        t9 = $[6];
    }
    let t10;
    let t11;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "SearchBar[<input>.onFocus]": ()=>setFocused(true)
        })["SearchBar[<input>.onFocus]"];
        t11 = ({
            "SearchBar[<input>.onBlur]": ()=>setFocused(false)
        })["SearchBar[<input>.onBlur]"];
        $[7] = t10;
        $[8] = t11;
    } else {
        t10 = $[7];
        t11 = $[8];
    }
    let t12;
    if ($[9] !== placeholder || $[10] !== query || $[11] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            value: query,
            onChange: t9,
            onFocus: t10,
            onBlur: t11,
            placeholder: placeholder,
            className: "flex-1 bg-transparent text-[#5c4032] placeholder-[#5c4032]/50 text-sm tracking-wide outline-none"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 76,
            columnNumber: 11
        }, this);
        $[9] = placeholder;
        $[10] = query;
        $[11] = t9;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] !== query || $[14] !== setQuery) {
        t13 = query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "SearchBar[<button>.onClick]": ()=>setQuery("")
            }["SearchBar[<button>.onClick]"],
            className: "cursor-pointer text-[#5c4032]/50 hover:text-[#ac795a] transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-3.5 h-3.5",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 6L6 18M6 6l12 12"
                }, void 0, false, {
                    fileName: "[project]/src/Components/Home/SearchBar.jsx",
                    lineNumber: 88,
                    columnNumber: 222
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/Components/Home/SearchBar.jsx",
                lineNumber: 88,
                columnNumber: 123
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 86,
            columnNumber: 20
        }, this);
        $[13] = query;
        $[14] = setQuery;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "w-px h-4 bg-[#ac795a]/30"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== actionLabel || $[18] !== onAction) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onAction,
            className: "cursor-pointer text-[#5c4032]/70 hover:text-[#ac795a] transition-colors text-xs tracking-widest uppercase whitespace-nowrap",
            children: actionLabel
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[17] = actionLabel;
        $[18] = onAction;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t12 || $[21] !== t13 || $[22] !== t15 || $[23] !== t4 || $[24] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t8,
                t12,
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
        $[22] = t15;
        $[23] = t4;
        $[24] = t8;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== focused) {
        t17 = focused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-2xl ring-1 ring-[#ac795a]/40 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 125,
            columnNumber: 22
        }, this);
        $[26] = focused;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== t16 || $[29] !== t17 || $[30] !== t3) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Home/SearchBar.jsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[28] = t16;
        $[29] = t17;
        $[30] = t3;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    return t18;
}
_s(SearchBar, "PxRElgKAulZ2dxd8rM8o1frKiaA=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Components/Collections/content.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectionActions",
    ()=>collectionActions,
    "collectionPillars",
    ()=>collectionPillars,
    "filterGroups",
    ()=>filterGroups,
    "mirrorCollections",
    ()=>mirrorCollections
]);
const collectionPillars = [
    {
        eyebrow: "Sculptural calm",
        title: "A shape that settles the room",
        text: "Every piece is designed to bring balance, allowing light, proportion, and texture to feel intentional rather than loud."
    },
    {
        eyebrow: "Refined materials",
        title: "Hand-finished details",
        text: "From brushed metal edges to softly polished glass, the collection keeps a tactile richness that rewards a closer look."
    },
    {
        eyebrow: "Timeless presence",
        title: "Built to stay relevant",
        text: "The silhouettes lean classic, but never rigid, so they move naturally across interiors, seasons, and styles."
    }
];
const mirrorCollections = [
    {
        name: "Aurelia Arc",
        tag: "Best seller",
        bestSeller: true,
        shape: "Arch",
        finish: "Brass",
        room: "Entryway",
        size: "Large",
        image: "/aurelia-arc.webp",
        description: "A graceful arched silhouette with warm brass notes and a gallery-like finish."
    },
    {
        name: "Celeste Round",
        tag: "Best seller",
        bestSeller: true,
        shape: "Round",
        finish: "Bronze",
        room: "Bedroom",
        size: "Medium",
        image: "/celeste-round.jpg",
        description: "A softened profile that brings quiet symmetry to bedrooms, salons, and reading corners."
    },
    {
        name: "Orion Slim",
        tag: "Modern classic",
        bestSeller: true,
        shape: "Linear",
        finish: "Steel",
        room: "Dressing Room",
        size: "Tall",
        image: "/orion-slim.jpg",
        description: "Minimal in form, crisp in presence, and designed for spaces that want a lighter touch."
    },
    {
        name: "Solene Halo",
        tag: "New arrival",
        bestSeller: false,
        shape: "Round",
        finish: "Brass",
        room: "Living Room",
        size: "Medium",
        image: "/lumiere-arch.webp",
        description: "A glowing circular frame that reads soft and luminous without losing definition."
    },
    {
        name: "Marlow Arch",
        tag: "Gallery piece",
        bestSeller: false,
        shape: "Arch",
        finish: "Oak",
        room: "Dining Room",
        size: "Large",
        image: "/mirror.png",
        description: "A tall architectural frame with a warmer finish for rooms that lean collected and calm."
    },
    {
        name: "Eira Oval",
        tag: "Soft edge",
        bestSeller: false,
        shape: "Oval",
        finish: "Bronze",
        room: "Bathroom",
        size: "Medium",
        image: "/lumiere-arch.jpg",
        description: "A refined oval silhouette that softens stone, tile, and cabinetry with ease."
    },
    {
        name: "Noa Prism",
        tag: "Statement",
        bestSeller: false,
        shape: "Linear",
        finish: "Steel",
        room: "Hallway",
        size: "Tall",
        image: "/hero-bg.png",
        description: "Sharp, minimal, and quietly dramatic for interiors that want clean geometry."
    },
    {
        name: "Vela Vertical",
        tag: "Tailored",
        bestSeller: false,
        shape: "Linear",
        finish: "Brass",
        room: "Bedroom",
        size: "Tall",
        image: "/aurelia-arc.jpg",
        description: "Designed to add vertical rhythm and a subtle hint of luxury to compact walls."
    },
    {
        name: "Elara Curve",
        tag: "Editor’s pick",
        bestSeller: false,
        shape: "Oval",
        finish: "Bronze",
        room: "Living Room",
        size: "Medium",
        image: "/celeste-round.jpg",
        description: "A gentle curve with an editorial feel, ideal for layered and textured rooms."
    }
];
const filterGroups = {
    shape: [
        "All",
        "Arch",
        "Round",
        "Oval",
        "Linear"
    ],
    finish: [
        "All",
        "Brass",
        "Bronze",
        "Oak",
        "Steel"
    ],
    room: [
        "All",
        "Entryway",
        "Living Room",
        "Bedroom",
        "Bathroom",
        "Dining Room",
        "Hallway",
        "Dressing Room"
    ]
};
const collectionActions = [
    "Browse the full collection",
    "Request a styling recommendation",
    "Explore bespoke commissions"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Components/Collections/showcase.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Showcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Home$2f$SearchBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/Home/SearchBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Collections$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/Collections/content.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const defaultFilters = {
    shape: "All",
    finish: "All",
    room: "All"
};
function matchesFilter(value, selected) {
    return selected === "All" || value === selected;
}
function Showcase() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "242315bfdca6b9897a13e9a6a14a6838d9c5a0e5683e413ff9d8a474870a4d48") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "242315bfdca6b9897a13e9a6a14a6838d9c5a0e5683e413ff9d8a474870a4d48";
    }
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultFilters);
    const [sortMode, setSortMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("name");
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== filters || $[2] !== query || $[3] !== sortMode) {
        let t8;
        if ($[12] !== query) {
            t8 = ({
                "Showcase[mirrorCollections.filter()]": (mirror)=>[
                        mirror.name,
                        mirror.tag,
                        mirror.shape,
                        mirror.finish,
                        mirror.room,
                        mirror.size
                    ].join(" ").toLowerCase().includes(query.toLowerCase())
            })["Showcase[mirrorCollections.filter()]"];
            $[12] = query;
            $[13] = t8;
        } else {
            t8 = $[13];
        }
        let t9;
        if ($[14] !== filters) {
            t9 = ({
                "Showcase[(anonymous)()]": (mirror_0)=>matchesFilter(mirror_0.shape, filters.shape)
            })["Showcase[(anonymous)()]"];
            $[14] = filters;
            $[15] = t9;
        } else {
            t9 = $[15];
        }
        let t10;
        if ($[16] !== filters) {
            t10 = ({
                "Showcase[(anonymous)()]": (mirror_1)=>matchesFilter(mirror_1.finish, filters.finish)
            })["Showcase[(anonymous)()]"];
            $[16] = filters;
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        let t11;
        if ($[18] !== filters) {
            t11 = ({
                "Showcase[(anonymous)()]": (mirror_2)=>matchesFilter(mirror_2.room, filters.room)
            })["Showcase[(anonymous)()]"];
            $[18] = filters;
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        let t12;
        if ($[20] !== sortMode) {
            t12 = ({
                "Showcase[(anonymous)()]": (left, right)=>{
                    if (sortMode === "room") {
                        return left.room.localeCompare(right.room);
                    }
                    if (sortMode === "size") {
                        return left.size.localeCompare(right.size);
                    }
                    return left.name.localeCompare(right.name);
                }
            })["Showcase[(anonymous)()]"];
            $[20] = sortMode;
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        const visibleMirrors = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Collections$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorCollections"].filter(t8).filter(t9).filter(t10).filter(t11).sort(t12);
        const bestSellers = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Collections$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mirrorCollections"].filter(_ShowcaseMirrorCollectionsFilter);
        let t13;
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = ({
                "Showcase[updateFilter]": (key, value)=>{
                    setFilters({
                        "Showcase[updateFilter > setFilters()]": (current)=>({
                                ...current,
                                [key]: value
                            })
                    }["Showcase[updateFilter > setFilters()]"]);
                }
            })["Showcase[updateFilter]"];
            $[22] = t13;
        } else {
            t13 = $[22];
        }
        const updateFilter = t13;
        t6 = "bg-[#fef6e9] text-[#5c4032] overflow-hidden";
        let t14;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "uppercase tracking-[0.3em] text-xs text-[#ac795a] font-sans",
                children: "Browse the edit"
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 115,
                columnNumber: 13
            }, this);
            $[23] = t14;
        } else {
            t14 = $[23];
        }
        let t15;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-light mt-4",
                            children: [
                                "Find the mirror that feels",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "italic text-[#ac795a]",
                                    children: " right for the room."
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                                    lineNumber: 122,
                                    columnNumber: 188
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                            lineNumber: 122,
                            columnNumber: 109
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                    lineNumber: 122,
                    columnNumber: 99
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 122,
                columnNumber: 13
            }, this);
            $[24] = t15;
        } else {
            t15 = $[24];
        }
        let t16;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = ({
                "Showcase[<SearchBar>.onAction]": ()=>setSortMode("name")
            })["Showcase[<SearchBar>.onAction]"];
            $[25] = t16;
        } else {
            t16 = $[25];
        }
        let t17;
        if ($[26] !== query) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Home$2f$SearchBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                value: query,
                onChange: setQuery,
                placeholder: "Search mirrors, rooms, finishes...",
                actionLabel: "Filter",
                onAction: t16
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 138,
                columnNumber: 13
            }, this);
            $[26] = query;
            $[27] = t17;
        } else {
            t17 = $[27];
        }
        let t18;
        if ($[28] !== filters) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-5 lg:grid-cols-3",
                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Collections$2f$content$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterGroups"]).map({
                    "Showcase[(anonymous)()]": (t19)=>{
                        const [key_0, values] = t19;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[1.5rem] border border-[#ac795a]/10 bg-white/75 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `${key_0}-filter`,
                                            className: "text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans",
                                            children: key_0
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                                            lineNumber: 149,
                                            columnNumber: 171
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "Showcase[(anonymous)() > <button>.onClick]": ()=>updateFilter(key_0, "All")
                                            }["Showcase[(anonymous)() > <button>.onClick]"],
                                            className: "text-[10px] uppercase tracking-[0.25em] text-[#5c4032]/45 hover:text-[#ac795a] transition-colors font-sans",
                                            children: "Clear"
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                                            lineNumber: 149,
                                            columnNumber: 297
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                                    lineNumber: 149,
                                    columnNumber: 109
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: `${key_0}-filter`,
                                            value: filters[key_0],
                                            onChange: {
                                                "Showcase[(anonymous)() > <select>.onChange]": (event)=>updateFilter(key_0, event.target.value)
                                            }["Showcase[(anonymous)() > <select>.onChange]"],
                                            className: "w-full appearance-none rounded-full border border-[#ac795a]/15 bg-white px-4 py-3 pr-10 text-sm text-[#5c4032] outline-none transition-all duration-200 hover:border-[#ac795a]/30 focus:border-[#ac795a] focus:ring-2 focus:ring-[#ac795a]/15",
                                            children: values.map(_ShowcaseAnonymousValuesMap)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                                            lineNumber: 151,
                                            columnNumber: 231
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#ac795a]",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 9l6 6 6-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Collections/showcase.jsx",
                                                lineNumber: 153,
                                                columnNumber: 539
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                                            lineNumber: 153,
                                            columnNumber: 367
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                                    lineNumber: 151,
                                    columnNumber: 205
                                }, this)
                            ]
                        }, key_0, true, {
                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                            lineNumber: 149,
                            columnNumber: 20
                        }, this);
                    }
                }["Showcase[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 146,
                columnNumber: 13
            }, this);
            $[28] = filters;
            $[29] = t18;
        } else {
            t18 = $[29];
        }
        let t19;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-[10px] uppercase tracking-[0.25em] text-[#ac795a] font-sans",
                children: "Sort"
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 163,
                columnNumber: 13
            }, this);
            $[30] = t19;
        } else {
            t19 = $[30];
        }
        let t20;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = ({
                "Showcase[<select>.onChange]": (event_0)=>setSortMode(event_0.target.value)
            })["Showcase[<select>.onChange]"];
            $[31] = t20;
        } else {
            t20 = $[31];
        }
        let t21;
        let t22;
        let t23;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "name",
                children: "Name"
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 181,
                columnNumber: 13
            }, this);
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "room",
                children: "Room"
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 182,
                columnNumber: 13
            }, this);
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "size",
                children: "Size"
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 183,
                columnNumber: 13
            }, this);
            $[32] = t21;
            $[33] = t22;
            $[34] = t23;
        } else {
            t21 = $[32];
            t22 = $[33];
            t23 = $[34];
        }
        let t24;
        if ($[35] !== sortMode) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: sortMode,
                        onChange: t20,
                        className: "rounded-full border border-[#ac795a]/15 bg-white px-4 py-2 text-sm outline-none",
                        children: [
                            t21,
                            t22,
                            t23
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 194,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 194,
                columnNumber: 13
            }, this);
            $[35] = sortMode;
            $[36] = t24;
        } else {
            t24 = $[36];
        }
        const t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-[#5c4032]/70",
                    children: [
                        "Showing ",
                        visibleMirrors.length,
                        " mirror",
                        visibleMirrors.length === 1 ? "" : "s"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                    lineNumber: 200,
                    columnNumber: 106
                }, this),
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 200,
            columnNumber: 17
        }, this);
        const t26 = visibleMirrors.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-[2rem] border border-dashed border-[#ac795a]/20 bg-white/60 p-10 text-center text-[#5c4032]/70",
            children: "No mirrors match these filters yet. Try a different shape or finish."
        }, void 0, false, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 201,
            columnNumber: 47
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
            children: visibleMirrors.map(_ShowcaseVisibleMirrorsMap)
        }, void 0, false, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 201,
            columnNumber: 244
        }, this);
        let t27;
        if ($[37] !== t26) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: t26
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 204,
                columnNumber: 13
            }, this);
            $[37] = t26;
            $[38] = t27;
        } else {
            t27 = $[38];
        }
        if ($[39] !== t17 || $[40] !== t18 || $[41] !== t25 || $[42] !== t27) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        t15,
                        t17,
                        t18,
                        t25,
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                    lineNumber: 211,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 211,
                columnNumber: 12
            }, this);
            $[39] = t17;
            $[40] = t18;
            $[41] = t25;
            $[42] = t27;
            $[43] = t7;
        } else {
            t7 = $[43];
        }
        t5 = "py-2 px-6 pb-14";
        t2 = "max-w-7xl mx-auto";
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] uppercase tracking-[0.3em] text-[#ac795a] font-sans",
                children: "Best sellers"
            }, void 0, false, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 223,
                columnNumber: 12
            }, this);
            $[44] = t3;
        } else {
            t3 = $[44];
        }
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl md:text-3xl font-light mt-3 mb-6",
                children: [
                    "The pieces people",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "italic text-[#ac795a]",
                        children: " come back for."
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 229,
                        columnNumber: 87
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 229,
                columnNumber: 12
            }, this);
            $[45] = t4;
        } else {
            t4 = $[45];
        }
        t0 = "grid gap-4 md:grid-cols-3";
        t1 = bestSellers.map(_ShowcaseBestSellersMap);
        $[1] = filters;
        $[2] = query;
        $[3] = sortMode;
        $[4] = t0;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
        $[11] = t7;
    } else {
        t0 = $[4];
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
        t7 = $[11];
    }
    let t8;
    if ($[46] !== t0 || $[47] !== t1) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 259,
            columnNumber: 10
        }, this);
        $[46] = t0;
        $[47] = t1;
        $[48] = t8;
    } else {
        t8 = $[48];
    }
    let t9;
    if ($[49] !== t2 || $[50] !== t3 || $[51] !== t4 || $[52] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 268,
            columnNumber: 10
        }, this);
        $[49] = t2;
        $[50] = t3;
        $[51] = t4;
        $[52] = t8;
        $[53] = t9;
    } else {
        t9 = $[53];
    }
    let t10;
    if ($[54] !== t5 || $[55] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t5,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[54] = t5;
        $[55] = t9;
        $[56] = t10;
    } else {
        t10 = $[56];
    }
    let t11;
    if ($[57] !== t10 || $[58] !== t6 || $[59] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t6,
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[57] = t10;
        $[58] = t6;
        $[59] = t7;
        $[60] = t11;
    } else {
        t11 = $[60];
    }
    return t11;
}
_s(Showcase, "4KuXjdhbI0r1XeEy89k85zkSOkQ=");
_c = Showcase;
function _ShowcaseBestSellersMap(mirror_5) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-[1.5rem] border border-[#ac795a]/10 bg-white p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: mirror_5.image,
                    alt: mirror_5.name,
                    className: "h-20 w-20 rounded-2xl object-cover flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                    lineNumber: 299,
                    columnNumber: 144
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-[0.25em] text-[#ac795a] font-sans mb-2",
                            children: mirror_5.tag
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                            lineNumber: 299,
                            columnNumber: 278
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-lg font-light",
                            children: mirror_5.name
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                            lineNumber: 299,
                            columnNumber: 381
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#5c4032]/70 leading-relaxed mt-2",
                            children: mirror_5.description
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                            lineNumber: 299,
                            columnNumber: 436
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                    lineNumber: 299,
                    columnNumber: 253
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Collections/showcase.jsx",
            lineNumber: 299,
            columnNumber: 104
        }, this)
    }, mirror_5.name, false, {
        fileName: "[project]/src/Components/Collections/showcase.jsx",
        lineNumber: 299,
        columnNumber: 10
    }, this);
}
function _ShowcaseVisibleMirrorsMap(mirror_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group overflow-hidden rounded-[2rem] border border-[#ac795a]/12 bg-[#fffaf2] shadow-[0_20px_50px_rgba(92,64,50,0.06)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: mirror_4.image,
                        alt: mirror_4.name,
                        className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 302,
                        columnNumber: 225
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[#5c4032]/80 via-[#5c4032]/18 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 302,
                        columnNumber: 368
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-[#fef6e9]/20 bg-[#fef6e9]/90 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#8f6348] font-sans",
                                children: mirror_4.tag
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Collections/showcase.jsx",
                                lineNumber: 302,
                                columnNumber: 531
                            }, this),
                            mirror_4.bestSeller && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full border border-[#fef6e9]/20 bg-[#ac795a] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#fef6e9] font-sans",
                                children: "Best seller"
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Collections/showcase.jsx",
                                lineNumber: 302,
                                columnNumber: 725
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 302,
                        columnNumber: 471
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#fef6e9]/72 text-[9px] uppercase tracking-[0.3em] font-sans mb-2",
                                            children: [
                                                mirror_4.shape,
                                                " - ",
                                                mirror_4.finish
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                                            lineNumber: 302,
                                            columnNumber: 1031
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-2xl font-light italic text-[#fef6e9]",
                                            children: mirror_4.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                                            lineNumber: 302,
                                            columnNumber: 1157
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                                    lineNumber: 302,
                                    columnNumber: 1006
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-[#fef6e9]/20 bg-[#fef6e9]/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#fef6e9]/90 font-sans",
                                    children: mirror_4.size
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/Collections/showcase.jsx",
                                    lineNumber: 302,
                                    columnNumber: 1241
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/Collections/showcase.jsx",
                            lineNumber: 302,
                            columnNumber: 950
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 302,
                        columnNumber: 896
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 302,
                columnNumber: 169
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#5c4032]/75 leading-relaxed",
                        children: mirror_4.description
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 302,
                        columnNumber: 1454
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase tracking-[0.25em] text-[#ac795a] font-sans",
                                children: mirror_4.room
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Collections/showcase.jsx",
                                lineNumber: 302,
                                columnNumber: 1591
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-glass border-[#ac795a]/20 bg-white/70 px-4 py-2 text-[10px] text-[#5c4032]",
                                children: "View piece"
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Collections/showcase.jsx",
                                lineNumber: 302,
                                columnNumber: 1692
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/Components/Collections/showcase.jsx",
                        lineNumber: 302,
                        columnNumber: 1529
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/Components/Collections/showcase.jsx",
                lineNumber: 302,
                columnNumber: 1433
            }, this)
        ]
    }, mirror_4.name, true, {
        fileName: "[project]/src/Components/Collections/showcase.jsx",
        lineNumber: 302,
        columnNumber: 10
    }, this);
}
function _ShowcaseAnonymousValuesMap(value_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: value_0,
        children: value_0
    }, value_0, false, {
        fileName: "[project]/src/Components/Collections/showcase.jsx",
        lineNumber: 305,
        columnNumber: 10
    }, this);
}
function _ShowcaseMirrorCollectionsFilter(mirror_3) {
    return mirror_3.bestSeller;
}
var _c;
__turbopack_context__.k.register(_c, "Showcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
]);

//# sourceMappingURL=_0-xoy7w._.js.map
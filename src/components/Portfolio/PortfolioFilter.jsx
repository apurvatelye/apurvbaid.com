// import { useState, useEffect, useRef } from "react";

// export default function PortfolioFilter({
//     filters,
//     activeFilter,
//     setActiveFilter,
// }) {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Close dropdown on outside click
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(event.target)
//             ) {
//                 setIsOpen(false);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             document.removeEventListener(
//                 "mousedown",
//                 handleClickOutside
//             );
//         };
//     }, []);

//     return (
//         <div
//             ref={dropdownRef}
//             className="relative z-50 inline-block"
//         >
//             {/* Dropdown Toggle */}
//             <button
//                 type="button"
//                 onClick={() => setIsOpen((prev) => !prev)}
//                 aria-expanded={isOpen}
//                 aria-haspopup="true"
//                 className="
//                     flex
//                     items-center
//                     justify-between
//                     gap-4
//                     min-w-[135px]
//                     border-b
//                     border-white/70
//                     py-2
//                     text-xs
//                     font-medium
//                     uppercase
//                     tracking-[2px]
//                     text-white
//                     transition-all
//                     duration-300
//                     hover:border-white
//                     sm:min-w-[160px]
//                     sm:text-sm
//                 "
//             >
//                 <span className="truncate max-w-[130px]">
//                     {activeFilter || "Categories"}
//                 </span>

//                 <svg
//                     className={`
//                         h-3
//                         w-3
//                         shrink-0
//                         transition-transform
//                         duration-300
//                         ${isOpen ? "rotate-180" : ""}
//                     `}
//                     viewBox="0 0 12 12"
//                     fill="none"
//                 >
//                     <path
//                         d="M2 4L6 8L10 4"
//                         stroke="currentColor"
//                         strokeWidth="1.3"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     />
//                 </svg>
//             </button>

//             {/* Dropdown Options */}
//             <div
//                 className={`
//                     absolute
//                     right-0
//                     bottom-full
//                     mb-3
//                     w-[190px]
//                     overflow-hidden
//                     border
//                     border-white/20
//                     bg-[#171717]/95
//                     shadow-xl
//                     backdrop-blur-xl
//                     origin-bottom-right
//                     transition-all
//                     duration-300

//                     ${
//                         isOpen
//                             ? "visible translate-y-0 opacity-100"
//                             : "invisible translate-y-2 opacity-0"
//                     }
//                 `}
//             >
//                 <div className="max-h-[250px] overflow-y-auto scrollbar-hide py-2">

//                     {filters.map((filter) => {
//                         const active = activeFilter === filter;

//                         return (
//                             <button
//                                 key={filter}
//                                 type="button"
//                                 onClick={() => {
//                                     setActiveFilter(filter);
//                                     setIsOpen(false);
//                                 }}
//                                 aria-pressed={active}
//                                 className={`
//                                     flex
//                                     w-full
//                                     items-center
//                                     justify-between
//                                     gap-3
//                                     px-4
//                                     py-3
//                                     text-left
//                                     text-xs
//                                     uppercase
//                                     tracking-[1.5px]
//                                     transition-all
//                                     duration-200

//                                     ${
//                                         active
//                                             ? "bg-white/10 text-white"
//                                             : "text-white/60 hover:bg-white/10 hover:text-white"
//                                     }
//                                 `}
//                             >
//                                 <span>{filter}</span>

//                                 {active && (
//                                     <span className="text-white">
//                                         ✓
//                                     </span>
//                                 )}
//                             </button>
//                         );
//                     })}

//                 </div>
//             </div>
//         </div>
//     );
// }



import { useState, useEffect, useRef } from "react";

export default function PortfolioFilter({
    filters,
    activeFilter,
    setActiveFilter,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className="relative z-50"
        >
            {/* Dropdown Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                className="
                    flex
                    min-w-[145px]
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-white/50
                    py-2
                    text-xs
                    uppercase
                    tracking-[2px]
                    text-white
                    transition-all
                    hover:border-white
                    sm:min-w-[175px]
                    sm:text-sm
                "
            >
                <span className="max-w-[140px] truncate">
                    {activeFilter === "All"
                        ? "Categories"
                        : activeFilter}
                </span>

                <svg
                    className={`
                        h-3
                        w-3
                        shrink-0
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                    `}
                    viewBox="0 0 12 12"
                    fill="none"
                >
                    <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            <div
                className={`
                    absolute
                    right-0
                    top-full
                    mt-3
                    w-[200px]
                    overflow-hidden
                    border
                    border-white/15
                    bg-[#171717]
                    shadow-xl
                    origin-top-right
                    transition-all
                    duration-300

                    ${
                        isOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0"
                    }
                `}
            >
                <div className="
                    max-h-[280px]
                    overflow-y-auto
                    scrollbar-hide
                    py-2
                ">
                    {filters.map((filter) => {
                        const active = activeFilter === filter;

                        return (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => {
                                    setActiveFilter(filter);
                                    setIsOpen(false);
                                }}
                                aria-pressed={active}
                                className={`
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    gap-3
                                    px-4
                                    py-3
                                    text-left
                                    text-xs
                                    uppercase
                                    tracking-[1.5px]
                                    transition-colors

                                    ${
                                        active
                                            ? "bg-white/10 text-white"
                                            : "text-white/60 hover:bg-white/10 hover:text-white"
                                    }
                                `}
                            >
                                <span>{filter}</span>

                                {active && (
                                    <span>✓</span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

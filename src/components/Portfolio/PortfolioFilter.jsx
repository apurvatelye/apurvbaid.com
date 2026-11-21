
// export default function PortfolioFilter({
//   filters,
//   activeFilter,
//   setActiveFilter,
// }) {
//   return (
//     <section className="w-full border-b border-zinc-200">
//       <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-8 lg:px-14">

//         <div
//           className="
//             flex
//             min-h-[90px]
//             items-center
//             py-5
//             md:min-h-[110px]
//             lg:min-h-[150px]
//           "
//         >
//           <div
//             className="
//               flex
//               w-full
//               min-w-0
//               flex-wrap
//               items-center
//               justify-center
//               gap-2
//               sm:gap-3
//               md:justify-start
//               md:gap-5
//               lg:gap-10
//             "
//           >
//             {filters.map((filter) => {
//               const active = activeFilter === filter;

//               return (
//                 <button
//                   key={filter}
//                   type="button"
//                   onClick={() => setActiveFilter(filter)}
//                   aria-pressed={active}
//                   className={`
//                     shrink-0
//                     rounded-full
//                     border
//                     transition-all
//                     duration-300
//                     px-3
//                     py-2
//                     text-xs
//                     sm:px-4
//                     sm:text-sm
//                     md:px-5
//                     md:py-2
//                     md:text-base
//                     lg:text-[20px]

//                     ${
//                       active
//                         ? "border-zinc-400 text-zinc-700"
//                         : "border-transparent text-zinc-400 hover:border-zinc-300 hover:text-black"
//                     }
//                   `}
//                 >
//                   {filter}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




import { useState, useRef, useEffect } from "react";

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
            className="relative z-50 shrink-0"
        >
            {/* Dropdown Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-white/60
                    py-2
                    text-xs
                    font-medium
                    uppercase
                    tracking-wider
                    text-white
                    transition-colors
                    hover:border-white
                    sm:text-sm
                "
            >
                <span>
                    {activeFilter === "All"
                        ? "Categories"
                        : activeFilter}
                </span>

                <svg
                    className={`
                        h-3
                        w-3
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
                        strokeWidth="1.2"
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
                    bottom-full
                    mb-3
                    w-48
                    overflow-hidden
                    border
                    border-white/20
                    bg-black/95
                    shadow-xl
                    backdrop-blur-md
                    transition-all
                    duration-300
                    origin-bottom-right

                    ${
                        isOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible translate-y-2 opacity-0"
                    }
                `}
            >
                <div className="max-h-64 overflow-y-auto scrollbar-hide py-2">
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
                                className={`
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    px-4
                                    py-3
                                    text-left
                                    text-xs
                                    uppercase
                                    tracking-wider
                                    transition-colors
                                    duration-200

                                    ${
                                        active
                                            ? "bg-white/10 text-white"
                                            : "text-white/60 hover:bg-white/10 hover:text-white"
                                    }
                                `}
                            >
                                {filter}

                                {active && (
                                    <span className="text-white">
                                        ✓
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

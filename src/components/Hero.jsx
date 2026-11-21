// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Hero = ({
//     firstLine,
//     secondLine,
//     paragraph,
//     leftBottomText,
//     leftBottomIcon,
//     rightBottomText,
// }) => {
//     const heroRef = useRef([]);

//     useEffect(() => {
//         gsap.fromTo(
//             heroRef.current,
//             {
//                 y: 120,
//                 opacity: 0,
//             },
//             {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.08,
//                 duration: 1.2,
//                 ease: "expo.out",
//             }
//         );
//     }, []);

//     return (
//         <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-white sm:px-8 lg:px-16">
//             {/* Hero Content */}
//             <div className="flex flex-col items-center text-center">
//                 {/* First Line */}
//                 <h1
//                     ref={(el) => (heroRef.current[0] = el)}
//                     className="
//             font-anton
//             uppercase
//             leading-tight

//             text-xl
//             tracking-[8px]

//             sm:text-2xl
//             sm:tracking-[12px]

//             md:text-3xl
//             md:tracking-[18px]

//             lg:text-4xl
//             lg:tracking-[28px]

//             xl:text-[42px]
//             xl:tracking-[40px]
//           "
//                 >
//                     {firstLine}
//                 </h1>

//                 {/* Second Line */}
//                 {secondLine && (
//                     <h1
//                         ref={(el) => (heroRef.current[1] = el)}
//                         className="
//               mt-2
//               font-anton
//               uppercase
//               leading-tight

//               text-xl
//               tracking-[8px]

//               sm:text-2xl
//               sm:tracking-[12px]

//               md:text-3xl
//               md:tracking-[18px]

//               lg:text-4xl
//               lg:tracking-[28px]

//               xl:text-[42px]
//               xl:tracking-[40px]
//             "
//                     >
//                         {secondLine}
//                     </h1>
//                 )}

//                 {/* Paragraph */}
//                 {paragraph && (
//                     <p
//                         ref={(el) => (heroRef.current[2] = el)}
//                         className="
//               mt-6
//               max-w-xs
//               text-center
//               text-sm
//               leading-relaxed
//               text-white/60

//               sm:max-w-lg
//               sm:text-base

//               md:max-w-2xl
//               md:text-lg

//               lg:max-w-3xl
//               lg:text-xl

//               xl:max-w-4xl
//             "
//                     >
//                         {paragraph}
//                     </p>
//                 )}
//             </div>

//             {/* Bottom Bar */}
//             <div
//                 className="
//           absolute
//           bottom-6
//           left-0
//           w-full

//           px-5
//           sm:px-8
//           lg:px-16

//           flex
//           items-center
//           justify-between
//           gap-6
//         "
//             >
//                 {/* Left */}
//                 <div
//                     ref={(el) => (heroRef.current[3] = el)}
//                     className="flex items-center gap-3 shrink-0"
//                 >
//                     <span className="text-sm font-medium sm:text-base lg:text-lg whitespace-nowrap">
//                         {leftBottomText}
//                     </span>

//                     {leftBottomIcon && (
//                         <span className="text-lg sm:text-xl">
//                             {leftBottomIcon}
//                         </span>
//                     )}
//                 </div>

//                 {/* Right */}
//                 <div
//                     ref={(el) => (heroRef.current[4] = el)}
//                     className="flex-1 flex justify-end"
//                 >
//                     {rightBottomText}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;








// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Hero = ({
//     firstLine,
//     secondLine,
//     paragraph,
//     leftBottomText,
//     leftBottomIcon,
//     rightBottomText,
// }) => {
//     const heroRef = useRef([]);

//     useEffect(() => {
//         const elements = heroRef.current.filter(Boolean);

//         const animation = gsap.fromTo(
//             elements,
//             {
//                 y: 80,
//                 opacity: 0,
//             },
//             {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.08,
//                 duration: 1.2,
//                 ease: "expo.out",
//             }
//         );

//         return () => {
//             animation.kill();
//         };
//     }, []);

//     return (
//         <section
//             className="
//                 hero-background
//                 relative
//                 flex
//                 w-full
//                 flex-col
//                 items-center
//                 justify-center
//                 overflow-hidden
//                 bg-black
//                 text-white

//                 h-[85svh]
//                 min-h-[500px]
//                 max-h-[850px]

//                 sm:h-screen
//                 sm:min-h-[600px]
//                 sm:max-h-none

//                 px-4
//                 sm:px-8
//                 lg:px-16
//             "
//         >
//             {/* Hero Content */}
//             <div
//                 className="
//                     relative
//                     z-10
//                     flex
//                     w-full
//                     flex-col
//                     items-center
//                     justify-center
//                     px-2
//                     text-center
//                 "
//             >
//                 {/* First Line */}
//                 <h1
//                     ref={(el) => (heroRef.current[0] = el)}
//                     className="
//                         font-anton
//                         uppercase
//                         leading-tight
//                         text-xl
//                         tracking-[6px]

//                         sm:text-2xl
//                         sm:tracking-[12px]

//                         md:text-3xl
//                         md:tracking-[18px]

//                         lg:text-4xl
//                         lg:tracking-[28px]

//                         xl:text-[42px]
//                         xl:tracking-[40px]
//                     "
//                 >
//                     {firstLine}
//                 </h1>

//                 {/* Second Line */}
//                 {secondLine && (
//                     <h1
//                         ref={(el) => (heroRef.current[1] = el)}
//                         className="
//                             mt-2
//                             font-anton
//                             uppercase
//                             leading-tight
//                             text-xl
//                             tracking-[6px]

//                             sm:text-2xl
//                             sm:tracking-[12px]

//                             md:text-3xl
//                             md:tracking-[18px]

//                             lg:text-4xl
//                             lg:tracking-[28px]

//                             xl:text-[42px]
//                             xl:tracking-[40px]
//                         "
//                     >
//                         {secondLine}
//                     </h1>
//                 )}

//                 {/* Paragraph */}
//                 {paragraph && (
//                     <p
//                         ref={(el) => (heroRef.current[2] = el)}
//                         className="
//                             mt-5
//                             max-w-[310px]
//                             text-center
//                             text-sm
//                             leading-relaxed
//                             text-white/70

//                             sm:mt-6
//                             sm:max-w-lg
//                             sm:text-base

//                             md:max-w-2xl
//                             md:text-lg

//                             lg:max-w-3xl
//                             lg:text-xl

//                             xl:max-w-4xl
//                         "
//                     >
//                         {paragraph}
//                     </p>
//                 )}
//             </div>

//             {/* Bottom Bar */}
//             <div
//                 className="
//                     absolute
//                     bottom-5
//                     left-0
//                     z-20
//                     flex
//                     w-full
//                     items-center
//                     justify-between
//                     gap-3
//                     px-4

//                     sm:bottom-6
//                     sm:px-8

//                     lg:px-16
//                 "
//             >
//                 {/* Left Bottom */}
//                 <div
//                     ref={(el) => (heroRef.current[3] = el)}
//                     className="
//                         flex
//                         shrink-0
//                         items-center
//                         gap-2
//                     "
//                 >
//                     <span
//                         className="
//                             whitespace-nowrap
//                             text-xs
//                             font-medium

//                             sm:text-base
//                             lg:text-lg
//                         "
//                     >
//                         {leftBottomText}
//                     </span>

//                     {leftBottomIcon && (
//                         <span className="text-sm sm:text-xl">
//                             {leftBottomIcon}
//                         </span>
//                     )}
//                 </div>

//                 {/* Right Bottom */}
//                 <div
//                     ref={(el) => (heroRef.current[4] = el)}
//                     className="
//                         flex
//                         min-w-0
//                         flex-1
//                         justify-end
//                         overflow-hidden
//                         text-right
//                         text-xs

//                         sm:text-base
//                         lg:text-lg
//                     "
//                 >
//                     <div className="truncate">
//                         {rightBottomText}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;



import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({
    firstLine,
    secondLine,
    paragraph,
    leftBottomText,
    leftBottomIcon,
    rightBottomText,
}) => {
    const heroRef = useRef([]);

    useEffect(() => {
        const elements = heroRef.current.filter(Boolean);

        const animation = gsap.fromTo(
            elements,
            {
                y: 80,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 1.2,
                ease: "expo.out",
            }
        );

        return () => animation.kill();
    }, []);

    return (
        <section
            className="
                relative
                flex
                w-full
                flex-col
                items-center
                justify-center
                overflow-hidden
                bg-black
                text-white

                min-h-0
                h-auto

                px-4
                py-16

                sm:px-8
                sm:py-20

                lg:px-16
                lg:py-24
            "
        >
            {/* Hero Content */}
            <div
                className="
                    relative
                    z-10
                    flex
                    w-full
                    flex-col
                    items-center
                    justify-center
                    text-center
                    px-2
                "
            >
                {/* First Line */}
                <h1
                    ref={(el) => (heroRef.current[0] = el)}
                    className="
                        font-anton
                        uppercase
                        leading-tight

                        text-xl
                        tracking-[6px]

                        sm:text-2xl
                        sm:tracking-[12px]

                        md:text-3xl
                        md:tracking-[18px]

                        lg:text-4xl
                        lg:tracking-[28px]

                        xl:text-[42px]
                        xl:tracking-[40px]
                    "
                >
                    {firstLine}
                </h1>

                {/* Second Line */}
                {secondLine && (
                    <h1
                        ref={(el) => (heroRef.current[1] = el)}
                        className="
                            mt-2
                            font-anton
                            uppercase
                            leading-tight

                            text-xl
                            tracking-[6px]

                            sm:text-2xl
                            sm:tracking-[12px]

                            md:text-3xl
                            md:tracking-[18px]

                            lg:text-4xl
                            lg:tracking-[28px]

                            xl:text-[42px]
                            xl:tracking-[40px]
                        "
                    >
                        {secondLine}
                    </h1>
                )}

                {/* Paragraph */}
                {paragraph && (
                    <p
                        ref={(el) => (heroRef.current[2] = el)}
                        className="
                            mt-5
                            max-w-[310px]
                            text-center
                            text-sm
                            leading-relaxed
                            text-white/70

                            sm:mt-6
                            sm:max-w-lg
                            sm:text-base

                            md:max-w-2xl
                            md:text-lg

                            lg:max-w-3xl
                            lg:text-xl

                            xl:max-w-4xl
                        "
                    >
                        {paragraph}
                    </p>
                )}
            </div>

            {/* Bottom Bar */}
            <div
                className="
                    absolute
                    bottom-3
                    left-0
                    z-20
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4

                    sm:bottom-6
                    sm:px-8

                    lg:px-16
                "
            >
                {/* Left */}
                <div
                    ref={(el) => (heroRef.current[3] = el)}
                    className="flex shrink-0 items-center gap-2"
                >
                    <span className="whitespace-nowrap text-xs font-medium sm:text-base lg:text-lg">
                        {leftBottomText}
                    </span>

                    {leftBottomIcon && (
                        <span className="text-sm sm:text-xl">
                            {leftBottomIcon}
                        </span>
                    )}
                </div>

                {/* Right */}
                <div
                    ref={(el) => (heroRef.current[4] = el)}
                    className="
                        flex
                        min-w-0
                        flex-1
                        justify-end
                        overflow-hidden
                        text-right
                        text-xs
                        sm:text-base
                        lg:text-lg
                    "
                >
                    <div className="truncate">
                        {rightBottomText}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

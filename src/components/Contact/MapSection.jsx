// const MapSection = () => {
//     return (
//         <section className="bg-black py-10">
//             <div className="w-full px-26">
//                 <div className="overflow-hidden rounded-[24px] border border-white/10">
//                     <iframe
//                         title="Office Location"
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.404749567178!2d81.64691599999999!3d21.2554403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd42510d3e9b%3A0xa373ed2fefe454c3!2satel&#39;ye%20apurv!5e0!3m2!1sen!2sin!4v1783512289130!5m2!1sen!2sin"
//                         width="100%"
//                         height="400"
//                         style={{ border: 0 }}
//                         allowFullScreen
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MapSection;



const MapSection = () => {
    return (
        <section className="relative z-10 bg-black py-12 mb-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                <div className="relative w-full overflow-hidden rounded-[24px] border border-white/10">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.404749567178!2d81.64691599999999!3d21.2554403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd42510d3e9b%3A0xa373ed2fefe454c3!2satel&#39;ye%20apurv!5e0!3m2!1sen!2sin!4v1783512289130!5m2!1sen!2sin"
                        className="block w-full h-[320px] sm:h-[400px] lg:h-[500px]"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </div>
        </section>
    );
};

export default MapSection;

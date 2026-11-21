// import ContactForm from "../components/Contact/ContactForm";
// import ContactHero from "../components/Contact/CotactHero";
// import MapSection from "../components/Contact/MapSection";
// import Info from "../components/Info";
// import ScrollFillText from "../components/ScrollFillText";
// // import ContactStretchText from '../components/Contact/ContactStretchText'

// const Contact = () => {
//   return (
//     <>
//       <div className="w-full h-screen bg-[#F9F9F9]">
//         <ContactHero />
//         <MapSection />
//         <ScrollFillText text="LET'S TALK" />
//         <ContactForm />
//         <Info />
//         {/* <ContactStretchText /> */}
//       </div>
//     </>
//   );
// };

// export default Contact;



import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/CotactHero";
import MapSection from "../components/Contact/MapSection";
import Info from "../components/Info";
import ScrollFillText from "../components/ScrollFillText";

const Contact = () => {
    return (
        <main className="
            relative
            flex
            min-h-screen
            h-auto
            w-full
            flex-col
            overflow-x-hidden
            bg-black
        ">

            {/* Contact Hero */}
            <section className="relative w-full shrink-0">
                <ContactHero />
            </section>

            {/* Map Section */}
            <section className="relative w-full shrink-0">
                <MapSection />
            </section>

            {/* Let's Talk Text */}
            <section className="relative w-full shrink-0">
                <ScrollFillText text="LET'S TALK" />
            </section>

            {/* Contact Form */}
            <section className="relative w-full shrink-0">
                <ContactForm />
            </section>

            {/* Footer / Info */}
            <section className="relative w-full shrink-0">
                <Info />
            </section>

        </main>
    );
};

export default Contact;

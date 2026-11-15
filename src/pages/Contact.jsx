import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/CotactHero";
import MapSection from "../components/Contact/MapSection";
import Info from "../components/Info";
import ScrollFillText from "../components/ScrollFillText";
// import ContactStretchText from '../components/Contact/ContactStretchText'

const Contact = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#F9F9F9]">
        <ContactHero />
        <MapSection />
        <ScrollFillText text="LET'S TALK" />
        <ContactForm />
        <Info />
        {/* <ContactStretchText /> */}
      </div>
    </>
  );
};

export default Contact;

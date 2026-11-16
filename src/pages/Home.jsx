import { useEffect, useState } from "react";
import api from "../services/api";
import { resolveApiMedia } from "../utils/apiMedia";
import signature from "../assets/signature.webp";


const navigation = [
  ["About Us", "/about"],
  ["Portfolio", "/portfolio"],
  ["Services We Offer", "/services-we-offer"],
  ["Why Choose Us", "/why-choose-us"],
  ["Space Psychology", "/space-psychology"],
  ["Features", "/features"],
  ["FAQS", "/faqs"],
  ["Career", "/career"],
  ["Contact", "/contact"],
];



export default function Home() {
  const [slides, setSlides] = useState([]);
  const [socialLinks, setSocialLinks] = useState([["Instagram", "https://www.instagram.com/atelye_apurv/?hl=en"], ["LinkedIn", "https://www.linkedin.com/in/apurv-baid-618597136/"]]);
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load homepage carousel and social URLs from backend. No demo fallback slides.
  useEffect(() => {
    let mounted = true;
    Promise.allSettled([api.get("/carousel"), api.get("/site-settings")]).then(([carouselResult, settingsResult]) => {
      if (!mounted) return;
      if (carouselResult.status === "fulfilled" && Array.isArray(carouselResult.value.data)) {
        const rows = carouselResult.value.data.filter((item) => item.active !== false).sort((a,b) => (a.displayOrder ?? 0)-(b.displayOrder ?? 0));
        const apiSlides = rows.map((item) => ({ url: resolveApiMedia(item.image), alt: item.name || "Interior design" })).filter((item) => item.url);
        setSlides(apiSlides); setActive(0);
      }
      if (settingsResult.status === "fulfilled") {
        const settings = settingsResult.value.data || {};
        setSocialLinks([["Instagram", settings.instagramUrl || "https://www.instagram.com/atelye_apurv/?hl=en"], ["LinkedIn", settings.linkedInUrl || "https://www.linkedin.com/"]]);
      }
    });
    return () => { mounted = false; };
  }, []);

  // Automatic Slideshow
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  // Previous Image
  const previousSlide = () => {
    if (!slides.length) return;
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  // Next Image
  const nextSlide = () => {
    if (!slides.length) return;
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            role="img"
            aria-label={slide.alt}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url("${slide.url}")` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navbar - Top Right */}
      <header className="absolute right-0 top-0 z-30 p-3 sm:p-4">
        <div className="flex flex-col items-end">
          {/* Hamburger Icon */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="natural-home-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="group flex h-7 w-7 flex-col items-end justify-center gap-[5px] focus:outline-none"
          >
            <span
              className={`h-[2px] w-[25px] rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[2px] w-[25px] rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-[25px] rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>

          {/* Navigation Menu */}
          <nav
            id="natural-home-navigation"
            aria-label="Main navigation"
            hidden={!menuOpen}
            className="mt-5 flex max-h-[70vh] min-w-[190px] flex-col items-end gap-4 overflow-y-auto border-r border-orange-400 pr-4 text-right [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="inline-block w-fit origin-right text-sm tracking-wide text-white transition-all duration-300 ease-out hover:scale-110 hover:text-orange-400"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Center Signature */}
      <section
        aria-label="Apurv Baid"
        className="absolute inset-0 z-10 flex items-center justify-center px-4"
      >
        <img
          src={signature}
          alt="Atel'ye Apurv"
          className="w-full max-w-[900px]"
        />
      </section>

      {/* Carousel Navigation Arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8">
        {/* Previous Arrow */}
        <button
          type="button"
          aria-label="Previous image"
          onClick={previousSlide}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:h-12 sm:w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Next Arrow */}
        <button
          type="button"
          aria-label="Next image"
          onClick={nextSlide}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 sm:h-12 sm:w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-24 right-5 z-20 flex items-center gap-3 text-[11px] tracking-widest text-white sm:bottom-28 sm:right-10">
        <span>{String(active + 1).padStart(2, "0")}</span>
        <span className="h-px w-8 bg-white/70" />
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 z-20 flex w-full flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-10">
        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] tracking-wider text-white transition-colors duration-300 hover:text-orange-400 sm:text-xs"
            >
              {label} ↗
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-[9px] tracking-[3px] text-white/80 sm:text-[10px]">
          DESIGNED WITH INTENTION
        </p>

        {/* Contact */}
        <a
          href="/contact"
          className="text-[10px] tracking-[2px] text-white transition-colors duration-300 hover:text-orange-400 sm:text-xs"
        >
          LET’S CONNECT <span>↗</span>
        </a>
      </footer>
    </main>
  );
}

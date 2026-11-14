import { useState } from "react";
import { Link } from "react-router-dom";
import FullscreenMenu from "./FullscreenMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 z-[200]
          flex w-full items-center justify-between
          px-5 py-5
          sm:px-8 md:px-10 lg:px-16
        "
      >
        {/* LOGO - LEFT SIDE */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Go to homepage"
          className="cursor-pointer"
        >
          <h1
            className="
              font-billock
              text-white
              leading-none
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[40px]
            "
          >
            Atel'ye Apurv
          </h1>
        </Link>

        {/* HAMBURGER BUTTON - RIGHT SIDE */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            relative flex h-8 w-8 shrink-0
            items-center justify-center
            focus:outline-none
          "
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`
              absolute h-[2px] w-5 bg-white
              transition-all duration-500
              ${menuOpen ? "rotate-45" : "-translate-y-[6px]"}
            `}
          />

          <span
            className={`
              absolute h-[2px] w-5 bg-white
              transition-all duration-500
              ${menuOpen ? "-rotate-45" : "translate-y-[6px]"}
            `}
          />
        </button>
      </header>

      {/* FULLSCREEN NAVIGATION MENU */}
      <FullscreenMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Header;

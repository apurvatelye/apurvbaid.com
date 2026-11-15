
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronRight, MessageCircle, X } from "lucide-react";
import "./WhatsAppWidget.css";

const WHATSAPP_NUMBER = "917000060425";

const QUESTIONS = [
  {
    id: "project",
    title: "I'd like to discuss a project",
    message:
      "Hi Apurv, I'd like to discuss a project with you. Could we connect?",
  },
  {
    id: "services",
    title: "I have a question about your services",
    message:
      "Hi Apurv, I have a question about your services. Could you share some more details?",
  },
  {
    id: "connect",
    title: "I'd like to connect with you",
    message:
      "Hi Apurv, I'd love to connect with you. Let me know when you're available.",
  },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleOutsideClick = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        !triggerRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div
      className={`whatsapp-widget ${
        isHomePage ? "whatsapp-widget--home" : "whatsapp-widget--other"
      }`}
    >
      {isOpen && (
        <section
          className="whatsapp-panel"
          ref={panelRef}
          aria-label="WhatsApp quick chat"
          aria-modal="false"
          role="dialog"
        >
          <div className="whatsapp-panel__header">
            <div className="whatsapp-panel__avatar" aria-hidden="true">
              <FaWhatsapp />
            </div>

            <div className="whatsapp-panel__heading">
              <p className="whatsapp-panel__eyebrow">LET'S TALK</p>
              <h2>How can I help you?</h2>

              <span>
                <i />
                Typically replies within a day
              </span>
            </div>

            <button
              className="whatsapp-panel__close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp questions"
            >
              <X size={18} />
            </button>
          </div>

          <div className="whatsapp-panel__body">
            <p className="whatsapp-panel__prompt">
              Choose a topic to start a conversation
            </p>

            <div className="whatsapp-panel__questions">
              {QUESTIONS.map((question) => (
                <button
                  className="whatsapp-question"
                  key={question.id}
                  type="button"
                  onClick={() => openWhatsApp(question.message)}
                >
                  <span>{question.title}</span>
                  <ChevronRight size={17} aria-hidden="true" />
                </button>
              ))}
            </div>

            <p className="whatsapp-panel__note">
              <MessageCircle size={13} />
              Opens WhatsApp with a ready-to-send message
            </p>
          </div>
        </section>
      )}

      <button
        className="whatsapp-launcher"
        type="button"
        ref={triggerRef}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={
          isOpen
            ? "Close WhatsApp chat options"
            : "Open WhatsApp chat options"
        }
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        {isOpen ? <X size={23} /> : <FaWhatsapp />}
      </button>
    </div>
  );
}

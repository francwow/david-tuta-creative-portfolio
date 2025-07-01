"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import MoveUpContainer from "../_components/utility/MoveUpContainer";
import SectionContainer from "../_components/utility/SectionContainer";

const ContactPage = () => {
  const { language } = useLanguage();

  const contactInfo = {
    phone: "+57 300 123 4567",
    email: "david@davidtuta.com",
    location: "Bogotá, Colombia",
    socials: {
      instagram: "https://instagram.com/davidtuta",
      linkedin: "https://linkedin.com/in/davidtuta",
      behance: "https://behance.net/davidtuta",
      vimeo: "https://vimeo.com/davidtuta",
    },
  };

  const handleContactClick = (type: string, value: string) => {
    switch (type) {
      case "phone":
        window.open(`tel:${value}`, "_self");
        break;
      case "email":
        window.open(`mailto:${value}`, "_self");
        break;
      case "social":
        window.open(value, "_blank");
        break;
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    type: string,
    value: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleContactClick(type, value);
    }
  };

  return (
    <SectionContainer>
      <section className="contact-section w-full flex flex-col justify-center items-center text-center py-20 lg:py-32">
        <MoveUpContainer>
          <h1 className="text-[3rem] lg:text-[5rem] font-extrabold mb-6">
            {language === "ES" ? "CONTACTO" : "CONTACT"}
          </h1>
        </MoveUpContainer>

        <MoveUpContainer>
          <p className="text-[1.2rem] lg:text-[1.5rem] font-light max-w-[600px] lg:max-w-[800px] px-4 mb-8">
            {language === "ES"
              ? "¿Listo para crear algo increíble juntos? Hablemos sobre tu próximo proyecto."
              : "Ready to create something amazing together? Let's talk about your next project."}
          </p>
        </MoveUpContainer>

        <MoveUpContainer>
          <button
            onClick={() => handleContactClick("email", contactInfo.email)}
            aria-label={
              language === "ES"
                ? "Enviar email para iniciar proyecto"
                : "Send email to start project"
            }
            className="bg-yellow-500 text-sky-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-sky-950 transition-colors duration-300 transform hover:scale-105"
          >
            {language === "ES" ? "Iniciar Proyecto" : "Start Project"}
          </button>
        </MoveUpContainer>
      </section>

      {/* Contact Information */}
      <section
        className="contact-info w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-16"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Direct Contact */}
          <MoveUpContainer>
            <div className="space-y-8">
              <h2
                id="contact-heading"
                className="text-[2rem] lg:text-[2.5rem] font-bold mb-8"
              >
                {language === "ES"
                  ? "Información de Contacto"
                  : "Contact Information"}
              </h2>

              <div className="space-y-6" role="list">
                {/* Phone */}
                <div
                  onClick={() => handleContactClick("phone", contactInfo.phone)}
                  onKeyDown={(e) =>
                    handleKeyDown(e, "phone", contactInfo.phone)
                  }
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${language === "ES" ? "Llamar al" : "Call"} ${
                    contactInfo.phone
                  }`}
                  className="contact-item group cursor-pointer p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-sky-950 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-rounded text-sky-950 text-xl">
                        phone
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">
                        {language === "ES" ? "Teléfono" : "Phone"}
                      </p>
                      <p className="text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div
                  onClick={() => handleContactClick("email", contactInfo.email)}
                  onKeyDown={(e) =>
                    handleKeyDown(e, "email", contactInfo.email)
                  }
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${
                    language === "ES" ? "Enviar email a" : "Send email to"
                  } ${contactInfo.email}`}
                  className="contact-item group cursor-pointer p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-sky-950 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-rounded text-sky-950 text-xl">
                        mail
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">
                        {language === "ES" ? "Email" : "Email"}
                      </p>
                      <p className="text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  className="contact-item p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)]"
                  role="listitem"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-rounded text-sky-950 text-xl">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">
                        {language === "ES" ? "Ubicación" : "Location"}
                      </p>
                      <p className="text-lg font-semibold">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MoveUpContainer>

          {/* Social Media */}
          <MoveUpContainer>
            <div className="space-y-8">
              <h2 className="text-[2rem] lg:text-[2.5rem] font-bold mb-8">
                {language === "ES" ? "Redes Sociales" : "Social Media"}
              </h2>

              <div className="space-y-6" role="list">
                {/* Instagram */}
                <div
                  onClick={() =>
                    handleContactClick("social", contactInfo.socials.instagram)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, "social", contactInfo.socials.instagram)
                  }
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${
                    language === "ES"
                      ? "Visitar perfil de Instagram"
                      : "Visit Instagram profile"
                  }`}
                  className="contact-item group cursor-pointer p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-sky-950 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-rounded text-white text-xl">
                        photo_camera
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">
                        Instagram
                      </p>
                      <p className="text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                        @davidtuta
                      </p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div
                  onClick={() =>
                    handleContactClick("social", contactInfo.socials.linkedin)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, "social", contactInfo.socials.linkedin)
                  }
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${
                    language === "ES"
                      ? "Visitar perfil de LinkedIn"
                      : "Visit LinkedIn profile"
                  }`}
                  className="contact-item group cursor-pointer p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-sky-950 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-rounded text-white text-xl">
                        work
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">
                        LinkedIn
                      </p>
                      <p className="text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                        David Tuta
                      </p>
                    </div>
                  </div>
                </div>

                {/* Behance */}
                <div
                  onClick={() =>
                    handleContactClick("social", contactInfo.socials.behance)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, "social", contactInfo.socials.behance)
                  }
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${
                    language === "ES"
                      ? "Visitar perfil de Behance"
                      : "Visit Behance profile"
                  }`}
                  className="contact-item group cursor-pointer p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-sky-950 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-rounded text-white text-xl">
                        design_services
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">
                        Behance
                      </p>
                      <p className="text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                        davidtuta
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vimeo */}
                <div
                  onClick={() =>
                    handleContactClick("social", contactInfo.socials.vimeo)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, "social", contactInfo.socials.vimeo)
                  }
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${
                    language === "ES"
                      ? "Visitar perfil de Vimeo"
                      : "Visit Vimeo profile"
                  }`}
                  className="contact-item group cursor-pointer p-6 bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-sky-950 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-rounded text-white text-xl">
                        play_circle
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-light">Vimeo</p>
                      <p className="text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                        davidtuta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MoveUpContainer>
        </div>
      </section>

      {/* Call to Action Bottom */}
      <section className="contact-cta w-full text-center py-16 lg:py-20">
        <MoveUpContainer>
          <div className="max-w-[800px] mx-auto px-4">
            <h3 className="text-[2rem] lg:text-[3rem] font-bold mb-6">
              {language === "ES"
                ? "¿Tienes un proyecto en mente?"
                : "Have a project in mind?"}
            </h3>
            <p className="text-[1.1rem] lg:text-[1.3rem] font-light mb-8 text-gray-300">
              {language === "ES"
                ? "No dudes en contactarme. Estoy aquí para ayudarte a hacer realidad tu visión creativa."
                : "Don't hesitate to reach out. I'm here to help you bring your creative vision to life."}
            </p>
            <button
              onClick={() => handleContactClick("email", contactInfo.email)}
              aria-label={
                language === "ES"
                  ? "Enviar mensaje por email"
                  : "Send message via email"
              }
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-sky-950 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-sky-950 transition-all duration-300 transform hover:scale-105"
            >
              {language === "ES" ? "Enviar Mensaje" : "Send Message"}
            </button>
          </div>
        </MoveUpContainer>
      </section>
    </SectionContainer>
  );
};

export default ContactPage;

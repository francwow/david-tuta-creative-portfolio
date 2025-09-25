"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import MoveUpContainer from "../_components/utility/MoveUpContainer";
import SectionContainer from "../_components/utility/SectionContainer";
import ColorOverlay from "../_components/utility/ColorOverlay";
import Link from "next/link";

const ContactPage = () => {
  const { language } = useLanguage();

  const contactInfo = {
    phone: "+57 300 123 4567",
    email: "david@davidtuta.com",
    location: "Bogotá, Colombia",
    socials: {
      instagram: "https://instagram.com",
      linkedin: "https://youtube.com",
      behance: "https://behance.net",
      vimeo: "https://vimeo.com",
    },
  };

  return (
    <SectionContainer>
      <section className="contact-section w-full h-full flex flex-col justify-center items-center relative">
        {/* Background and Overlay */}
        <div className="contact-bg absolute inset-0 bg-[url('../assets/images/social-event.webp')] bg-cover bg-center opacity-50"></div>
        <ColorOverlay bgColor="bg-[rgba(3,20,33,0.65)]" />

        <div className="contact-container w-full flex flex-col justify-center items-center text-start my-7 lg:my-12 max-w-[550px] lg:max-w-[1200px] m-auto p-3 lg:p-5 z-[99]">
          <div className="w-full mb-5 lg:mb-10">
            <MoveUpContainer>
              <h2 className="text-[2rem] lg:text-[3rem] font-bold font-(family-name:--font-geist) mb-2 lg:mb-5">
                {language === "ES"
                  ? "Creemos experiencias inolvidables juntos"
                  : "Let's create unforgettable experiences together"}
              </h2>
            </MoveUpContainer>

            {/* Links */}
            <div className="w-full lg:text-xl font-light leading-relaxed text-start flex flex-col justify-between items-start mt-10 gap-8">
              <div className="w-full relative">
                <MoveUpContainer>
                  <div className="w-full border-b-1 border-gray-200/55 pb-3">
                    <div className="w-full font-(family-name:--font-inter) flex justify-between items-end gap-2">
                      <span className="text-[1.1rem] lg:text-[1.4rem] font-semibold">
                        Email
                      </span>
                      <Link
                        target="_blank"
                        href="mailto:comercialdonosofilms@gmail.com"
                      >
                        <span className="text-orange-500 cursor-pointer">
                          {contactInfo.email}
                        </span>
                      </Link>
                    </div>
                  </div>
                </MoveUpContainer>
              </div>

              <div className="w-full relative">
                <MoveUpContainer>
                  <div className="w-full border-b-1 border-gray-200/55 pb-3">
                    <div className="w-full font-(family-name:--font-inter) flex justify-between items-end gap-2">
                      <span className="text-[1.1rem] lg:text-[1.4rem] font-semibold">
                        {language === "ES" ? "Teléfono" : "Phone "}
                      </span>
                      <Link target="_blank" href="https://wa.me/573001234567">
                        <span className="text-orange-500 cursor-pointer">
                          {contactInfo.phone}
                        </span>
                      </Link>
                    </div>
                  </div>
                </MoveUpContainer>
              </div>

              <div className="w-full relative">
                <MoveUpContainer>
                  <div className="w-full border-b-1 border-gray-200/55 pb-3">
                    <div className="w-full font-(family-name:--font-inter) flex justify-between items-end gap-2">
                      <span className="text-[1.1rem] lg:text-[1.4rem] font-semibold">
                        Socials
                      </span>
                      <div className="flex flex-col lg:flex-row gap-4 text-orange-500">
                        <Link
                          href={contactInfo.socials.instagram}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          Instagram
                        </Link>
                        <Link
                          href={contactInfo.socials.linkedin}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          Youtube
                        </Link>
                        <Link
                          href={contactInfo.socials.behance}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          Behance
                        </Link>
                        <Link
                          href={contactInfo.socials.vimeo}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          Vimeo
                        </Link>
                      </div>
                    </div>
                  </div>
                </MoveUpContainer>
              </div>

              <div className="w-full">
                <MoveUpContainer>
                  <div className="w-full font-(family-name:--font-inter) flex justify-between items-end gap-2">
                    <span className="text-[1rem] lg:text-[1.2rem] font-extralight">
                      {language === "ES"
                        ? "Bogotá / Colombia"
                        : "Bogota / Colombia"}
                    </span>
                  </div>
                </MoveUpContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default ContactPage;

"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import MoveUpContainer from "../_components/utility/MoveUpContainer";
import SectionContainer from "../_components/utility/SectionContainer";
import Image from "next/image";
import aboutImg from "@/assets/images/tut-desktop-webp.webp";
import aboutImgMobile from "@/assets/images/tut-mobile-webp.webp";

const AboutPage = () => {
  const { language } = useLanguage();

  const skills = [
    {
      textEN: "Production",
      textES: "Producción",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clapperboard-icon lucide-clapperboard"
        >
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </svg>
      ),
      descEN:
        "Crafting stories through the lens, from concept to final cut. Whether it's a commercial, a short film, or content for social media, every frame is designed to captivate.",
      descES:
        "Creando historias a través del lente, desde la idea hasta la edición final. Ya sea un comercial, un cortometraje o contenido para redes sociales, cada toma está pensada para cautivar.",
    },
    {
      textEN: "Photography",
      textES: "Fotografía",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-camera-icon lucide-camera"
        >
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
      descEN:
        "Capturing emotion, light, and composition in a single shot. From portraits to product shoots, each image tells a unique story.",
      descES:
        "Capturando emociones, luz y composición en una sola toma. Desde retratos hasta sesiones de producto, cada imagen cuenta una historia única.",
    },
    {
      textEN: "Design",
      textES: "Diseño",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-brush-icon lucide-brush"
        >
          <path d="m11 10 3 3" />
          <path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" />
          <path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
        </svg>
      ),
      descEN:
        "Transforming ideas into visual impact. Branding, layouts, and digital experiences brought to life with bold creativity and attention to detail.",
      descES:
        "Transformando ideas en impacto visual. Marcas, diseños y experiencias digitales llevadas a la vida con creatividad audaz y atención al detalle.",
    },
    {
      textEN: "3D Animation",
      textES: "Animación 3D",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-rotate3d-icon lucide-rotate-3d"
        >
          <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
          <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
          <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
        </svg>
      ),
      descEN:
        "Bringing imagination into motion. From characters to environments, 3D animation adds depth and dynamism to any creative project.",
      descES:
        "Traer la imaginación al movimiento. Desde personajes hasta entornos, la animación 3D añade profundidad y dinamismo a cualquier proyecto creativo.",
    },
  ];

  return (
    <SectionContainer>
      <section className="about-section w-full relative flex flex-col">
        {/* Title */}
        <div className="about-title w-full flex flex-col justify-center items-center text-center my-7 lg:my-0 font-(family-name:--font-geist)">
          <MoveUpContainer>
            <h2 className="text-[3rem] lg:text-[9rem] font-extrabold">
              {language === "ES" ? "DAVID TUTA" : "DAVID TUTA"}
            </h2>
          </MoveUpContainer>
          <MoveUpContainer>
            <h2 className="text-[2rem] lg:text-[6rem] font-semibold">
              {language === "ES"
                ? "Creativo Audiovisual"
                : "Audiovisual Creative"}
            </h2>
          </MoveUpContainer>
          <MoveUpContainer>
            <div>
              <h2 className="text-[2rem] lg:text-[6rem] font-semibold">
                {language === "ES" ? "Bogotá / Colombia" : "Bogota / Colombia"}
              </h2>
            </div>
          </MoveUpContainer>
        </div>

        {/* About me */}
        <div className="about-description flex flex-col lg:flex-row justify-center items-cente gap-6 max-w-[450px] lg:max-w-[1200px] m-auto my-7 lg:my-0 lg:mb-12">
          <div className="basis-[50%] lg:p-5">
            <Image
              className="hidden lg:block"
              src={aboutImg}
              alt="image of David Tuta"
            />
            <Image
              className="block lg:hidden"
              src={aboutImgMobile}
              alt="image of David Tuta"
            />
          </div>
          <div className="basis-[50%] p-3 lg:p-5">
            <MoveUpContainer>
              <h2 className="text-[2rem] lg:text-[3rem] font-bold font-(family-name:--font-geist) mb-2 lg:mb-5">
                {language === "ES" ? "Sobre mí" : "About me"}
              </h2>
            </MoveUpContainer>
            <MoveUpContainer>
              <p className="lg:text-2xl font-light leading-relaxed">
                {language === "ES"
                  ? "Soy un filmmaker apasionado por transformar ideas en narrativas visuales impactantes. Mi experiencia abarca desde la concepción inicial hasta la postproducción, incluyendo la creación de efectos 3D y fotografía."
                  : "I am a filmmaker passionate about transforming ideas into impactful visual narratives. My experience ranges from initial conception to post-production, including the creation of 3D effects and photography."}
              </p>
            </MoveUpContainer>

            <MoveUpContainer>
              <p className="lg:text-2xl font-light leading-relaxed">
                {language === "ES"
                  ? "Me especializo en la producción de videos para redes sociales y comunicación corporativa, tanto interna como externa."
                  : "I specialize in producing videos for social media and corporate communication, both internal and external."}
              </p>
            </MoveUpContainer>

            <MoveUpContainer>
              <p className="lg:text-2xl font-light leading-relaxed">
                {language === "ES"
                  ? "Cada proyecto es una oportunidad para crear contenido que inspire conecte y marque la diferencia."
                  : "Each project is an opportunity to create content that inspires, connects and makes a difference."}
              </p>
            </MoveUpContainer>
          </div>
        </div>

        {/* Skills */}
        <div className="about-skills w-full flex flex-col justify-center items-center text-start my-7 lg:my-12 lg:max-w-[1200px] m-auto p-3 lg:p-5">
          <div className="w-full mb-5 lg:mb-10">
            <MoveUpContainer>
              <h2 className="text-[2rem] lg:text-[3rem] font-bold font-(family-name:--font-geist)">
                {language === "ES" ? "Habilidades" : "Skills"}
              </h2>
            </MoveUpContainer>
          </div>

          <div className="w-full">
            <ul className="skills w-full grid grid-cols-1 lg:grid-cols-2 lg:text-2xl font-light leading-relaxed gap-10 lg:gap-20 items-start">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-center items-start gap-2"
                >
                  <MoveUpContainer>
                    <div className="flex flex-row justify-start items-center gap-2">
                      <span className="text-orange-500">{skill.icon}</span>

                      <span className="font-semibold">
                        {language === "ES" ? skill.textES : skill.textEN}
                      </span>
                    </div>

                    <div className="text-left">
                      {language === "ES" ? skill.descES : skill.descEN}
                    </div>
                  </MoveUpContainer>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="about-experience w-full flex flex-col justify-center items-center text-start my-7 lg:my-12 lg:max-w-[1200px] m-auto p-3 lg:p-5">
          <div className="w-full mb-5 lg:mb-10">
            <MoveUpContainer>
              <h2 className="text-[2rem] lg:text-[3rem] font-bold font-(family-name:--font-geist)">
                {language === "ES" ? "Experiencia" : "Experience"}
              </h2>
            </MoveUpContainer>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default AboutPage;

"use client";

import { useLanguage } from "@/contexts/ContextHooks";
import MoveUpContainer from "../_components/utility/MoveUpContainer";
import SectionContainer from "../_components/utility/SectionContainer";
import Image from "next/image";

// Images
import aboutImg from "@/assets/images/about/tut-desktop-webp.webp";
import aboutImgMobile from "@/assets/images/about/tut-mobile-webp.webp";
import aboutVideo from "@/assets/images/about/video.jpg";
import aboutPhotography from "@/assets/images/about/photography.jpg";
import aboutDesign from "@/assets/images/about/design.jpg";
import about3DAnimation from "@/assets/images/about/3d.jpg";
import CTA from "../_components/utility/CTA";
import { useLenis } from "@/hooks/useLenis";

const AboutPage = () => {
  const { language } = useLanguage();

  // Initialize Lenis for smooth scrolling
  useLenis();

  const skills = [
    {
      image: aboutVideo,
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
      image: aboutPhotography,
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
      image: aboutDesign,
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
      image: about3DAnimation,
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
        <div className="about-description flex flex-col lg:flex-row justify-center items-cente gap-6 max-w-[550px] lg:max-w-[1200px] m-auto my-7 lg:my-0 lg:mb-12">
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
              <p className="lg:text-xl font-light leading-relaxed">
                {language === "ES"
                  ? "Soy un filmmaker apasionado por transformar ideas en narrativas visuales impactantes. Mi experiencia abarca desde la concepción inicial hasta la postproducción, incluyendo la creación de efectos 3D y fotografía."
                  : "I am a filmmaker passionate about transforming ideas into impactful visual narratives. My experience ranges from initial conception to post-production, including the creation of 3D effects and photography."}
              </p>
            </MoveUpContainer>

            <MoveUpContainer>
              <p className="lg:text-xl font-light leading-relaxed">
                {language === "ES"
                  ? "Me especializo en la producción de videos para redes sociales y comunicación corporativa, tanto interna como externa."
                  : "I specialize in producing videos for social media and corporate communication, both internal and external."}
              </p>
            </MoveUpContainer>

            <MoveUpContainer>
              <p className="lg:text-xl font-light leading-relaxed">
                {language === "ES"
                  ? "Cada proyecto es una oportunidad para crear contenido que inspire conecte y marque la diferencia."
                  : "Each project is an opportunity to create content that inspires, connects and makes a difference."}
              </p>
            </MoveUpContainer>
          </div>
        </div>

        {/* Skills */}
        <div className="about-skills w-full flex flex-col justify-center items-center text-start my-7 lg:my-12 max-w-[550px] lg:max-w-[1200px] m-auto p-3 lg:p-5">
          <div className="w-full mb-5 lg:mb-10">
            <MoveUpContainer>
              <h2 className="text-[2rem] lg:text-[3rem] font-bold font-(family-name:--font-geist)">
                {language === "ES" ? "Habilidades" : "Skills"}
              </h2>
            </MoveUpContainer>
          </div>

          <div className="w-full">
            <ul className="skills w-full grid grid-cols-1 lg:grid-cols-2 lg:text-xl font-light leading-relaxed gap-10 lg:gap-20 items-start">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-between items-start gap-2 bg-[rgb(4,22,24)] rounded p-3 lg:p-5 w-full h-full relative overflow-hidden"
                >
                  <div className="w-full h-full absolute inset-0">
                    <div className="overlay w-full h-full absolute inset-0 bg-gradient-to-t from-black/80 from-30% to-black/30 to-100%"></div>
                    <Image
                      src={skill.image}
                      alt={skill.textEN}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full">
                    <MoveUpContainer>
                      <div className="flex flex-row justify-start items-center gap-2">
                        <span className="text-orange-500">{skill.icon}</span>

                        <h3 className="font-semibold text-[1.3rem] lg:text-[1.7rem] text-gray-200">
                          {language === "ES" ? skill.textES : skill.textEN}
                        </h3>
                      </div>

                      <div className="text-left text-gray-200 mt-2 leading-normal">
                        {language === "ES" ? skill.descES : skill.descEN}
                      </div>
                    </MoveUpContainer>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div className="about-experience w-full flex flex-col justify-center items-center text-start my-7 lg:my-12 max-w-[550px] lg:max-w-[1200px] m-auto p-3 lg:p-5">
          <div className="w-full mb-5 lg:mb-10">
            <MoveUpContainer>
              <h2 className="text-[2rem] lg:text-[3rem] font-bold font-(family-name:--font-geist) mb-2 lg:mb-5">
                {language === "ES" ? "Experiencia" : "Experience"}
              </h2>
            </MoveUpContainer>
            <div className="w-full lg:text-xl font-light leading-relaxed text-start">
              <MoveUpContainer>
                <div className="">
                  {language === "ES" ? (
                    <p>
                      En los últimos años, he trabajado en una variedad de
                      disciplinas creativas, construyendo un portafolio diverso
                      que combina narración visual, pensamiento de diseño y
                      habilidades técnicas.
                    </p>
                  ) : (
                    <p>
                      Over the past few years, I&apos;ve worked across a range
                      of creative disciplines, building a diverse portfolio that
                      blends visual storytelling, design thinking, and technical
                      skill.
                    </p>
                  )}
                </div>
              </MoveUpContainer>
              <br />
              <MoveUpContainer>
                <div className="">
                  {language === "ES" ? (
                    <p>
                      <b className="text-orange-500">
                        En la producción de videos&nbsp;
                      </b>
                      he dirigido, filmado y editado contenido para proyectos
                      personales y clientes, desarrollando un ojo agudo para el
                      ritmo, el estado de ánimo y el impacto narrativo.
                    </p>
                  ) : (
                    <p>
                      <b className="text-orange-500">
                        In video production&nbsp;
                      </b>
                      I&apos;ve directed, filmed, and edited content for
                      personal projects and clients alike— developing a sharp
                      eye for pacing, mood, and narrative impact.
                    </p>
                  )}
                </div>
              </MoveUpContainer>
              <br />
              <MoveUpContainer>
                <div className="">
                  {language === "ES" ? (
                    <p>
                      <b className="text-orange-500">
                        A través de la fotografía&nbsp;
                      </b>
                      he explorado todo, desde retratos hasta cobertura de
                      eventos, siempre buscando el cuadro perfecto que capture
                      tanto el sentimiento como la forma.
                    </p>
                  ) : (
                    <p>
                      <b className="text-orange-500">
                        Through photography&nbsp;
                      </b>
                      I&apos;ve explored everything from portraits to event
                      coverage, always seeking the perfect frame that captures
                      both feeling and form.
                    </p>
                  )}
                </div>
              </MoveUpContainer>
              <br />
              <MoveUpContainer>
                <div className="">
                  {language === "ES" ? (
                    <p>
                      <b className="text-orange-500">
                        Mi viaje en el diseño&nbsp;
                      </b>
                      ha incluido trabajo de identidad de marca, diseños
                      editoriales e interfaces digitales, cada pieza creada con
                      un sentido intuitivo de equilibrio, estilo y propósito.
                    </p>
                  ) : (
                    <p>
                      <b className="text-orange-500">
                        My journey in design&nbsp;
                      </b>
                      has included brand identity work, editorial layouts, and
                      digital interfaces—each piece created with an intuitive
                      sense of balance, style, and purpose.
                    </p>
                  )}
                </div>
              </MoveUpContainer>
              <br />
              <MoveUpContainer>
                <div className="">
                  {language === "ES" ? (
                    <p>
                      <b className="text-orange-500">
                        En la animación 3D&nbsp;
                      </b>
                      he traído ideas a la vida a través de modelado, rigging 3D
                      y movimiento. Desde visuales abstractos hasta historias
                      guiadas por personajes, he experimentado con forma y
                      movimiento para crear experiencias visuales únicas.
                    </p>
                  ) : (
                    <p>
                      <b className="text-orange-500">In 3D animation&nbsp;</b>
                      I&apos;ve brought ideas to life through modeling, rigging,
                      and motion. From abstract visuals to character-driven
                      stories, I&apos;ve experimented with form and movement to
                      craft unique visual experiences.
                    </p>
                  )}
                </div>
              </MoveUpContainer>
              <br />
              <MoveUpContainer>
                <div className="">
                  {language === "ES" ? (
                    <p>
                      Cada proyecto ha sido una lección en{" "}
                      <b className="text-orange-500">
                        adaptabilidad, colaboración y creatividad
                      </b>
                      . Siempre estoy listo para el siguiente desafío.
                    </p>
                  ) : (
                    <p>
                      Each project has been a lesson in{" "}
                      <b className="text-orange-500">
                        adaptability, collaboration, and creativity
                      </b>
                      . I&apos;m always ready for the next challenge.
                    </p>
                  )}
                </div>
              </MoveUpContainer>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="w-full flex flex-col justify-center items-center text-start my-7 lg:my-12 max-w-[550px] lg:max-w-[1200px] m-auto p-3 lg:p-5">
          <CTA textEN="Let's work together" textES="Trabajemos juntos" />
        </div>
      </section>
    </SectionContainer>
  );
};

export default AboutPage;

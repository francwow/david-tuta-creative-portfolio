"use client";

import MoveUpContainer from "@/app/_components/utility/MoveUpContainer";
import RotateContainer from "@/app/_components/utility/RotateContainer";
import SectionContainer from "@/app/_components/utility/SectionContainer";
import { WorkItems } from "@/data/workItems";
import { useLenis } from "@/hooks/useLenis";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

const ProductionPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  useLenis();
  const { slug } = use(params);

  return (
    <SectionContainer>
      {WorkItems.map((item) =>
        item.items.map((workItem) => {
          if (workItem.slug === slug) {
            return (
              <div
                key={workItem.slug}
                className="project-item w-full flex flex-col justify-center items-center gap-16 lg:gap-40 text-start my-7 lg:my-12 max-w-[550px] lg:max-w-[1200px] m-auto p-3 lg:p-5 relative"
              >
                <div className="project-item-intro relative flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10">
                  <div className="project-hero-img relative w-full h-full">
                    <MoveUpContainer>
                      <Image
                        src={workItem.mainImg}
                        alt="David Tuta project"
                        width={600}
                        height={600}
                        quality={80}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={workItem.mainImg}
                        className="w-full h-auto object-cover"
                      />
                    </MoveUpContainer>
                  </div>

                  <div className="project-item-text flex flex-col justify-center items-start w-full">
                    <MoveUpContainer>
                      <div className="project-item-title font-(family-name:--font-geist) text-[2rem] lg:text-[3rem] font-bold">
                        <h1>{workItem.title}</h1>
                      </div>
                    </MoveUpContainer>

                    <div className="project-item-info flex flex-col justify-start items-start gap-2 mt-2 w-full">
                      <MoveUpContainer>
                        <p>{workItem.description}</p>
                      </MoveUpContainer>
                      <div className="flex flex-row justify-start items-center gap-4 w-full">
                        <MoveUpContainer>
                          <p>Client</p>
                        </MoveUpContainer>
                        <MoveUpContainer>
                          <p>{workItem.client}</p>
                        </MoveUpContainer>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4 w-full">
                        <MoveUpContainer>
                          <p>Year</p>
                        </MoveUpContainer>
                        <MoveUpContainer>
                          <p>{workItem.year}</p>
                        </MoveUpContainer>
                      </div>
                      <div className="flex flex-row justify-start items-center gap-4 w-full">
                        <MoveUpContainer>
                          <p>Role</p>
                        </MoveUpContainer>
                        <MoveUpContainer>
                          <p>{workItem.role}</p>
                        </MoveUpContainer>
                      </div>
                      <div className="rotate-parent project-item-link mt-4 text-start lg:hover:text-orange-500">
                        <Link href={workItem.link} target="_blank">
                          <MoveUpContainer>
                            <RotateContainer
                              textEN="Project Link"
                              textES="Link del Proyecto"
                              styles={"py-2.5 lg:py-6 px-5"}
                            />
                          </MoveUpContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-item-intro relative flex flex-col justify-center items-center gap-12 lg:gap-20 w-full ">
                  {workItem.projectImages.map((img, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[350px] lg:h-[600px] overflow-hidden"
                    >
                      <MoveUpContainer>
                        <div className="img-modal text-white z-[99] absolute inset-0 flex justify-center items-center text-[2rem] lg:text-[3rem] font-bold">
                          <h3>PLACEHOLDER</h3>
                        </div>
                        <Image
                          src={workItem.mainImg}
                          alt="placeholder img"
                          width={1200}
                          height={1200}
                          quality={80}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={workItem.mainImg}
                          className="absolute inset-0 w-full h-full object-cover blur-xl"
                        />
                      </MoveUpContainer>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        })
      )}
    </SectionContainer>
  );
};

export default ProductionPage;

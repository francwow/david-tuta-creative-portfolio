import Link from "next/link";
import "./page-item.css";
import { WorkItems } from "@/data/workItems";
import Image from "next/image";

type PageItemProps = {
  id: number;
  itemActive: number | null;
};

const PageItem = ({ id, itemActive }: PageItemProps) => {
  return (
    <div
      className={
        id === itemActive
          ? `page-${id} page-item active`
          : `page-${id} page-item`
      }
    >
      <div className="page-content grid gap-2 lg:gap-4 items-center justify-start max-w-6xl mx-auto w-full h-full py-18 px-15">
        {WorkItems.map((workItem, index) => {
          if (itemActive === index) {
            return workItem.items.map((item, j) => {
              return (
                <div
                  key={j}
                  className="relative w-full h-full bg-black flex items-end justify-start overflow-hidden"
                >
                  <Link
                    href={"/work/" + item.slug}
                    className="relative w-full h-full flex flex-col justify-end"
                  >
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className="img-modal text-white z-[99] absolute inset-0 flex justify-center items-center text-[1.4rem] lg:text-[3rem] font-bold">
                        <h3>PLACEHOLDER</h3>
                      </div>
                      <Image
                        src={item.mainImg}
                        alt="placeholder"
                        width={500}
                        height={500}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={item.mainImg}
                        className="absolute inset-0 w-full h-full object-cover object-center blur-xl"
                      />
                    </div>
                  </Link>
                </div>
              );
            });
          }
        })}
      </div>
    </div>
  );
};

export default PageItem;

import Image from "next/image";
import "./slide-show.css";
import { gridItems } from "@/data/gridItems";
import { useEffect, useState } from "react";

type SlideShowProps = {
  id: number;
  navigation: "home" | "pages";
};

const SlideShow = ({ id, navigation }: SlideShowProps) => {
  const [itemActive, setItemActive] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>();

  useEffect(() => {
    let number;

    do {
      number = Math.random();
    } while (number < 0.5);

    setRandomNumber(number);
  }, []);

  useEffect(() => {
    const increaseItem = () => {
      if (itemActive < 1) {
        setItemActive(itemActive + 1);
      } else {
        setItemActive(0);
      }
    };

    const startSlideShow = setInterval(
      increaseItem,
      randomNumber !== undefined ? randomNumber * 1000 : 500
    );

    return () => clearInterval(startSlideShow);
  }, [itemActive, randomNumber]);

  return (
    <div className="slide-show">
      {gridItems.map((item) => {
        return item.id === id ? (
          <div className="slide-show-item" key={item.id}>
            {navigation === "home" ? (
              <div className={"item-modal"}>
                <p>{item.text}</p>
              </div>
            ) : null}

            {item.type === "img" ? (
              <Image
                src={item.items[1]}
                alt="img"
                className="item-active"
                priority
              />
            ) : (
              <div className="video">
                <video
                  src={`/video/${item.items[0]}.mp4`}
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            )}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default SlideShow;

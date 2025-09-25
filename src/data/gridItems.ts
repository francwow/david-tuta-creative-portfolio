import { StaticImageData } from "next/image";
import img1 from "../assets/images/placeholder.webp";
import img2 from "../assets/images/social-event.webp";
import production1 from "../assets/images/about/video.jpg";
import photography1 from "../assets/images/about/photography.jpg";
import design1 from "../assets/images/about/design.jpg";
import animation1 from "../assets/images/about/3d.jpg";

export type GriItems = {
  id: number;
  items: string[] | StaticImageData[];
  type: "img" | "video";
  text: string;
};

export const gridItems: GriItems[] = [
  {
    id: 0,
    items: [img1, production1],
    type: "img",
    text: "Production",
  },
  {
    id: 1,
    items: [img2, photography1],
    type: "img",
    text: "Photography",
  },
  { id: 2, items: [img1, design1], type: "img", text: "Design" },
  { id: 3, items: [img2, animation1], type: "img", text: "3D Animation" },
];

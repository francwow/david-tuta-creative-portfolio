import productionImg1 from "@/assets/images/about/video.jpg";
import photographyImg1 from "@/assets/images/about/photography.jpg";
import designImg1 from "@/assets/images/about/design.jpg";
import animationImg1 from "@/assets/images/about/3d.jpg";

interface WorkItem {
  id: string;
  title: string;
  year: string;
  type: string;
  client: string;
  role: string;
  description: string;
  mainImg: string;
  projectImages: string[];
  link: string;
  slug: string;
}

const productionItems: WorkItem[] = [
  {
    id: "0",
    title: "Production Title 1",
    year: "2023",
    type: "Video Production",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: productionImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "production-title-1",
  },
  {
    id: "1",
    title: "Production Title 2",
    year: "2023",
    type: "Video Production",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: productionImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "production-title-2",
  },
  {
    id: "2",
    title: "Production Title 3",
    year: "2023",
    type: "Video Production",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: productionImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "production-title-3",
  },
  {
    id: "3",
    title: "Production Title 4",
    year: "2023",
    type: "Video Production",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: productionImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "production-title-4",
  },
];

const photographyItems: WorkItem[] = [
  {
    id: "0",
    title: "Photo Title 1",
    year: "2023",
    type: "Photography",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: photographyImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "photography-title-1",
  },
  {
    id: "1",
    title: "Photo Title 2",
    year: "2023",
    type: "Photography",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: photographyImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "photography-title-2",
  },
  {
    id: "2",
    title: "Photo Title 3",
    year: "2023",
    type: "Photography",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: photographyImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "photography-title-3",
  },
  {
    id: "3",
    title: "Photo Title 4",
    year: "2023",
    type: "Photography",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: photographyImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "photography-title-4",
  },
];

const designItems: WorkItem[] = [
  {
    id: "0",
    title: "Design Title 1",
    year: "2023",
    type: "Design",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: designImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "design-title-1",
  },
  {
    id: "1",
    title: "Design Title 2",
    year: "2023",
    type: "Design",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: designImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "design-title-2",
  },
  {
    id: "2",
    title: "Design Title 3",
    year: "2023",
    type: "Design",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: designImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "design-title-3",
  },
  {
    id: "3",
    title: "Design Title 4",
    year: "2023",
    type: "Design",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: designImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "design-title-4",
  },
];

const animationItems: WorkItem[] = [
  {
    id: "0",
    title: "Animation Title 1",
    year: "2023",
    type: "3D Animation",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: animationImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "3d-animation-title-1",
  },
  {
    id: "1",
    title: "Animation Title 2",
    year: "2023",
    type: "3D Animation",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: animationImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "3d-animation-title-2",
  },
  {
    id: "2",
    title: "Animation Title 3",
    year: "2023",
    type: "3D Animation",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: animationImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "3d-animation-title-3",
  },
  {
    id: "3",
    title: "Animation Title 4",
    year: "2023",
    type: "3D Animation",
    client: "Client Name",
    role: "Role Description",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    mainImg: animationImg1.src,
    projectImages: [
      "/images/work/project1-1.jpg",
      "/images/work/project1-2.jpg",
      "/images/work/project1-3.jpg",
      "/images/work/project1-4.jpg",
    ],
    link: "https://www.behance.net/",
    slug: "3d-animation-title-4",
  },
];

export const WorkItems: { items: WorkItem[] }[] = [
  {
    items: productionItems,
  },
  {
    items: photographyItems,
  },
  {
    items: designItems,
  },
  {
    items: animationItems,
  },
];

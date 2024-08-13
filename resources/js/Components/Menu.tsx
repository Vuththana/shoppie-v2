
import { faFacebook, faTelegram, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
type IconItem = {
    name: string;
    icon: any; // The 'any' type can be replaced with a more specific type if needed
    link: string;
};
export const PRODUCTS = [
    {name: "Drag & Drop", link: "#"},
    { name: "Visual Studio X", link: "#" },
    { name: "Easy Content", link: "#" },
]

export const SUPPORT = [
    {name: "Documentation", link: "#"},
    {name: "Guidance", link: "#"},
]

export const COMPANY = [
    { name: "About us", link: "#" },
  ];

export  const Icons: IconItem[] = [
    { name: "facebook", icon: faFacebook, link: "#" },
    { name: "telegram", icon: faTelegram, link: "#" },
    { name: "github", icon: faGithub, link: "#" },
    { name: "instagram", icon: faInstagram, link: "#" },
];



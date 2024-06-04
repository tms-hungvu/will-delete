import { AiOutlineHome } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";
import { IconType } from "react-icons";

export interface INavLink {
  title: string;
  path: string;
  icon: IconType;
}

export const sidebarLinks: INavLink[] = [
  {
    title: "Explore",
    path: "/admin",
    icon: AiOutlineHome,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: TbMovie,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: MdOutlineLiveTv,
  },
];

export const footerLinks = [
  "home",
  "live",
  "contact us",
  "FAQ",
  "Recent release",
  "term of services",
  "premium",
  "About us",
  "Privacy policy",
];

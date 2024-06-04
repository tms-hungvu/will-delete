import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { INavLink, sidebarLinks } from "@/constants/app-link";
import { cn } from "@/utils/helper";
import { BiPlus } from "react-icons/bi";
import { Button } from "antd";
import ButtonGradient from "@/components/Button/ButtonGradient";

const Sidebar = () => {
  const pathname = usePathname();

  const renderLinks = sidebarLinks.map((link: INavLink, index: number) => {
    const isActive = pathname.startsWith(link.path);
    return (
      <li key={index}>
        <Link
          href={link.path}
          className={cn(
            "flex flex-row gap-3 py-1 px-[10px] items-center w-full hover:text-white transition-all duration-300 font-nunito font-semibold",
            isActive && "text-white font-semibold"
          )}
        >
          {<link.icon className="text-[18px]" />}
          <span>{link.title}</span>
        </Link>
      </li>
    );
  });

  return (
    <Fragment>
      <aside className="admin__sidebar u-p-2 u-fs-4">
        <div className="flex items-center justify-center py-4">
          <Link href="/admin" className="flex flex-row items-center gap-x-1">
            <Image
              src={"./assets/svg/quizizz.svg"}
              alt="logo"
              width={50}
              height={50}
              className="sm:h-[28px] h-[24px] sm:w-[28px] w-[24px]"
            />
            <span className="text-white text-primary font-semibold sm:text-[18px] text-[16.75px]">
              Quizizz
            </span>
          </Link>
        </div>

        <div className="flex justify-center items-center my-4">
          <ButtonGradient>
            <BiPlus />
            Create
          </ButtonGradient>
        </div>

        <div className="flex flex-col justify-between">
          <ul className="flex flex-col gap-1 text-base font-medium">
            {renderLinks}
          </ul>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;

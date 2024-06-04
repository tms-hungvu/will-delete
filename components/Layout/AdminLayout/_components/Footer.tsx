import Link from "next/link";

import Logo from "@/components/Logo";

import { footerLinks } from "@/constants/app-link";

const Footer = () => {
  return (
    <footer className="lg:py-10 sm:py-10 py-[20px] w-full">
      <div
        className={`flex flex-col items-center lg:gap-14 md:gap-12 sm:gap-8 gap-6`}
      >
        {/* <Logo /> */}
        <ul className="grid grid-cols-3 items-center justify-start font-medium text-gray-300 capitalize md:gap-x-16 md:gap-y-4 md:gap-4 sm:gap-2 gap-1">
          {footerLinks.map((title, index) => {
            return (
              <li key={index} className="text-center">
                <Link
                  href="/"
                  className="hover:text-primary hover:underline  transition-all duration-300 md:text-[15.25px] sm:text-[14.75px] text-[12px] font-nunito "
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="text-[11.75px] mt-auto text-center font-nunito text-gray-200">
          &copy; 2024 by Quizizz. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

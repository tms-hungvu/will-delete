import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-row items-center gap-x-1">
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
  );
};

export default Logo;

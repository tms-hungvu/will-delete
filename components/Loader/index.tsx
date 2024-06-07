import { memo } from "react";

const Loader = memo(() => {
  return (
    <div className="relative bg-[#fefefe] top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="loader" />
    </div>
  );
});

export default Loader;

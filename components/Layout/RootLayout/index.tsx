import { ReactNode } from "react";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

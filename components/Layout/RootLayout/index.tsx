import { ReactNode } from "react";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

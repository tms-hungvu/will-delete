import { ReactNode, Suspense } from "react";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Loader from "@/components/Loader";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default RootLayout;

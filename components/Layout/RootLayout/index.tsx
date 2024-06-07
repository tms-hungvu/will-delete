import { ReactNode, Suspense } from "react";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Loader from "@/components/Loader";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24">
      <Navbar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default RootLayout;

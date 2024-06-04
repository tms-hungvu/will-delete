import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    document.title = "Quizizz";
  }, []);
  return <main className={`${inter.className}`}>gdfsgg</main>;
}

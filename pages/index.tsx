import Loader from "@/components/Loader";
import { useAuth } from "@/context/AuthContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { loading } = useAuth();

  if (loading) {
    return <Loader />;
  }
  return <main className={`${inter.className}`}></main>;
}

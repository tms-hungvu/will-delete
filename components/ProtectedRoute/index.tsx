import { useEffect, ReactNode, Fragment } from "react";
import { useRouter } from "next/router";

import Loader from "../Loader";

import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return null;
  }

  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;

import { useRouter } from "next/router";

import ProtectedRoute from "@/components/ProtectedRoute";

import { supabase } from "@/utils/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import Loader from "@/components/Loader";


const Admin = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  const signOut = () => {
    try {
      supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ProtectedRoute>
      {user?.email}
      <button onClick={signOut}>Sign out</button>
    </ProtectedRoute>
  );
};

export default Admin;

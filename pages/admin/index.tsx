import { useRouter } from "next/router";

import ProtectedRoute from "@/components/ProtectedRoute";

import { supabase } from "@/utils/supabaseClient";

const Admin = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default Admin;
